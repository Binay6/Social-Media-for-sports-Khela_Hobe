import React, { useContext, useState } from "react";

import { uploadExploreFeed } from "../../utils/api/api";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";



const UploadExplore = ({loadingPost, setLoadingPost}) => {
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  

  const handlePostUpload = async () => {
    setLoading(true);
    setLoadingPost(true);
    try {
      const res = await uploadExploreFeed(user._id, desc);
      toast.success("Post has been Uploaded Successfully!");
      setDesc("");
      setLoading(false);

    } catch (error) {
      console.log(error);
      toast.error("Post Upload failed");
    } finally {
      setLoading(false);
      setLoadingPost(false);
    }
  };

  

  return (
    <div className="w-full h-[170px] rounded-lg shadow-lg ">
      <div className="wrapper p-[10px]">
        <div className="top flex items-center">
          <img
            src={user.profilePicture}
            alt="profilepic"
            className="w-[50px] h-[50px] rounded-full mr-[10px] object-cover"
          />
          <input
            type="text"
            placeholder="What is on your mind?"
            className="w-[80%] focus:outline-none"
            value={desc}
            required
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          
        </div>
        <hr className="m-[20px]" />
        <div className="bottom flex items-center justify-between">
          
          <button
            disabled={loading}
            onClick={handlePostUpload}
            className="bg-green-600 text-white p-[7px] rounded-lg font-bold"
          >
            {loading ? "Uploading" : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadExplore;
