import styled from 'styled-components';

const cartDropdownWidth = '19rem';
const cartDropdownHeight = '20rem';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: ${cartDropdownWidth};
  height: ${cartDropdownHeight};
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 25vh;
  right: 40px;
  z-index: 5;
`;

export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 18px;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
