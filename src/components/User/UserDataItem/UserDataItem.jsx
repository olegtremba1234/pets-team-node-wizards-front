import { useState } from 'react';
import { Icons } from '../Icons/Icons';
import { UserItem, InfoItem } from './UserDataItem.styled';
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

  const selectInput = (ev, diz) => {
   
    
  };
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
    switch (name) {
      case 'name':
        setButName(ev.previousElementSibling.name);
        // selectInput(ev, nameDisabled);
        setNameDisabled(!nameDisabled);

        if (!nameDisabled) {
          await fetchUseInfo(
            { name: ev.previousElementSibling.value },
            token
          ).then(setUserInfo);
          userDataInfo();
          setButName(null);
        }
        break;

      case 'email':
        setButName(ev.previousElementSibling.name);
        selectInput(ev, emailDisabled);
        setEmailDisabled(!emailDisabled);
        if (!emailDisabled) {
          await fetchUseInfo(
            { email: ev.previousElementSibling.value },
            token
          ).then(setUserInfo);
          await userDataInfo();
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
          setButName(null);
        }
        break;

      case 'phone':
        setButName(ev.previousElementSibling.name);
        const len = ev.previousElementSibling.value;

        if (len.length < 13 || len.length > 13) {
          toast.error('The phone number is incorrect');
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
          setButName(null);
        }
        break;

      case 'city':
        setButName(ev.previousElementSibling.name);
        selectInput(ev, cityDisabled);
        setCityDisabled(!cityDisabled);
        if (!cityDisabled) {
          await fetchUseInfo(
            { city: ev.previousElementSibling.value },
            token
          ).then(setUserInfo);
          await userDataInfo();
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
      <li className="userInfoItem" key={nanoid()}>
        <p className="userInfoName">Name:</p>
        <div className="inputSpace">
          <InfoItem
            className="infoItem"
            type="text"
            name="name"
            disabled={nameDisabled}
            id={nanoid()}
            autoFocus
            defaultValue={name}
          ></InfoItem>
          {
            <button
              className="buttItem"
              type="button"
              onClick={event => handleClickEdit(event.currentTarget)}
              disabled={buttonDisabled('name')}
            >
              {nameDisabled ? (
                <Icons id={'icon-user_red'} />
              ) : (
                <Icons id={'icon-user_done'} />
              )}
            </button>
          }
        </div>
      </li>

      <li className="userInfoItem" key={nanoid()}>
        <p className="userInfoName">Email:</p>
        <div className="inputSpace">
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
            <button
              className="buttItem"
              type="button"
              disabled={buttonDisabled('email')}
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {emailDisabled ? (
                <Icons id={'icon-user_red'} />
              ) : (
                <Icons id={'icon-user_done'} />
              )}
            </button>
          }
        </div>
      </li>

      <li className="userInfoItem" key={nanoid()}>
        <p className="userInfoName">Birthday:</p>
        <div className="inputSpace">
          <InfoItem
            type="date"
            name="birthday"
            disabled={birthdayDisabled}
            id={nanoid()}
            autoFocus
            defaultValue={birthdayReverse && birthdayReverse}
          ></InfoItem>
          {
            <button
              className="buttItem"
              type="button"
              disabled={buttonDisabled('birthday')}
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {birthdayDisabled ? (
                <Icons id={'icon-user_red'} />
              ) : (
                <Icons id={'icon-user_done'} />
              )}
            </button>
          }
        </div>
      </li>

      <li className="userInfoItem" key={nanoid()}>
        <p className="userInfoName">Phone:</p>
        <div className="inputSpace">
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
            <button
              className="buttItem"
              type="button"
              disabled={buttonDisabled('phone')}
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {phoneDisabled ? (
                <Icons id={'icon-user_red'} />
              ) : (
                <Icons id={'icon-user_done'} />
              )}
            </button>
          }
        </div>
      </li>

      <li className="userInfoItem">
        <p className="userInfoName"> City:</p>
        <div className="inputSpace">
          <InfoItem
            type="text"
            name="city"
            disabled={cityDisabled}
            id={nanoid()}
            autoFocus
            defaultValue={city}
          ></InfoItem>
          {
            <button
              className="buttItem"
              type="button"
              disabled={buttonDisabled('city')}
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {cityDisabled ? (
                <Icons id={'icon-user_red'} />
              ) : (
                <Icons id={'icon-user_done'} />
              )}
            </button>
          }
        </div>
      </li>
    </UserItem>
  );
};

export default UserDataItem;
