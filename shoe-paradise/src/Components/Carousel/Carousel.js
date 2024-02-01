import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyCarousel = () => {
  return (
    <Carousel className="mt-16 ml-20 mr-10" responsive={responsive}>
      <div className="w-[370px] ">
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct14main.avif%3Falt%3Dmedia%26token%3Dc84d6ac3-2cf9-4659-bd50-e9ff47827704&w=640&q=75"
        ></img>
        <div>
          <h1 className="font-bold mt-3">CLOUDFOAM PURE SHOES</h1>
          <p>Rs : 860</p>
        </div>
      </div>

      <div className="w-[370px] ">
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct3Main.avif%3Falt%3Dmedia%26token%3Dcfb8a965-e230-4bf1-8756-265ed419502f&w=640&q=75"
        ></img>
        <div>
          <h1 className="font-bold mt-3">
            HOOPS 3.0 LOW CLASSIC VINTAGE SHOES
          </h1>
          <p>Rs : 795</p>
        </div>
      </div>
      <div className="w-[370px] ">
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=640&q=75"
        ></img>
        <div>
          <h1 className="font-bold mt-3">DAILY 3.0 SHOES</h1>
          <p>Rs : 550</p>
        </div>
      </div>
      <div className="w-[370px] ">
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct5main.avif%3Falt%3Dmedia%26token%3D76c8eb87-50d3-4493-9573-731d5fce55a2&w=640&q=75"
        ></img>
        <div>
          <h1 className="font-bold mt-3">KAPTIR 3.0 SHOES</h1>
          <p>Rs : 95</p>
        </div>
      </div>
      <div className="w-[370px] ">
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct4main.avif%3Falt%3Dmedia%26token%3De7267dcd-3119-4d5b-b872-4cf9e4eefd68&w=640&q=75"
        ></img>
        <div>
          <h1 className="font-bold mt-3">Y-3 GAZELLE</h1>
          <p>Rs : 875</p>
        </div>
      </div>
      <div className="w-[370px] ">
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75"
        ></img>
        <div>
          <h1 className="font-bold mt-3">RACER TR23 SHOES</h1>
          <p>Rs : 70</p>
        </div>
      </div>

      <div className="w-[370px] ">
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct7main.avif%3Falt%3Dmedia%26token%3D75513f13-1d32-450f-8333-fb3b66100061&w=640&q=75"
        ></img>
        <div>
          <h1 className="font-bold mt-3">KANTANA SHOES</h1>
          <p>Rs : 255</p>
        </div>
      </div>
      <div className="w-[370px] ">
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=640&q=75"
        ></img>
        <div>
          <h1 className="font-bold mt-3">ADILETTE SANDALS</h1>
          <p>Rs : 775</p>
        </div>
      </div>
      <div className="w-[370px] ">
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct8main.avif%3Falt%3Dmedia%26token%3Dc78d67b3-02ed-4e49-924a-083889aab78b&w=640&q=75"
        ></img>
        <div>
          <h1 className="font-bold mt-3">RUNFALCON 2.0 SHOES</h1>
          <p>Rs : 705</p>
        </div>
      </div>
      <div className="w-[370px] ">
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct9main.png%3Falt%3Dmedia%26token%3Dcfb49f49-4ebb-4cdf-99ce-d02b9ab09655&w=640&q=75"
        ></img>
        <div>
          <h1 className="font-bold mt-3">ULTRABOOST 1.0 SHOES</h1>
          <p>Rs : 175</p>
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
