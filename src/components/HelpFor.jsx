import Marquee from "react-fast-marquee";

const HelpFor = () => {
  const images = [
    {
      title: "Help Fund a New App for Mental Health",
      src: "https://i.ibb.co/QDjF0b4/image1.webp",
    },
    {
      title: "Medical Expenses for Surgery",
      src: "https://i.ibb.co/ZcyC8qR/image2.webp",
    },
    {
      title: "Launch a Sustainable Clothing Brand",
      src: "https://i.ibb.co/BGvTFwy/image3.jpg",
    },
    {
      title: "Build a Community Library",
      src: "https://i.ibb.co/x5fHYG3/image-4.webp",
    },
    {
      title: "Documentary on Climate Change",
      src: "https://i.ibb.co/QpgzFfg/image5.jpg",
    },
    {
      title: "Startup: Smart Home Device",
      src: "https://i.ibb.co/BqwdyHw/image6.webp",
    },
    {
      title: "Clean Water for Villages",
      src: "https://i.ibb.co/cJgsWvK/image7.webp",
    },
    {
      title: "Support Local Artisans",
      src: "https://i.ibb.co/12P0vyw/image8.webp",
    },
    {
      title: "Emergency Relief Fund for Flood Victims",
      src: "https://i.ibb.co/ccB4fPc/image9.webp",
    },
    {
      title: "Support a Local Theater Group",
      src: "https://i.ibb.co/WDF1vVY/image10.jpg",
    },
  ];

  return (
    <div className="my-6 p-4">
      <h3 className="text-3xl font-bold text-primary text-center mb-12">
        Give & Grow Help For
      </h3>
      <div>
        <Marquee 
        pauseOnHover={true}>
          {images.map((item, index) => (
            <div key={index} className="relative w-60 h-60 rounded-xl mx-8 cursor-pointer">
              <img
                className="w-full h-full rounded-xl"
                src={item.src}
                alt={`Image ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <p className="text-white text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HelpFor;
