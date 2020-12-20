import styled from "styled-components"
import {Button} from "react-bootstrap";

export const SuccessStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

export const SuccessImgStyle = styled.img`
  height: 160px;
`;

export const SuccessTitleStyle = styled.h3`
  font-weight: 700;
  margin: 10px 0 16px 0;
`;

export const SuccessParagraphStyle = styled.p`
  margin: 2px 0 0 0;
  font-size: 18px;
`;

export const SuccessButtonStyle = styled(Button)`
  margin-top: 60px;
  width: 260px;
`;