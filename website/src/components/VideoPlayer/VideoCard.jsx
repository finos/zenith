import React from 'react';
import styles from './VideoCard.module.css';

export default function VideoCard({ video, onSelect }) {
  const getThumbnailUrl = (youtubeId) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.card} onClick={() => onSelect(video)}>
      <div className={styles.thumbnail}>
        <img
          src={getThumbnailUrl(video.youtubeId)}
          alt={video.title}
          loading="lazy"
        />
        <div className={styles.playButton}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
            <path d="M16 10v28l22-14z" />
          </svg>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{video.title}</h3>
        <p className={styles.description}>{video.description.substring(0, 100)}...</p>
        <div className={styles.metadata}>
          <span className={styles.presenter}>{video.presenter}</span>
          <span className={styles.date}>{formatDate(video.publishedDate)}</span>
        </div>
        <div className={styles.categories}>
          {video.categories.map(cat => (
            <span key={cat} className={styles.category}>
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
