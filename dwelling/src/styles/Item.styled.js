import styled from "styled-components";

export const ItemMainBlockStyle = styled.div`
  padding: 20px 0;
  margin: 0 0 auto 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ItemImgStyle = styled.img`
  width: 40%;
  display: inline-block;
  vertical-align: top;
  @media (max-width: 768px) {
    width: 80%;
    display: block;
    margin: 20px auto;
  }
`;

export const ItemMainTextBlockStyle = styled.div`
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

export const ItemMainTextTitleStyle = styled.h4`
  margin-bottom: 5px;
  padding-left: 20px;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 992px) {
    font-size: 16px;
  }
`;

export const ItemMainTextParagraphStyle = styled.p`
  margin-bottom: 5px;
  padding-left: 20px;
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

export const ItemTextParagraphStyle = styled.p`
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
  @media (max-width: 426px) {
  }
`;
