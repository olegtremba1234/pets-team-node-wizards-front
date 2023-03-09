import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'vars/device';

export const Section = styled.section`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 36px;
  margin-bottom: 30px;

  @media ${device.tablet} {
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding-left: 28px;
  padding-right: 28px;
  padding-bottom: 8px;
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 14px;
  line-height: 1.35;
  &.active {
    background-color: #f59256;
    color: white;
  }

  @media ${device.tablet} {
    font-size: 20px;
    padding-top: 10px;

    &:last-child {
      margin-left: 11px;
    }
  }
  @media ${device.desktop} {
    &:last-child {
      margin-left: 3px;
    }
  }
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #111111;
  line-height: 1.37;
  font-weight: 700;
  margin-top: 42px;

  @media ${device.tablet} {
    font-size: 48px;
    margin-top: 90px;
  }

  @media ${device.desktop} {
    margin-top: 70px;
  }
`;

export const StyledNoticesPageContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${device.desktop} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
