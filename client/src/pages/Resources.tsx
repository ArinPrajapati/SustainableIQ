import RPart from "@/components/Resources/RPart";
import React from "react";
import data from "../data/Resources.json";
const Resources = () => {
  return (
    <>
      <h1 className="text-center font-IstokWeb-Bold text-[5rem] bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-indigo-400 to-orange-200">
        Resources
      </h1>
      <div className="w-full flex flex-row justify-center items-center flex-wrap gap-3">
        {data &&
          data.map((item, index) => {
            return (
              <RPart
                key={index}
                name={item.name}
                url={item.url}
                subtitle={item.description}
                img={item.img_link}
              />
            );
          })}
      </div>
    </>
  );
};

export default Resources;
