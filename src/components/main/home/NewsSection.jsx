import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading";
import NewsCard from "./NewsCard";
import * as RestApi from "../../../utils/rest_api_util"

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const result = await RestApi.getNews()
      let response = await result.json();
      setNews(response);
    } catch (error) {}
  };

  return (
    <div className="container news_article__section py-5 my-5">
      <SectionHeading classname="news" name="NEWS" />
      <div className="row py-5">
        {news.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </div>
  )
}

export default NewsSection;
