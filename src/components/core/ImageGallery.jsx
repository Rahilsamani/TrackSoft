const ImageGallery = ({ images = [] }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {images.length === 0 ? (
        <div className="text-center text-2xl">
          No screenshots have been taken yet
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <div key={index} className="p-2">
              <img
                src={img}
                alt={`Screenshot ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
