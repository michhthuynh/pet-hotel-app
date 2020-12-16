import React, { useEffect, useState } from "react";
import { Video } from "./Video";
import VideoItem from "./VideoItem";
import SearchForm from "../Search/SearchForm";
import * as videoService from "./VideoService";

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await videoService.getVideos();
    const sortVideo = res.data
      .map((video) => {
        console.log(video._id);
        return {
          ...video
        };
      })

    setVideos(sortVideo);
  };

  const loadVideoSearch = async (title:string,description:string) => {
    console.log(title);
    console.log(description);
    const res = await videoService.searchVideo(title,description);
    const sortVideo = res.data
      .map((video) => {
        return {
          ...video
        };
      })

    setVideos(sortVideo);
  };
  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div>
      <SearchForm loadVideoSearch ={loadVideoSearch} />
      <div className="row">
        {videos.map((video) => {
          return <VideoItem video={video} loadVideos={loadVideos} />;
        })}
      </div>
    </div>
  );
};

export default VideoList;
