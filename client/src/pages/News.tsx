import React, { useEffect } from "react";
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

  console.log(res);
  return (
    <div>
      <h1 className="text-center font-IstokWeb-Bold text-[5rem] text-white ">
        News
      </h1>
      <div className="flex flex-wrap p-2 justify-center">
        {res?.articles?.map((item: Article, index: number) => {
          return (
            <CardContainer className="inter-var m-2">
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
    </div>
  );
};

export default News;
