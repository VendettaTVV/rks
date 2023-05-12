import React from 'react';
import { Container, Section } from '../../../GlobalStyle';
import {
	ServiceText,
	ServiceTitle,
	ServiceWrapper,
	ServiceColumn,
	ServiceImageWrapper,
	ServiceName,
	ServiceTextWrapper,
} from './ServicesStyle';
import { serviceData } from './ServiceData';

const RuServiceComponent = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="services">
			<Container>
				<ServiceTextWrapper>
					<ServiceTitle>Наши сервисы</ServiceTitle>
				</ServiceTextWrapper>
				<ServiceWrapper>
					{serviceData.map((el, index) => (
						<ServiceColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<ServiceImageWrapper className={el.imgClass}>
								{el.icon}
							</ServiceImageWrapper>
							<ServiceName>{el.name}</ServiceName>
							<ServiceText>{el.description}</ServiceText>
						</ServiceColumn>
					))}
				</ServiceWrapper>
			</Container>
		</Section>
	);
};

export default RuServiceComponent;
