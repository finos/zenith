import React, { useEffect } from 'react';
import styles from './VideoModal.module.css';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <div className={styles.content}>
          <div className={styles.videoContainer}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className={styles.info}>
            <h2>{video.title}</h2>
            <div className={styles.metadata}>
              <div className={styles.metaItem}>
                <strong>Presenter:</strong> {video.presenter}
              </div>
              <div className={styles.metaItem}>
                <strong>Published:</strong> {formatDate(video.publishedDate)}
              </div>
            </div>

            <div className={styles.categories}>
              {video.categories.map(cat => (
                <span key={cat} className={styles.category}>
                  {cat}
                </span>
              ))}
            </div>

            <div className={styles.description}>
              <h3>Description</h3>
              <p>{video.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
