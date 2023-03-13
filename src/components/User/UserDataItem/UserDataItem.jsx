import { useState } from 'react';
import { Icons } from '../Icons/Icons';
import { UserItem, InfoItem, InputSpace, UserInfoName, ButtItem, UserInfoItem } from './UserDataItem.styled';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { fetchUseInfo, fetchUser } from 'services/apiService';
import { toast } from 'react-toastify';

const UserDataItem = ({ dataItem }) => {
  const [nameDisabled, setNameDisabled] = useState(true);
  const [emailDisabled, setEmailDisabled] = useState(true);
  const [birthdayDisabled, setBirthdayDisabled] = useState(true);
  const [phoneDisabled, setPhoneDisabled] = useState(true);
  const [cityDisabled, setCityDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState(() => dataItem);

  const [butName, setButName] = useState(null);
  let birthdayReverse = null;

  const selectInput = (ev, diz) => {};
  const token = useSelector(selectToken);

  const buttonDisabled = btName => {
    if (!butName) {
      return false;
    } else {
      if (btName === butName) {
        return false;
      } else {
        return true;
      }
    }
  };

  const handleClickEdit = async ev => {
    const name = ev.previousElementSibling.name;
    const val = ev.previousElementSibling.value;
    switch (name) {
      case 'name':
        setButName(ev.previousElementSibling.name);
        setNameDisabled(!nameDisabled);

        if (!nameDisabled) {
          await fetchUseInfo({ name: val }, token).then(setUserInfo);
          userDataInfo();
          toast.success('Done');
          setButName(null);
        }
        break;

      case 'email':
        setButName(ev.previousElementSibling.name);

        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!reg.test(val)) {
          toast.error('The email was entered incorrectly');
          return;
        }

        selectInput(ev, emailDisabled);
        setEmailDisabled(!emailDisabled);

        if (!emailDisabled) {
          await fetchUseInfo(
            { email: ev.previousElementSibling.value },
            token
          ).then(setUserInfo);
          await userDataInfo();
          toast.success('Done');
          setButName(null);
        }
        break;

      case 'birthday':
        setButName(ev.previousElementSibling.name);
        selectInput(ev, birthdayDisabled);
        setBirthdayDisabled(!birthdayDisabled);

        if (!birthdayDisabled) {
          await fetchUseInfo(
            {
              birthday: ev.previousElementSibling.value
                .split('-')
                .reverse()
                .join('.'),
            },
            token
          ).then(setUserInfo);
          await userDataInfo();
          toast.success('Done');
          setButName(null);
        }
        break;

      case 'phone':
        setButName(ev.previousElementSibling.name);

        const tel = /^\+380\d{9}$/;

        if (!tel.test(val)) {
          toast.error(
            'The phone number is incorrect. Data must be in the format "+380501111111. With no space between them'
          );
          return;
        }
        selectInput(ev, phoneDisabled);
        setPhoneDisabled(!phoneDisabled);
        if (!phoneDisabled) {
          await fetchUseInfo(
            { phone: ev.previousElementSibling.value },
            token
          ).then(setUserInfo);
          await userDataInfo();
          toast.success('Done');
          setButName(null);
        }
        break;

      case 'city':
        setButName(ev.previousElementSibling.name);
        const regex = /^[a-zA-Z]+,[a-zA-Z]+$/;

        if (!regex.test(val)) {
          toast.error(
            'The data must be in the "City,Region" format. With no space between them'
          );
          return;
        }

        selectInput(ev, cityDisabled);
        setCityDisabled(!cityDisabled);

        if (!cityDisabled) {
          await fetchUseInfo(
            { city: ev.previousElementSibling.value },
            token
          ).then(setUserInfo);
          await userDataInfo();
          toast.success('Done');
          setButName(null);
        }
        break;
      default:
    }
  };

  const userDataInfo = async () => {
    const dataItem = await fetchUser(token);
    setUserInfo(dataItem);
  };

  const { name, email, birthday, city, phone } = userInfo;

  if (birthday !== undefined) {
    birthdayReverse = birthday.split('.').reverse().join('-');
  }

  return (
    <UserItem>
      <UserInfoItem key={nanoid()}>
        <UserInfoName>Name:</UserInfoName>
        <InputSpace>
          <InfoItem
            type="text"
            name="name"
            disabled={nameDisabled}
            id={nanoid()}
            autoFocus
            defaultValue={name}
          ></InfoItem>
          {
            <ButtItem
              type="button"
              onClick={event => handleClickEdit(event.currentTarget)}
              disabled={buttonDisabled('name')}
            >
              {nameDisabled ? (
                <Icons isLocked={buttonDisabled('name')} id={'icon-user_red'} />
              ) : (
                <Icons id={'icon-user_done'} />
              )}
            </ButtItem>
          }
        </InputSpace>
      </UserInfoItem>

      <UserInfoItem key={nanoid()}>
        <UserInfoName>Email:</UserInfoName>
        <InputSpace>
          <InfoItem
            type="text"
            name="email"
            disabled={emailDisabled}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            id={nanoid()}
            autoFocus
            defaultValue={email}
          ></InfoItem>
          {
            <ButtItem
              type="button"
              disabled={buttonDisabled('email')}
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {emailDisabled ? (
                <Icons
                  isLocked={buttonDisabled('email')}
                  id={'icon-user_red'}
                />
              ) : (
                <Icons id={'icon-user_done'} />
              )}
            </ButtItem>
          }
        </InputSpace>
      </UserInfoItem>

      <UserInfoItem key={nanoid()}>
        <UserInfoName>Birthday:</UserInfoName>
        <InputSpace>
          <InfoItem
            type="date"
            name="birthday"
            disabled={birthdayDisabled}
            id={nanoid()}
            autoFocus
            defaultValue={birthdayReverse && birthdayReverse}
          ></InfoItem>
          {
            <ButtItem
              type="button"
              disabled={buttonDisabled('birthday')}
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {birthdayDisabled ? (
                <Icons
                  isLocked={buttonDisabled('birthday')}
                  id={'icon-user_red'}
                />
              ) : (
                <Icons id={'icon-user_done'} />
              )}
            </ButtItem>
          }
        </InputSpace>
      </UserInfoItem>

      <UserInfoItem key={nanoid()}>
        <UserInfoName>Phone:</UserInfoName>
        <InputSpace>
          <InfoItem
            type="text"
            name="phone"
            disabled={phoneDisabled}
            pattern="\(\d{3}\) \d{3}-\d{4}"
            required
            id={nanoid()}
            autoFocus
            defaultValue={phone}
          ></InfoItem>
          {
            <ButtItem
              type="button"
              disabled={buttonDisabled('phone')}
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {phoneDisabled ? (
                <Icons
                  isLocked={buttonDisabled('phone')}
                  id={'icon-user_red'}
                />
              ) : (
                <Icons id={'icon-user_done'} />
              )}
            </ButtItem>
          }
        </InputSpace>
      </UserInfoItem>

      <UserInfoItem key={nanoid()}>
        <UserInfoName> City:</UserInfoName>
        <InputSpace>
          <InfoItem
            type="text"
            name="city"
            disabled={cityDisabled}
            id={nanoid()}
            autoFocus
            defaultValue={city}
          ></InfoItem>
          {
            <ButtItem
              type="button"
              disabled={buttonDisabled('city')}
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {cityDisabled ? (
                <Icons isLocked={buttonDisabled('city')} id={'icon-user_red'} />
              ) : (
                <Icons id={'icon-user_done'} />
              )}
            </ButtItem>
          }
        </InputSpace>
      </UserInfoItem>
    </UserItem>
  );
};

export default UserDataItem;
