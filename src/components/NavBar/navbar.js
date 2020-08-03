import React from "react";

import { Nav, Logo } from "./main";
import Burger from "./burger";

const NavBar = () => {
	return (
		<Nav>
			<a href="/" style={{ textDecoration: "none" }}>
				<h1 style={{ color: "#FFF" }}>Nosso Crédito</h1>
			</a>
			<Burger />
		</Nav>
	);
};

export default NavBar;
