import React from "react";
import { useUploadImageMutation } from "../store/api/imageApi";

interface Props {
  setImageLink: React.Dispatch<React.SetStateAction<string | undefined>>;
  clickEvent?: () => void;
}

const ImageUpload = ({ setImageLink }: Props) => {
  const [image, setImage] = React.useState<File>();
  const [uploadImage, { isLoading, data }] = useUploadImageMutation();

  const upload = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    await uploadImage(image);
    setImageLink(data?.url);
  };
  return (
    <div>
      <form className="flex flex-col  bg-slate-50">
        <input type="file" onChange={(e) => setImage(e.target.files?.[0])} />
        <button
          onClick={upload}
          className="px-8 py-3 text-white border-blue-300 bg-slate-600 w-[9rem] mt-4"
        >
          Upload
        </button>
      </form>
      <p className="text-red-500 bg-slate-400">
        {isLoading ? "Loading..." : data?.url}
      </p>
    </div>
  );
};

export default ImageUpload;
