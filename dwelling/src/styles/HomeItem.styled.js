import styled from "styled-components";

export const HomeItemLiStyle = styled.li`
  border: 2px solid #A9A9A9;
  border-radius: 5px;
  list-style-type: none;
  width: 300px;
  padding: 0 0 5px 0;
  margin: 0 auto 25px auto;
  @media (max-width: 1200px) {
    width: 250px;
  }
  @media (max-width: 992px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto 10px auto;
  }
`;

export const HomeItemImgWrapStyle = styled.div`
  overflow: hidden;
  margin: 5px;
`;

export const HomeItemImgStyle = styled.img`
  width: 100%;

`;

export const HomeItemTitleStyle = styled.h3`
  margin: 10px 0 5px 0;
  text-align: center;
  color: #5bc0de;
  font-size: 16px;
`;

export const HomeItemParagraphStyle = styled.p`
  text-indent: 3%;
  font-size: 14px;
  padding: 0 10px;
  margin-bottom: 5px;
`;

