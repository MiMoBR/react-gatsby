import styled from "styled-components";
import { Link } from "gatsby";

export const LinTest = styled(Link)`
  color: red;
  cursor: pointer;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  scroll-snap-type: x mandatory;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const CarouselContent = styled.div`
  width: calc(100% * 0.4);
  scroll-snap-align: start;

  display: flex;
  transition: all 250ms linear;
  scrollbar-width: none;

  * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  ::-webkit-scrollbar,
  ::-webkit-scrollbar {
    display: none;
  }
`;
