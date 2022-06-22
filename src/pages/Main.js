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

  return (
    <div className="main-page">
      {videos.map((clip) => {
        return (
          <div className="video" key={clip.id}>
            <img className="video__image" src={clip.picture} alt="obraz" />
            <div className="video__label">
              <div className="video__logo"></div>
              <div className="video__description">
                <h3>title</h3>
                <span>autor</span>
                <span>12 tyś wyś. 2 lata temu</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
