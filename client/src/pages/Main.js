import React, { useEffect, useContext, useState } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../components/Header";
import VideoButton from "../components/VideoButton";
import VideoForm from "../components/VideoForm";
import UserContext from "../utils/UserContext";
import API from "../utils/API";
import Videos from "../utils/Videos";
import { useHistory } from "react-router-dom";

function Main() {
  const user = useContext(UserContext);
  console.log(user);

  const [topicsData, setTopicsData] = useState({
    JS: user.topics.JS,
    HTML: user.topics.HTML,
    CSS: user.topics.CSS,
    React: user.topics.React,
    videos: [],
  });

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.replace("/");
    }
  }, [user, history]);

  if (!user) {
    return null;
  }
  const handleToggle = (name, value) => {
    console.log(name, value);
    let whichVideoArray = [];
    if (value) {
      switch (name) {
        case "JS":
          whichVideoArray = whichVideoArray.concat(Videos.JsVideoArray);
          break;
        case "React":
          whichVideoArray = whichVideoArray.concat(Videos.ReactVideoArray);
          break;
        case "CSS":
          whichVideoArray = whichVideoArray.concat(Videos.cssVideoArray);
          break;
        case "HTML":
          whichVideoArray = whichVideoArray.concat(Videos.htmlVideoArray);
          break;
        default:
          whichVideoArray = [];
          break;
      }
    }
    topicsData.videos = topicsData.videos.concat(whichVideoArray);
    setTopicsData({
      ...topicsData,
      [name]: value,
      videos: topicsData.videos,
    });
    API.addVideo({
      topic: name,
      [name]: value,
      videos: topicsData.videos,
    });
    // .then((res) => {
    //   console.log(res);
    //   if (res.statusText === "OK") {
    //     history.push("/login");
    //   }
    // });
    // console.log(topicsData);
  };

  return (
    <>
      <NavBar />
      <br></br>
      <Container>
        <VideoButton handleToggle={handleToggle} topicsData={topicsData} />
        <VideoForm />
      </Container>
    </>
  );
}

export default Main;
