import React, { useState } from 'react';

const ProductCarousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };
    return (
        <>
            <div className="relative">
                <div className="flex items-center justify-center">
                    <img
                        src={items[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full max-h-96 object-cover rounded"
                    />
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer">
                    <button
                        onClick={prevSlide}
                        className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer">
                    <button
                        onClick={nextSlide}
                        className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCarousel;