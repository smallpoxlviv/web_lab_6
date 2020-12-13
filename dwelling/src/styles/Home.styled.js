import styled from "styled-components";
import {Button} from "react-bootstrap";

export const HomeMainBlockStyle = styled.div`
  padding: 20px 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const HomeMainImgStyle = styled.img`
  width: 40%;
  display: inline-block;
  vertical-align: top;
  @media (max-width: 768px) {
    width: 80%;
    display: block;
    margin: 20px auto;
  }
`;

export const HomeMainTextBlockStyle = styled.div`
  width: 60%;
  padding: 5px 0 5px 30px;
  display: inline-block;
  @media (max-width: 768px) {
    display: block;
    width: 90%;
    padding: 0;
    margin: 20px auto 0 auto;
  }
`;

export const HomeMainTextTitleStyle = styled.h4`
  text-align: center;
  margin-bottom: 5px;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 992px) {
    font-size: 16px;
  }
`;

export const HomeMainTextParagraphStyle = styled.p`
  text-indent: 2%;
  margin-bottom: 5px;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 992px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const HomeItemsBlockStyle = styled.div`
  padding: 60px 0 10px 0;
  display: flex;
  @media (max-width: 768px) {
    padding: 0 0 10px 0;
    margin: 20px 0 0 0;
  }
`;

export const HomeItemsUlStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  @media (max-width: 992px) {
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const HomeButtonBlockStyle = styled.div`
  margin: 30px 0 40px 0;
  @media (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;

export const HomeButtonStyle = styled(Button)`
  margin: 0 auto 0 auto;
  display: block;
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;