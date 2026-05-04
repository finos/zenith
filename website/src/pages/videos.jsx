import React from 'react';
import Layout from '@theme/Layout';
import VideoPlayer from '../components/VideoPlayer';

export default function VideosPage() {
  return (
    <Layout
      title="Video Library"
      description="Zenith Video Library - Quantum Computing, AI, XR, and Space Technology">
      <main style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <VideoPlayer />
      </main>
    </Layout>
  );
}
