import React, { useState, useEffect } from 'react';
import styles from './VideoPlayer.module.css';
import VideoCard from './VideoCard.jsx';
import FilterBar from './FilterBar.jsx';
import VideoModal from './VideoModal.jsx';

export default function VideoPlayer() {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const CATEGORIES = ['quantum', 'XR', 'AI', 'space'];

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
