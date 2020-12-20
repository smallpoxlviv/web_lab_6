import styled from "styled-components";
import {Button} from "react-bootstrap";


export const RegisterTitleStyle = styled.h3`
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const RegisterFormStyle = styled.div`
  width: 320px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterInputBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
`;

export const RegisterLabelStyle = styled.label`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

export const RegisterButtonStyle = styled(Button)`
  font-size: 14px;
  text-align: center;
  width: 100%;
`;

