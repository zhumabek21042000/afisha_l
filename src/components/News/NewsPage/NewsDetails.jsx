import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import AfishaService from "../../../services/axios";
const NewsDetails = (props) => {
  const params = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    AfishaService.get_news_by_id(params.id).then((res) => {
      setNews(res.data);
    });
  });
  const thisIsMyCopy =
    '<p style="text-align: justify;"><img src="https://cdn.kino.kz/news/2825/64c4c6c6-b0a6-11ec-9c59-1edddcf76446.jpg" style="display: block; margin-left: auto; margin-right: auto; max-height: 100%; max-width: 100%;"></p><p style="text-align: justify;"><br></p><p style="text-align: justify;">Дочь Брюса Уиллиса Рамер сделала официальное заявление от имени их семьи, сообщив, что ее знаменитый отец вынужден отказаться от актерской деятельности после того, как ему был поставлен диагноз «афазия», расстройства, вызванного повреждением головного мозга, которое влияет на способность общаться. </p><p style="text-align: justify;">«Мы хотели бы поделиться с удивительными поклонниками тем, что наш любимый Брюс испытывает некоторые проблемы со здоровьем, и недавно ему поставили диагноз афазия, которая влияет на его когнитивные способности. В результате этого и с большим сожалением Брюс отказывается от карьеры, которая так много для него значила. Это действительно сложное время для нашей семьи, и мы так благодарны вам за вашу неизменную любовь, сострадание и поддержку. Мы проходим через это как крепкая семья и хотели бы держать поклонников в курсе происходящего, потому что мы знаем, как много он значит для вас, как и вы для него. С любовью, Эмма, Деми, Рамер, Скаут, Таллула, Мейбл и Эвелин», - говорится в заявлении по этому поводу. </p><p style="text-align: justify;">Отметим, что в последние годы у актера был довольно плотный график, он оказался задействован в основном в малобюджетных боевиках и триллерах. Его усилия были отмечены «Золотой малиной».<br></p>';

  return (
    <div className="container">
      <div className="news-details-title mt-3">{news.title}</div>
      <div className="news-details-data mt-4">
        <span>Новости</span>
        <span>{news.date}</span>
      </div>
      <div
        className="content"
        // dangerouslySetInnerHTML={{ __html: news.description }}
      >
        <span style={{ whiteSpace: "pre-line" }}>{news.description}</span>
      </div>
    </div>
  );
};

export default NewsDetails;
