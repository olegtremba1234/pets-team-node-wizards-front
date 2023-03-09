import { useEffect, useState } from 'react';
import { Icons } from '../Icons/Icons';
import { UserItem, InfoItem } from './UserDataItem.styled';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { fetchUseInfo, fetchUser } from 'services/apiService';

// import { userSelector } from 'redux/user/userSelector';
// import { fetchUserInfo } from 'services/apiService';

const UserDataItem = () => {
  const [nameDisabled, setNameDisabled] = useState(true);
  const [emailDisabled, setEmailDisabled] = useState(true);
  const [birthdayDisabled, setBirthdayDisabled] = useState(true);
  const [phoneDisabled, setPhoneDisabled] = useState(true);
  const [cityDisabled, setCityDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState('');

  const selectInput = (ev, diz) => {
    const id = ev.previousElementSibling.id;
    const el = document.getElementById(id);
    el.disabled = !el.diz;
    el.focus();
  };
  const token = useSelector(selectToken);

  const handleClickEdit = async ev => {
    const name = ev.previousElementSibling.name;
    switch (name) {
      case 'name':
        selectInput(ev, nameDisabled);
        setNameDisabled(!nameDisabled);

        if (!nameDisabled) {
          await fetchUseInfo({name: ev.previousElementSibling.value},token).then(setUserInfo);
          await userDataInfo()
        }

        break;

      case 'email':
        selectInput(ev, emailDisabled);
        setEmailDisabled(!emailDisabled);
        if (!emailDisabled) {
          await fetchUseInfo({email: ev.previousElementSibling.value},token).then(setUserInfo);
          await userDataInfo()
        }
        break;

      case 'birthday':
        selectInput(ev, birthdayDisabled);
        setBirthdayDisabled(!birthdayDisabled);
        if (!birthdayDisabled) {
          await fetchUseInfo({birthday: ev.previousElementSibling.value},token).then(setUserInfo);
          await userDataInfo()
        }
        break;

      case 'phone':
        selectInput(ev, phoneDisabled);
        setPhoneDisabled(!phoneDisabled);
        if (!phoneDisabled) {
          await fetchUseInfo({phone: ev.previousElementSibling.value},token).then(setUserInfo);
          await userDataInfo()
        }
        break;
      case 'city':
        selectInput(ev, cityDisabled);
        setCityDisabled(!cityDisabled);
        if (!cityDisabled) {
          await fetchUseInfo({city: ev.previousElementSibling.value},token).then(setUserInfo);
          await userDataInfo()
        }
        break;
      default:
    }
  };

  const userDataInfo = async () => {
    const info = await fetchUser(token).then(setUserInfo);
    if(info){}
    return info;
  };

  useEffect(() => {
    userDataInfo();

    
  }, [setUserInfo]);

  const { name, email, birthday, city, phone } = userInfo;

  // const handleSubmit =(e)=>{
  //     e.preventDefault();
  // }

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
            defaultValue={name}
          ></InfoItem>
          {
            <button
              className="buttItem"
              type="button"
              onClick={event => handleClickEdit(event.currentTarget)}
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
            className="infoItem"
            type="text"
            name="email"
            disabled={emailDisabled}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            id={nanoid()}
            defaultValue={email}
          ></InfoItem>
          {
            <button
              className="buttItem"
              type="button"
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
            className="infoItem"
            type="text"
            name="birthday"
            disabled={birthdayDisabled}
            id={nanoid()}
            defaultValue={birthday}
          ></InfoItem>
          {
            <button
              className="buttItem"
              type="button"
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
            className="infoItem"
            type="text"
            name="phone"
            disabled={phoneDisabled}
            pattern="\(\d{3}\) \d{3}-\d{4}"
            required
            id={nanoid()}
            defaultValue={phone}
          ></InfoItem>
          {
            <button
              className="buttItem"
              type="button"
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
            className="infoItem"
            type="text"
            name="city"
            disabled={cityDisabled}
            id={nanoid()}
            defaultValue={city}
          ></InfoItem>
          {
            <button
              className="buttItem"
              type="button"
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
