import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

const app = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

app.render(<RouterProvider router={router} />);
