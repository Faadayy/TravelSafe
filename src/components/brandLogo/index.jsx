import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/logo101.png";
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 900;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props;

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/">
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Travel Safe" />
          </LogoImage>
        </Link>
      )}
      <StyledLink to="/">
        <LogoTitle size={textSize} color={color}>
          Travel Safe
        </LogoTitle>
      </StyledLink>
    </BrandLogoContainer>
  );
}
