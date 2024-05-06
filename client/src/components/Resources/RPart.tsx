import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";

const RPart = ({
  url,
  name,
  img,
  subtitle,
}: {
  url: string;
  name: string;
  img: string;
  subtitle: string;
}) => {
  return (
    <CardContainer className="inter-var m-2">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gray-900  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem className="text-xl font-bold  text-white">{name}</CardItem>

        <CardItem className="w-full mt-4">
          <img
            src={img || "https://picsum.photos/200/300"}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-white"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem className="text-xl font-bold text-neutral-200 mt-4">
          {subtitle}
        </CardItem>

        <div className="flex justify-between items-center mt-4">
          <a href={url} target="_blank">
            <CardItem
              as="button"
              className="px-4 py-2 rounded-xl  bg-white text-black text-xs font-bold"
            >
              Read
            </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default RPart;
