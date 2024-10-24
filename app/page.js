'use client'

import { Carousel } from "@material-tailwind/react";

export default function Home() {
  return (
    <div>
      <Carousel
        className="h-screen"
        autoplay={true}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://kokphochaihospital.wordpress.com/wp-content/uploads/2021/06/s__6914109.jpg?w=1568"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://kokphochaihospital.wordpress.com/wp-content/uploads/2020/04/img_2487.jpeg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://kokphochaihospital.wordpress.com/wp-content/uploads/2020/04/img_3020.jpeg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
