import React, { useState, useEffect } from "react";
import "../sass/Main.scss";
function Main() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(
        "https://62a0ea03a9866630f81aed05.mockapi.io/videos"
      );

      const videosData = await data.json();
      setVideos(videosData);
    };
    getVideos();
  }, []);
  console.log(videos);

  function RenderVideos() {}

  return (
    <div className="main-page">
      <div className="video">
        <img className="title-image"
          src="https://static.antyweb.pl/wp-content/uploads/2021/07/23110507/@youtube_yt_2.jpg"
          alt="obraz"
        />
      </div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
      <div className="video"></div>
    </div>
  );
}

export default Main;
