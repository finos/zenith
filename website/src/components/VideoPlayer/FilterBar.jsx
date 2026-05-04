import React from 'react';
import styles from './FilterBar.module.css';

export default function FilterBar({
  categories,
  selectedCategories,
  onCategoryToggle,
  searchQuery,
  onSearch,
  totalVideos,
  filteredCount,
}) {
  return (
    <div className={styles.filterBar}>
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search by title, description, or presenter..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.categorySection}>
        <label className={styles.label}>Filter by Category:</label>
        <div className={styles.categoryButtons}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategories.includes(category) ? styles.active : ''
              }`}
              onClick={() => onCategoryToggle(category)}
            >
              {category}
            </button>
          ))}
          {selectedCategories.length > 0 && (
            <button
              className={styles.clearButton}
              onClick={() =>
                selectedCategories.forEach(cat => onCategoryToggle(cat))
              }
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <div className={styles.resultsInfo}>
        Showing {filteredCount} of {totalVideos} videos
      </div>
    </div>
  );
}
