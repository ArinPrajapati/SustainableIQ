import React, { useEffect } from "react";
import { useUploadImageMutation } from "../store/api/imageApi";

interface Props {
  setImageLink: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ImageUpload: React.FC<Props> = ({ setImageLink }) => {
  const [image, setImage] = React.useState<File | undefined>();
  const [uploadImage, { isLoading, data, isError }] = useUploadImageMutation();

  useEffect(() => {
    const upload = async () => {
      if (!image) return;
      const formData = new FormData();
      formData.append("file", image);
      try {
        const responseData = await uploadImage(image);
        console.log("Image uploaded successfully:", responseData);
        setImageLink(responseData?.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    upload();
  }, [image, setImageLink, uploadImage]);

  return (
    <div>
      <form className="flex flex-col bg-slate-50">
        <input type="file" onChange={(e) => setImage(e.target.files?.[0])} />
      </form>
      <p className="text-red-500 bg-slate-400">
        {isLoading ? "Loading..." : data?.url}
      </p>
    </div>
  );
};

export default ImageUpload;
