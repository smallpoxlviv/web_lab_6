import styled from "styled-components";
import {Button} from "react-bootstrap";

export const LowBarStyle = styled.div`
  padding: 0 0 20px 0;
  margin: auto 0 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px 0 20px 25px;
  }
`;

export const LowBarTextStyle = styled.span`
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 426px) {
    font-size: 14px;
  }
`;

export const LowBarButtonsStyle = styled.div`
  display: flex;
  @media (max-width: 370px) {
    flex-direction: column;
  }
`;

export const LowBarButtonStyle = styled(Button)`
  margin: 0 0 0 10px;
  font-size: 14px;
  text-align: center;
  width: 100px;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 90px;
  }
  @media (max-width: 370px) {
    margin: 0 0 10px 0;
  }

`;