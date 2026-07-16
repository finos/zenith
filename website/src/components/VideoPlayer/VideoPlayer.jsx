import React, { useState, useEffect } from 'react';
import styles from './VideoPlayer.module.css';
import VideoCard from './VideoCard.jsx';
import FilterBar from './FilterBar.jsx';
import VideoModal from './VideoModal.jsx';

export default function VideoPlayer() {
  const CATEGORIES = ['quantum', 'XR', 'AI', 'space'];
  const SEARCH_PARAM = 'search';
  const TAGS_PARAM = 'tags';

  const getInitialFilters = () => {
    if (typeof window === 'undefined') {
      return { initialCategories: [], initialSearch: '' };
    }

    const params = new URLSearchParams(window.location.search);
    const initialSearch = params.get(SEARCH_PARAM) || '';
    const initialCategories = (params.get(TAGS_PARAM) || '')
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => CATEGORIES.includes(tag));

    return { initialCategories, initialSearch };
  };

  const { initialCategories, initialSearch } = getInitialFilters();
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(initialCategories);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load videos from JSON
  useEffect(() => {
    const loadVideos = async () => {
      try {
        const response = await fetch('/data/videos.json');
        if (!response.ok) throw new Error('Failed to load videos');
        const data = await response.json();
        setVideos(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error loading videos:', err);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  // Filter videos based on search and categories
  useEffect(() => {
    let filtered = videos;

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(video =>
        video.categories.some(cat => selectedCategories.includes(cat))
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.presenter.toLowerCase().includes(query)
      );
    }

    // Sort by publish date (newest first)
    filtered.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

    setFilteredVideos(filtered);
  }, [videos, selectedCategories, searchQuery]);

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const urlSearch = params.get(SEARCH_PARAM) || '';
      const urlCategories = (params.get(TAGS_PARAM) || '')
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => CATEGORIES.includes(tag));

      setSearchQuery(urlSearch);
      setSelectedCategories(urlCategories);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const nextSearch = searchQuery.trim();
    const nextTags = [...selectedCategories].sort();

    if (nextSearch) {
      params.set(SEARCH_PARAM, nextSearch);
    } else {
      params.delete(SEARCH_PARAM);
    }

    if (nextTags.length > 0) {
      params.set(TAGS_PARAM, nextTags.join(','));
    } else {
      params.delete(TAGS_PARAM);
    }

    const nextQuery = params.toString();
    const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ''}${window.location.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (nextUrl !== currentUrl) {
      window.history.pushState({}, '', nextUrl);
    }
  }, [selectedCategories, searchQuery]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading videos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>Error loading videos: {error}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Zenith Video Library</h1>
        <p>Explore our collection of videos on quantum computing, AI, XR, and space technology.</p>
      </div>

      <FilterBar
        categories={CATEGORIES}
        selectedCategories={selectedCategories}
        onCategoryToggle={handleCategoryToggle}
        onClearFilters={handleClearFilters}
        searchQuery={searchQuery}
        onSearch={handleSearch}
        totalVideos={videos.length}
        filteredCount={filteredVideos.length}
      />

      {filteredVideos.length === 0 ? (
        <div className={styles.noResults}>
          <p>No videos found matching your search criteria.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredVideos.map(video => (
            <VideoCard
              key={video.id}
              video={video}
              onSelect={setSelectedVideo}
            />
          ))}
        </div>
      )}

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}
