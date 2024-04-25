import React from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'
import './video.css'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Video({ videoId, poster, videoTime, channelImg, title, channelTitle, views, date }) {
  return (
    <>
      {videoId ? (
        <Link to={`/video/${videoId}`}>
          <div className="video">
            <div className="image">
              <LazyLoadImage src={poster} alt="Youtube Poster" effect="blur" />
              <p>{videoTime}</p>
            </div>
            <div className="info">
              <div className="channel-img">
                {channelImg && <LazyLoadImage src={channelImg} alt={title} effect="blur" />}
              </div>
              <div className="text">
                <h3>{title?.length > 50 ? `${title.slice(0, 50)}...` : title}</h3>
                <p>{channelTitle}</p>
                <span>
                  {views && millify(views)} views - {date}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="video">
          <div className="image">
            <span>{''}</span>
          </div>
          <div className="info">
            <div className="channel-img">{''}</div>
            <div className="text">
              <h3>{''}</h3>
              <p>{''}</p>
              <span>{''}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Video
