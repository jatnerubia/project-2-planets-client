import { useEffect, useState } from "react";
import SectionHeading from "../../SectionHeading";
import NewsCard from "./NewsCard";

const NewsArticles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const result = await fetch(
        "https://project-2-planets-server.onrender.com/news"
      );
      let response = await result.json();
      setNews(response);
    } catch (error) {}
  };

  return (
    <div className="container news_article__section my-5">
      <SectionHeading name="NEWS" />
      <div className="row">
        {news.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </div>
  )
}

export default NewsArticles;
