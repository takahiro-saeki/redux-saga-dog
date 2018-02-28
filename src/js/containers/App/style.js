import styled from 'styled-components';

export const ImageWrap = styled.div`
  box-sizing: border-box;
  width: 33.33333%;
  padding: .5rem;
  text-align: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ResponsiveImg = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 120px;
  align-items: center;
  justify-content: center;
`;
