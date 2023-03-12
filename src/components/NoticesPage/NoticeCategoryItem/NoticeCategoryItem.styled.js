import styled from 'styled-components';
import { theme } from 'vars/theme';

export const Card = styled.div`
  width: 288px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1279px) {
    width: 336px;
  }
  @media (max-width: 767px) {
    width: 280px;
  }
`;
export const Image = styled.img`
  width: 100%;
  object-position: center top;
  height: 288px;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 20px;
`;
export const LearnMoneBtn = styled.button`
  cursor: pointer;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 8px 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  margin-bottom: ${props => (!props.isOwn ? '20px' : '12px')};
  transition: ${theme.transition.first};
  &:hover {
    background-color: ${theme.hoverButtonColor.primary};
    border-radius: 30px;
    color: #fff;
  }
  @media (max-width: 1279px) and (min-width: 321px) {
    width: 248px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const DeleteBtn = styled.button`
  cursor: pointer;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 8px 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: ${theme.transition.first};
  &:hover {
    background-color: ${theme.hoverButtonColor.primary};
    border-radius: 30px;
    color: #fff;
  }
  @media (max-width: 1279px) and (min-width: 321px) {
    width: 248px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const HeartBtn = styled.button`
  width: 44px;
  height: 44px;
  backdrop-filter: blur(50px);
  border-radius: 50%;
  position: absolute;
  border: none;
  top: 12px;
  right: 12px;
  cursor: pointer;
  background-color: ${props => props.isFavorite && '#F59256'};
`;
export const CategoryInfo = styled.div`
  position: absolute;
  width: 158px;
  padding: 6px 20px 6px 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;
  left: 0;
  top: 26px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;
export const ImageWrapper = styled.div`
  margin-bottom: 20px;
  position: relative;
  height: 288px;
`;
export const InfoWrapper = styled.div`
  height: 100%;
  justify-content: space-between;
  padding: 20px 20px 12px 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1279px) {
    padding: 20px 20px 32px 20px;
  }
  @media (max-width: 767px) {
    padding: 20px 16px 12px 16px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
