import React from "react";
import MyCarousel from "../Carousel/Carousel";
import Box from "../Box/Box";
import Card from "../Cards/Card";

function Dasboard() {
  return (
    <div>
      <Box></Box>
      <h1 className="font-bold mt-10 text-2xl ml-14">By Adidas</h1>
      <MyCarousel></MyCarousel>
      <Card></Card>
      <br></br>
    </div>
  );
}

export default Dasboard;
