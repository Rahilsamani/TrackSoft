import { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "../components/core/ImageGallery";
import { useSelector } from "react-redux";

const Screenshot = () => {
  const [images, setImages] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchScreenshots = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/getScreenshots",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setImages(response.data.screenshots);
      } catch (error) {
        console.error("Error fetching screenshots:", error);
      }
    };

    fetchScreenshots();
  }, [token]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-6xl mb-10 font-semibold text-blue text-shadow-custom leading-[1.8]">
        Screenshots
      </h2>
      <div>
        <ImageGallery images={images} />
      </div>
    </div>
  );
};

export default Screenshot;
