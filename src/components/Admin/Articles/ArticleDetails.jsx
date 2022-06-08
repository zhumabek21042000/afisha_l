import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AfishaService from "../../../services/axios/index";

const ArticleDetails = () => {
  const [articleData, setArticleData] = useState("");
  const params = useParams();
  useEffect(() => {
    AfishaService.getArticle(params.id).then((res) => {
      setArticleData(res.data);
    });
  });
  return (
    <div
      className="container"
      dangerouslySetInnerHTML={{ __html: articleData }}
    ></div>
  );
};

export default ArticleDetails;
