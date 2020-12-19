import styled from "styled-components";
import {Button} from "react-bootstrap";

export const CartItemLiStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  border: 2px solid #A9A9A9;
  border-radius: 5px;
  list-style-type: none;
  margin: 0 auto 25px auto;
`;

export const CartItemImgTitleWrapStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
  height: 100%;
`;

export const CartItemTitleStyle = styled.h5`
  font-weight: 500;
  margin: 0 0 0 30px;
  width: 500px;
`;

export const CartItemCounterStyle = styled.div`
  display: flex;
`;

export const CartItemPriceDeleteBlockStyle = styled.div`
  display: flex;
  margin: 0 20px 0 0;
  width: 200px;
`;

export const CartItemButtonStyle = styled(Button)`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
`;

export const CartItemCountNumStyle = styled.span`
  margin: 0 10px;
`;

export const CartItemPriceStyle = styled.span`
  margin: 0 20px 0 auto;
`;