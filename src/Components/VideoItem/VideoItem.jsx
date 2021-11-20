import React from 'react';
import styles from './VideoItem.module.css'

const VideoItem = ({ video: {snippet} }) => 
    <li className={styles.container}>
        <div className={styles.video}>
        <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
        <div className={styles.metadata} >
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channal}>{snippet.channelTitle}</p>
        </div>
        </div>
    </li>;

export default VideoItem;
