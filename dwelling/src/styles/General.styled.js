import styled from "styled-components";
import {Button} from "react-bootstrap";

export const ContainerStyle = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
  max-width: 1110px;
  @media (max-width: 1200px) {
    max-width: 960px;
  }
  @media (max-width: 992px) {
    max-width: 700px;
  }
  @media (max-width: 768px) {
    max-width: 560px;
  }
  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 320px) {
    max-width: 310px;
  }
`;

export const MarginTopFromHeaderStyle = styled.div`
  padding-top: 56px;
  flex: 1 0 auto;
`;

export const WrapperToDownFooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const HeaderFilterButtonStyle = styled(Button)`
    width: 74px;
    margin-right: 10px;
`;



