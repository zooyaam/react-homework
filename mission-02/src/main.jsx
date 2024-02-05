import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = createRoot(document.querySelector("#root"));
rootElement.render(<App />);
