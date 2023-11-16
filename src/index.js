import reportWebVitals from "./reportWebVitals";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./index.css";

import Home from "./pages/home";
import ShowPerson from "./pages/showPerson";
import ShowRepo from "./pages/showRepositorie";

// home, show person, show repositorie
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "about",
		element: (
			<div>
				About<Link to="about">About Us</Link>
			</div>
		),
	},
	{
		path: "show_person/:name",
		element: <ShowPerson />,
	},
	{
		path: "show_repo/:user/:repo",
		element: <ShowRepo />,
	},
]);

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
