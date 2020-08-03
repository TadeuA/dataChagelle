import React from "react";

import { Items, Item, Button } from "./main";

const SideBar = ({ open, setOpen }) => {
	function autoHide() {
		setOpen(false);
	}

	return (
		<Items open={open}>
			<li>
				<Item href="#home" onClick={autoHide}>
					Home
				</Item>
			</li>
			<li>
				<Item href="#ods" onClick={autoHide}>
					Por que o crédito é importante?
				</Item>
			</li>
			<li>
				<Item href="#sobre" onClick={autoHide}>
					Sobre
				</Item>
			</li>
			<li>
				<Item href="#vantagens" onClick={autoHide}>
					Vantagens
				</Item>
			</li>
			<li>
				<Button href="#analise" onClick={autoHide}>
					Faça seu empréstimo
				</Button>
			</li>
		</Items>
	);
};

export default SideBar;
