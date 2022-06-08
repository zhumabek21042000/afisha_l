import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import AfishaService from "../../../services/axios/index";
const YoutubeEmbed = ({ url }) => {
  const [id, setId] = useState();
  useEffect(() => {
    setId(AfishaService.youtube_parser(url));
  }, [url]);
  return id ? (
    <div className="video-responsive">
      <iframe
        width="853"
        height="560"
        src={"https://www.youtube.com/embed/" + id}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  ) : (
    "123"
  );
};
YoutubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};
export default YoutubeEmbed;
