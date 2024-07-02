import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "../components/core/ImageGallery";

const Screenshot = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchScreenshots = async () => {
      try {
        const response = await axios.get("http://localhost:8000/screenshots");
        console.log(response.data.photo_urls);
        setImages(response.data.photo_urls);
      } catch (error) {
        console.error("Error fetching screenshots:", error);
      }
    };

    fetchScreenshots();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-6xl mb-10 font-semibold text-blue text-shadow-custom leading-[1.8]">
        Screenshots
      </h2>
      <div>
        <ImageGallery source={images} />
      </div>
    </div>
  );
};

export default Screenshot;
