import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 36px;
  margin-bottom: 30px;
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

  &.active {
    background-color: #f59256;
    color: white;
  }
`;
