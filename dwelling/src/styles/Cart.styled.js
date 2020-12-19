import styled from "styled-components"
import {Button} from "react-bootstrap";

// export const CartWrapperToDownButtonsStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;
// `;

export const CartTitleStyle = styled.h3`
  margin: 20px;
  text-align: center;
  font-weight: 700;
`;

export const CartItemsBlockStyle = styled.div`
  padding: 10px 0 ;
  //display: flex;
  @media (max-width: 768px) {
    padding: 0;
    margin: 20px 0 0 0;
  }
`;

export const CartItemsUlStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  //flex-wrap: wrap;
  //justify-content: space-around;
  padding: 0;
  margin: 0;
  @media (max-width: 992px) {
    //justify-content: space-between;
  }
  @media (max-width: 768px) {
    //display: block;
  }
`;

export const CartTotalPriceStyle = styled.h5`
  margin: 10px 0 0 0;
  text-align: end;
  font-weight: 500;
  @media (max-width: 768px) {
    margin: 10px 0 0 0;
  }
`;

export const CartButtonsBlockStyle = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 370px) {
    flex-direction: column;
    margin: 10px 0 0 0;
  }
`;

export const CartItemEmptyStyle = styled.div`
  margin: 20px auto;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
`;

export const CartIsEmptyBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartIsEmptyButtonStyle = styled(Button)`
  font-size: 14px;
  text-align: center;
  width: 130px;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 110px;
  }
`;

export const CartButtonStyle = styled(Button)`
  margin: 0 0 0 10px;
  font-size: 14px;
  text-align: center;
  width: 130px;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 110px;
  }
  @media (max-width: 370px) {
    margin: 0 0 10px 0;
  }
`;