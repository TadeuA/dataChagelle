import React from "react";
import styled from "styled-components";

import { Section, Title, SubTitle, Col } from "../../components/main";

const Image = styled.div`
	width: 100%;
	height: 80vh;
	background: url("/images/Vantagens.png") no-repeat center center;
	background-size: contain;
	opacity: 1;
	animation: fadeInOpacity 300ms ease-in;
`;

const Bg = styled(Section)`
	background: url("/images/Bg 4.png") no-repeat;

	@media (max-width: 980px) {
		background: unset;
		background-color: #9a0201;
	}
`;

const SectionFour = () => {
	return (
		<Bg id="vantagens" primary="true">
			<Col>
				<Image />
			</Col>
			<Col>
				<Title>Vantagens</Title>
				<SubTitle>
					Apesar do mercado de crédito bancário ser consolidado, não há um
					segmento específico para o nosso potencial cliente. Nosso diferencial
					encontra-se em compartilhamento e transferência de risco de crédito,
					de forma que o banco vai obter garantia para o fornecimento. O mais
					próximo desse modelo é o microcrédito disponível para MEI, de forma
					que a garantia fica centralizada em um único responsável. .
				</SubTitle>
			</Col>
		</Bg>
	);
};

export default SectionFour;
