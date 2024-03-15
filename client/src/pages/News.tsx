import React, { useEffect, useState } from "react";
import { useGetAllNewsQuery } from "../store/api/newApi";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

interface Source {
  id: string;
  name: string;
}

interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

const News = () => {
  const { isLoading, data: res } = useGetAllNewsQuery("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  console.log(res);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = res?.news?.articles?.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="text-center font-IstokWeb-Bold text-[5rem] text-white ">
        News
      </h1>
      <div className="flex flex-wrap p-2 justify-center">
        {currentArticles?.map((item: Article, index: number) => {
          return (
            <CardContainer className="inter-var m-2" key={index}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={0}
                  rotateZ={0}
                  className="w-full mt-4"
                >
                  <img
                    src={item.urlToImage || "https://picsum.photos/200/300"}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <button onClick={() => window.open(item.url, "_blank")}>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Read
                    </CardItem>
                  </button>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
      <div className="flex justify-center mt-4">
        {res?.news?.articles && (
          <ul className="flex list-none">
            {Array.from(
              { length: Math.ceil(res.news.articles.length / articlesPerPage) },
              (_, i) => (
                <li key={i} className="mx-1">
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 rounded-xl ${
                      currentPage === i + 1
                        ? "bg-black dark:bg-white dark:text-black text-white"
                        : "bg-gray-300 dark:bg-black dark:text-white text-black"
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default News;
