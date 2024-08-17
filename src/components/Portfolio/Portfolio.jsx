import React, { useEffect, useState } from "react";
import Star from "../Star/Star";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  let products = [port1, port2, port3, port1, port2, port3];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="portfolio">
        <div className="container pt-10">
          <div className="title text-center">
            <h2 className="font-bold text-4xl">PORTFOLIO COMPONENT</h2>
            <Star color="text-primary" bg="bg-primary" />
          </div>
          <div className="boxes grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="box p-6">
                <div
                  className="img relative rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  <img src={product} className="w-full" alt={`Portfolio ${index}`} />
                  <div className="overlay bg-green absolute inset-0 bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 ease-in-out flex items-center justify-center">
                    <i className="fas fa-plus text-8xl text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="w-full h-auto" />
            <button
              className="absolute top-3 right-3 text-white"
              onClick={closeModal}
            >
             <i className="fas fa-close text-4xl"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
