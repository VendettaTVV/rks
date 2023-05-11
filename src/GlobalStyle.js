import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;

export const Section = styled.section`
	padding: ${({ padding }) => (padding ? padding : "80px 0")};
	margin: ${({ margin }) => (margin ? margin : "")};
	background: ${({ inverse }) => (inverse ? "white" : "#071c2f")};
	position: ${({ position }) => (position ? position : "")};
	width: ${({ width }) => (width ? width : "auto")};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
	height: ${({ height }) => (height ? height : "auto")};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
	}
`;

