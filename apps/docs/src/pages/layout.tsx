import * as script from "client:script";
import * as style from "client:style";
import { type JSX, Render } from "ovr";

export const Layout = (props: { children: JSX.Element; head: JSX.Element }) => (
	<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			{Render.html(script.tags + style.tags)}
			{props.head}
		</head>
		<body>{props.children}</body>
	</html>
);
