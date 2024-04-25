import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideosBySearch } from "../../app/videosSlice";

import SideBar from "../../components/sidebar/SideBar";
import Video from "../../components/video/Video";
import Loading from "../../components/loading/Loading";
import "./home.css";
import ErrorFetch from "../../components/errorFetch/ErrorFetch";
import { Helmet } from "react-helmet";
function Home() {
  const dispatch = useDispatch();
  const { videos, isLoading, error } = useSelector((state) => state.videos);

  useEffect(() => {
    if (!videos.data) {
      dispatch(getVideosBySearch("القران"));
    }
  }, [dispatch, videos.data]);
  return (
    <>
      <Helmet>
        <title>You!</title>
      </Helmet>
      <div className="home">
        <SideBar />
        <div className="videos">
          {error && <ErrorFetch error={error} />}
          <div className="wrapper">
            {isLoading && <Loading />}
            {videos?.data
              ?.filter((v) => v.type === "video")
              .map((video) => {
                return (
                  <Video
                    key={video.videoId}
                    videoId={video.videoId}
                    poster={video.thumbnail[0].url}
                    videoTime={video.lengthText}
                    channelImg={video.channelThumbnail[0].url}
                    title={video.title}
                    channelTitle={video.channelTitle}
                    views={video.viewCount}
                    date={video.publishedText}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
