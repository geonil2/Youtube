import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './Components/VideoList/VideoList';
import SearchHeader from './Components/SearchHeader/SearchHeader'
import VideoDetail from './Components/VideoDetail/VideoDetail'

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = useCallback(query => {
    setSelectedVideo(null);

    youtube.search(query)
    .then(videos => setVideos(videos));
  }, [youtube]);

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}> 
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
      {selectedVideo && (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
      )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo ? 'list' : 'grid'}/>;
        </div>
      </section>
    </div>
  )
}

export default App;
