import React from "react";
// import { Provider } from 'react-redux'

// import store from './src/store'
// import { ModalLoadingProvider } from '@hooks/ModalLoading'
// import GlobalStyleComponent from "./src/styles/global.css";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
  <>
    {/* // <Provider store={store}>
    // <ModalLoadingProvider> */}
    {/* <GlobalStyleComponent /> */}
    {element}
    {/* // </ModalLoadingProvider>
  // </Provider> */}
  </>
);

export const wrapPageElement = ({ element }) => (
  <>
    {/* // <Provider store={store}> */}
    {/* // <ModalLoadingProvider> */}
    {/* <GlobalStyleComponent /> */}
    {element}
    {/* // </ModalLoadingProvider> */}
    {/* // </Provider> */}
  </>
);
