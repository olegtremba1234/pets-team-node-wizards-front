import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'vars/device';

export const Section = styled.section`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-right: auto;
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
  height: 35px;
  @media ${device.tablet} {
    font-size: 20px;
    padding-top: 10px;
    height: 47px;
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

export const AddButtonAndCategoriesWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: baseline;
  @media ${device.tablet} {
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

export const StyledNoticesPageContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @media ${device.tablet} {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    width: 768px;
  }

  @media ${device.desktop} {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
    width: 1280px;
  }
`;
