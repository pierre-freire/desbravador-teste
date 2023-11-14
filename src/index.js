import reportWebVitals from "./reportWebVitals";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

// home, show person, show repositorie
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>
				<h1>Hello World</h1>
				<Link to="about">About Us</Link>
			</div>
		),
	},
	{
		path: "about",
		element: <div>About</div>,
	},
]);

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
