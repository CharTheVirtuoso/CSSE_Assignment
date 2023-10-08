import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { registerLicense } from '@syncfusion/ej2-base';

import "./index.css";
registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cVGhAYVJ/WmFZfV1gdVVMY1pbQXVPMyBoS35RdUVrW39fcHFSQmhfVkd1');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
  </ContextProvider>
);