import styled from "styled-components";
import {Button} from "react-bootstrap";

export const ItemLiStyle = styled.li`
  border: 2px solid #A9A9A9;
  border-radius: 5px;
  list-style-type: none;
  width: 250px;
  padding: 0 0 5px 0;
  @media (max-width: 992px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto 25px auto;
  }
`;

export const ItemImgWrapStyle = styled.div`
  overflow: hidden;
  margin: 5px;
`;

export const ItemImgStyle = styled.img`
  width: 100%;
`;

export const ItemTitleStyle = styled.h3`
  margin: 10px 0 5px 0;
  text-align: center;
  color: #5bc0de;
  font-size: 16px;
`;

export const ItemParagraphStyle = styled.p`
  font-size: 14px;
  padding: 0 10px;
  margin-bottom: 5px;
`;

export const ItemButtonsBlockStyle = styled.div`
  padding: 5px 0 0 0;
  display: flex;
  justify-content: space-around;
`;

export const ItemButtonStyle = styled(Button)`
  margin: 0 5px 0 auto;
  line-height: 12px;
  font-size: 12px;  
`;