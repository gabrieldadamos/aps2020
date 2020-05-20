import React, { useState } from "react";
import dtPromocoes from "../data/dtPromocoes.json";
import Slider from "infinite-react-carousel";

function Banner() {

  const [ promocoes, setPromocoes ] = useState(dtPromocoes.data);

  return (
    <Slider dots>
      {promocoes.map(p => {
        return (
          <div>
            <img src={"img/" + p.pathImage} />
          </div>
        );
      })}
    </Slider>
  );
}

export default Banner;
