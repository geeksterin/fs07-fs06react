import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import banner1 from '../../images/banner1.PNG'
import banner2 from '../../images/banner2.PNG'
import banner3 from '../../images/banner3.PNG'
import banner4 from '../../images/banner4.PNG'
function Item(props) {
  return (
    <Paper>
      <img style={{width:"100%", maxHeight:"30vh"}} src={props.item.imgSrc} alt="" />
    </Paper>
  );
}
const CarouselComp = () => {
  var items = [
    {
      imgSrc: banner1
    },
    {
      imgSrc: banner2
    },
    {
      imgSrc: banner3
    },
    {
      imgSrc: banner4
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselComp;
