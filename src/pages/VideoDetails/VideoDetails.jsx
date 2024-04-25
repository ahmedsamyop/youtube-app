import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
import millify from 'millify'
import { getVideosById, videoById, getRelatedVideos } from '../../app/videosSlice'
import './video-details.css'
import Video from '../../components/video/Video'
import SideBar from '../../components/sidebar/SideBar'
import Loading from '../../components/loading/Loading'
import ErrorFetch from '../../components/errorFetch/ErrorFetch'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function VideoDetails() {
  const { id } = useParams()
  const { videos, videoDetails, relatedVideos, isLoading, error } = useSelector(
    (state) => state.videos,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
    if (videos.data?.some((video) => video.videoId === id)) {
      dispatch(videoById(id))
      dispatch(getRelatedVideos(id))
    } else {
      dispatch(getVideosById(id))
        .unwrap()
        .then(() => {
          dispatch(getRelatedVideos(id))
        })
    }
  }, [dispatch, id, videos.data])
  return (
    <>
      <Helmet>
        <title>{videoDetails.title}</title>
      </Helmet>
      <div className="details">
        <SideBar />
        {error && <ErrorFetch error={error} />}
        <div className="wrapper">
          <div className="video-container">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="video-player"
              width={'100%'}
              height={'600px'}
            />
            <div className="info">
              <div className="channel-img">
                {videoDetails.channelThumbnail && (
                  <LazyLoadImage
                    src={videoDetails.channelThumbnail[0].url}
                    alt={videoDetails.channelTitle}
                    effect="blur"
                  />
                )}
              </div>
              <div className="text">
                <h3>{videoDetails.title}</h3>
                <p>{videoDetails.channelTitle}</p>
                <span>
                  {videoDetails?.viewCount && millify(videoDetails.viewCount)} views -{' '}
                  {videoDetails.publishedText || videoDetails.publishDate}
                </span>
              </div>
            </div>
            {/* TODO: description display */}
            {/* <div className="description">{videoDetails.description}</div> */}
          </div>
          <div className="suggestion">
            {isLoading && <Loading />}
            {relatedVideos?.data?.map((related) => {
              return (
                <Video
                  key={related.videoId}
                  videoId={related.videoId}
                  poster={related.thumbnail[0].url}
                  videoTime={related.lengthText}
                  title={related.title}
                  channelImg={related.authorThumbnail ? related.authorThumbnail[0].url : false}
                  channelTitle={related.channelTitle}
                  views={related.viewCount}
                  date={related.publishedTimeText}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoDetails
