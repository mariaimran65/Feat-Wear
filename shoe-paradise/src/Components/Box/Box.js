import React from "react";

function Box() {
  return (
    <div>
      <div>
        <img
          alt=""
          src="https://shoe-paradies.vercel.app/_next/image?url=%2FBanner.webp&w=1920&q=75"
        ></img>
        <div className="flex justify-evenly mt-10">
          <img
            className="w-[322px]"
            src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe.avif&w=1920&q=75"
            alt=""
          ></img>
          <img
            className="w-[322px]"
            src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe2.avif&w=1920&q=75"
            alt=""
          ></img>
          <img
            className="w-[322px]"
            src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe3.avif&w=1920&q=75"
            alt=""
          ></img>
          <img
            className="w-[322px]"
            src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe.avif&w=1920&q=75"
            alt=""
          ></img>
        </div>
        <div className="flex justify-evenly text-xl font-bold">
          <p>Adidas</p>
          <p>Nike</p>
          <p>Ndure</p>
          <p>Service</p>
        </div>
      </div>
    </div>
  );
}

export default Box;
