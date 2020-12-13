import styled from "styled-components"

export const FooterStyle = styled.footer`
  max-width: 100%;
  height: 200px;
  background: #343a40;
  @media (max-width: 767px) {
    height: 155px;
  }
`;

export const FooterFlexFirstStyle = styled.div`
  display: flex;
  width: 100%;
`;

export const WatermarkTextStyle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #939EA4;
  margin: 30px auto 0 0;
  @media (max-width: 767px) {
    margin: 14px auto 0 0;
  }
`;

export const FooterTextStyle = styled.p`
  margin: 35px 0 0 0;
  font-weight: 900;
  font-size: 26px;
  line-height: 38px;
  color: #5bc0de;
  @media (max-width: 767px) {
    margin: 21px 0 0 0;
  }
`;

export const HrStyle = styled.hr`
  background: #5bc0de;
  margin: 25px 0 14px 0;
  width: 100%;
  @media (max-width: 767px) {
    margin: 8px 0 5px 0;
  }
`;

export const FooterFlexSecondStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 69px;
  width: 100%;
`;

export const FooterNavStyle = styled.nav`
  max-width: 245px;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterNavUlStyle = styled.ul`
  display: flex;

  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FooterNavLiStyle = styled.li`
  margin-right: 60px;
`;

export const FooterNavAStyle = styled.a`
  font-size: 14px;
  line-height: 24px;
  color: #5bc0de;

  text-decoration: none;
`;

export const FooterSocialStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10px;
`;

export const SocialLinkStyle = styled.div`
  text-align: center;
`;
