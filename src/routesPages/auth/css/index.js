import React from "react";
import {
  LinTest,
  CarouselContainer,
  CarouselWrapper,
  CarouselContentWrapper,
  CarouselContent,
} from "./style";
import Eg1 from "../../../assets/images/jpg/eg-1.jpg";

const CssEg = () => {
  const imagePath = require.context("../../../assets/images", true);
  return (
    <div>
      <p>CSS</p>
      <LinTest to="/">Home</LinTest>
      <LinTest to="/form/">Form</LinTest>
      <LinTest to="/css/">CSS</LinTest>
      <div>
        <div>
          <p>
            Nike and Apple make such smooth and touch friendly carousels with
            pure CSS
          </p>
        </div>
        <CarouselContainer>
          <CarouselWrapper>
            <CarouselContentWrapper>
              <CarouselContent>
                <img
                  src={imagePath("./jpg/eg-3.jpg").default}
                  alt=""
                  title=""
                  className="img-fluid"
                />
              </CarouselContent>
              <CarouselContent>
                <img src={Eg1} alt="" title="" className="img-fluid" />
              </CarouselContent>
              <CarouselContent>
                <img
                  src={imagePath("./jpg/eg-2.jpg").default}
                  alt=""
                  title=""
                  className="img-fluid"
                />
              </CarouselContent>
            </CarouselContentWrapper>
          </CarouselWrapper>
        </CarouselContainer>
      </div>
    </div>
  );
};

export default CssEg;
