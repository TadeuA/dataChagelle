import React from "react";

import { Section, Title, SubTitle, Col } from "../../components/main";
import ImgCarousel from "../../components/Carousel";

const SectionTwo = () => {
	return (
		<Section id="ods" primary="true" secondary="true">
			<Col>
				<Title primary="true">Importância do crédito</Title>
				<SubTitle primary="true">
					Mais de 40% da população brasileira está na economia informal. Com a
					pandemia estão sendo muito impactados. Manter seu pequeno negócio ou
					buscar novas fontes de renda está sendo bem difícil para eles. Para
					iniciar um novo negócio ou até mesmo manter o que tem, precisam de
					acesso a crédito. Mas como emprestar para quem não tem negócio
					formalizado
				</SubTitle>
			</Col>
			<Col>
				<ImgCarousel />
			</Col>
		</Section>
	);
};

export default SectionTwo;
