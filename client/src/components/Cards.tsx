import React from "react";
import { Link } from "react-router-dom";

interface Props {
  issue: string;
  des: string;
  onClick?: () => void;
  extraClasses?: string;
  imgLink: string;
  buttonText?: string;
  pageLink?: string;
}

const Cards = (prop: Props) => {
  return (
    <div className="max-w-xs rounded-md  bg-gray-900 text-gray-100 hover:scale-105 transition-transform">
      <img
        src={prop.imgLink}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracki">{prop.issue}</h2>
          <p className="text-gray-100">{prop.des}</p>
        </div>
        <Link to={prop.pageLink || "/"}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracki active:scale-95 rounded-md bg-violet-400 text-gray-900"
          >
            {prop.buttonText ? prop.buttonText : "Read More"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
