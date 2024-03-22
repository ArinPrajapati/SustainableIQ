import PostCard from "./Post/PostCard";
import { useGetAllPostsQuery } from "../../store/api/postApi";

interface PostData {
  _id: string;
  title: string;
  subtitle: string;
  imgLink?: string; // Optional property for image link
  createdAt?: string; // Assuming createdAt is a string in ISO format
  updatedAt?: string; // Assuming updatedAt is a string in ISO format
  viewCont?: number;
  likeCont?: number;
  content?: string;
  authorId?: string; // Assuming authorId is a string
}

const PostHolder = () => {
  // const [postData, setPostData] = useState<PostData[]>(data.data);
  const { data: postData, isLoading, isError } = useGetAllPostsQuery("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <>
      <h1 className="text-center w-full text-[4rem] flex-wrap my-4 font-[1000] text-white">
        All Posts
      </h1>
      <div className="w-full flex gap-10 p-10 my-4 flex-wrap justify-center items-center">
        {(postData !== undefined || null) &&
          postData?.post?.map((item: PostData) => (
            <PostCard
              key={item._id}
              title={item.title}
              subtitle={item.subtitle}
              imgLink={item.imgLink}
              postId={item._id}
              likes={item.likeCont}
              views={item.viewCont}
            />
          ))}
      </div>
    </>
  );
};

export default PostHolder;
