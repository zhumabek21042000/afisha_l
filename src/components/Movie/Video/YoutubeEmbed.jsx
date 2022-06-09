import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import AfishaService from "../../../services/axios/index";
const YoutubeEmbed = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="560"
        src="https://www.youtube.com/embed/AawLM81gIHo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
YoutubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};
export default YoutubeEmbed;
