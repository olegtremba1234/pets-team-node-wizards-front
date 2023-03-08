import styled from 'styled-components';
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';
import { device } from 'vars/device';
import { BiShow, BiHide } from 'react-icons/bi';
import register_bg_step1_mob from '../../../images/bg-images/mobile/register_bg_step1_mob.png';
import tablet_vector_1 from '../../../images/bg-images/tablet/tablet_vector_1.png';
import tablet_vector_2 from '../../../images/bg-images/tablet/tablet_vector_2.png';
import tablet_vector_3 from '../../../images/bg-images/tablet/tablet_vector_3.png';
import tablet_vector_4 from '../../../images/bg-images/tablet/tablet_vector_4.png';
import tablet_vector_5 from '../../../images/bg-images/tablet/tablet_vector_5.png';
import tablet_vector_6 from '../../../images/bg-images/tablet/tablet_vector_6.png';
import desktop_vector_1 from '../../../images/bg-images/desktop/desktop_vector_1.png';
import desktop_vector_2 from '../../../images/bg-images/desktop/desktop_vector_2.png';
import desktop_vector_3 from '../../../images/bg-images/desktop/desktop_vector_3.png';

export const SectionLoginForm = styled.section`
  min-height: calc(100vh - 100px);
  background-color: ${props => props.theme.backgrounds.input};
  background-image: url(${register_bg_step1_mob});
  background-size: 'contain';
  background-position: left 50% bottom 0px;
  background-repeat: no-repeat;
  @media ${device.tablet} {
    min-height: calc(100vh - 272px);
    margin-top: 204px;
    background-image: url(${tablet_vector_3}), url(${tablet_vector_2}),
      url(${tablet_vector_4}), url(${tablet_vector_1}), url(${tablet_vector_5}),
      url(${tablet_vector_6});
    background-position: left 0 bottom 0, right 0 bottom 0, right 0 bottom 0,
      right 0 bottom 0, left 163px bottom 163px, left 24px bottom 256px;
  }
  @media ${device.desktop} {
    min-height: calc(100vh - 144px);
    margin-top: 80px;
    background-image: url(${desktop_vector_1}), url(${desktop_vector_2}),
      url(${desktop_vector_3}), url(${tablet_vector_5}), url(${tablet_vector_6});
    background-position: right 305px bottom 0, right 96px bottom 0,
      right 0 bottom 0, left 258px bottom 131px, left 32px bottom 248px;
  }
`;

export const LoginFormContainer = styled.div`
  max-width: 320px;
  padding: 0px 20px;
  margin: 0px auto;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  @media ${device.tablet} {
    max-width: 768px;
    padding: 0px 80px;
  }
  @media ${device.desktop} {
    max-width: 1280px;
    padding: 0px 331px;
  }
`;

export const LoginFormBox = styled.div`
  @media ${device.tablet} {
    background-color: ${props => props.theme.backgrounds.bodySecondary};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    padding-top: 60px;
    padding-bottom: 40px;
    padding-right: 80px;
    padding-left: 80px;
  }
  @media ${device.desktop} {
    padding-bottom: 60px;
  }
`;

export const LoginTitle = styled.h1`
  margin-bottom: 40px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  color: ${props => props.theme.fontColors.primary};
  @media ${device.tablet} {
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
  }
  @media ${device.desktop} {
  }
`;

export const FormInput = styled(Field)`
  display: block;
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  width: 100%;
  margin-top: 16px;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 56px;
  color: ${props => props.theme.fontColors.inputTextColor};
  outline: none;
  background-color: ${props => props.theme.backgrounds.input};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  transition: transform ${props => props.theme.transition.first};
  &:hover,
  &:focus {
    transform: scale(1.02);
    border: 1px solid ${p => p.theme.hoverButtonColor.primary};
  }
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 25px;
    padding-top: 14px;
    padding-bottom: 13px;
    padding-left: 32px;
  }
`;

export const WrapInputPassword = styled.div`
  position: relative;
`;

export const ShowPasswordIcon = styled(BiShow)`
  position: absolute;
  right: 20px;
  top: 8.5px;
  color: #f59256;
  width: 26px;
  height: 26px;
  @media ${device.tablet} {
    top: 10px;
    width: 32px;
    height: 32px;
  }
`;

export const HidePasswordIcon = styled(BiHide)`
  position: absolute;
  right: 20px;
  top: 8.5px;
  color: #f59256;
  width: 26px;
  height: 26px;
  @media ${device.tablet} {
    top: 10px;
    width: 32px;
    height: 32px;
  }
`;

export const LoginSubmitBtn = styled.button`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  margin-top: 40px;
  width: 100%;
  color: ${props => props.theme.fontColors.white};
  background-color: ${props => props.theme.backgrounds.buttonPrimary};
  border-radius: 40px;
  padding-top: 6.5px;
  padding-bottom: 6.5px;
  text-align: center;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  outline: none;
  border: 2px solid #f59256;
  transition: transform ${props => props.theme.transition.first};
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    border: 2px solid ${p => p.theme.hoverButtonColor.primary};
  }
  @media ${device.tablet} {
    margin-top: 40px;
  }
  @media ${device.desktop} {
    padding-top: 10.5px;
    padding-bottom: 10.5px;
  }
`;

export const LoginBoxText = styled.div`
  margin-top: 40px;
`;

export const LoginLinkText = styled.p`
  margin-bottom: 10px;
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  color: ${props => props.theme.fontColors.inputTextColor};
`;

export const LoginLink = styled(NavLink)`
  color: ${props => props.theme.fontColors.blueLink};
`;
