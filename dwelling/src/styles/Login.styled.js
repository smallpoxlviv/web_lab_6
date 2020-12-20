import styled from "styled-components";
import {Button} from "react-bootstrap";


export const LoginTitleStyle = styled.h3`
  text-align: center;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const LoginFormStyle = styled.div`
  width: 320px;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginInputBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
`;

export const LoginLabelStyle = styled.label`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

export const LoginButtonStyle = styled(Button)`
  font-size: 14px;
  text-align: center;
  width: 100%;
`;

