import React from "react";
import styled from "styled-components";

import { Section, Col, Title, SubTitle, Button } from "../../components/main";

const Image = styled.div`
	width: 100%;
	height: 60vh;
	background: url("/images/Main.png") no-repeat center center;
	background-size: contain;
	opacity: 1;
	animation: fadeInOpacity 300ms ease-in;
`;

const SectionOne = () => {
	return (
		<Section id="home" primary="true">
			<Col>
				<Title>Nosso Crédito</Title>
				<SubTitle>
					Apesar do mercado de crédito bancário ser consolidado, não há um
					segmento específico para o nosso potencial cliente. Nosso diferencial
					encontra-se em compartilhamento e transferência de risco de crédito,
					de forma que o banco vai obter garantia para o fornecimento. O mais
					próximo desse modelo é o microcrédito disponível para MEI, de forma
					que a garantia fica centralizada em um único responsável.
				</SubTitle>
				<Button to="analise">
					Faça seu <strong>empréstimo</strong>
				</Button>
			</Col>
			<Col>
				<Image />
			</Col>
		</Section>
	);
};

export default SectionOne;
