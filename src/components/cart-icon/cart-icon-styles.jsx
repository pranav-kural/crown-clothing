import styled from 'styled-components';
import { ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CartIconSVG = styled(CartIcon)`
  width: 24px;
  height: 24px;
`;
export const CartItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
