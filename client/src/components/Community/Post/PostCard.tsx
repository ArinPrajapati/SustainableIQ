import React from "react";
import PostReaction from "./PostReaction";
import { Link } from "react-router-dom";
import { useAddViewMutation } from "@/store/api/postApi";
import { Card } from "@/components/ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Props {
  title: string | undefined;
  imgLink: string | undefined;
  subtitle: string | undefined;
  postId: string | undefined;
  likes: number | undefined;
  views: number | undefined;
  authorName: string | undefined;
}

const PostCard = ({
  title,
  subtitle,
  imgLink,
  postId,
  likes,
  views,
  authorName,
}: Props) => {
  const [addView] = useAddViewMutation();

  return (
    <CardContainer className="inter-var m-2">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gray-900  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem className="text-xl font-bold  text-white">{title}</CardItem>
        <CardItem as="p" className=" text-sm max-w-sm mt-2 text-neutral-300">
          Author : {authorName}
        </CardItem>
        <CardItem className="w-full mt-4">
          <img
            src={imgLink || "https://picsum.photos/200/300"}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem className="text-xl font-bold text-neutral-600 mt-4">
          {subtitle}
        </CardItem>

        <div className="flex justify-between items-center mt-4">
          <Link to={`/community/${postId}`} onClick={() => addView(postId)}>
            <CardItem
              as="button"
              className="px-4 py-2 rounded-xl  bg-white text-black text-xs font-bold"
            >
              Read
            </CardItem>
          </Link>
          <div className="text-white">
            <PostReaction likes={likes} views={views} />
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default PostCard;
// {
//   <div className="relative flex w-80 flex-row rounded-xl bg-gray-800 bg-clip-border text-gray-100 shadow-md">
//     <div className="relative mx-4 -mt-6 h-44 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border bg-cover bg-no-repeat bg-black shadow-lg shadow-white-gray-500 bg-gradient-to-r from-blue-500 to-blue-600  ">
//       <img
//         src={imgLink}
//         alt=""
//         className="w-full object-cover object-center
//           "
//       />
//     </div>
//     <div className="p-6">
//       <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//         Title: {title}
//       </h5>
//       <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//         {subtitle}
//       </p>
//     </div>
//     <PostReaction views={views} likes={likes} />
//     <div className="p-6 pt-0">
//       <Link to={`/community/${postId}`} onClick={() => addView(postId)}>
//         <button
//           data-ripple-light="true"
//           type="button"
//           className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         >
//           Read More
//         </button>
//       </Link>
//     </div>
//   </div>;
// }
