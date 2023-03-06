import { useState } from 'react';
import { Icons } from '../Icons/Icons';
import { UserItem, InfoItem } from './UserDataItem.styled';
import { nanoid } from 'nanoid';

const UserDataItem = () => {
  const [nameDisabled, setNameDisabled] = useState(false);
  const [emailDisabled, setEmailDisabled] = useState(false);
  const [birthdayDisabled, setBirthdayDisabled] = useState(false);
  const [phoneDisabled, setPhoneDisabled] = useState(false);
  const [cityDisabled, setCityDisabled] = useState(false);

  const selectInput = (ev, diz) => {
    const id = ev.previousElementSibling.id;
    const el = document.getElementById(id);
    el.disabled = !el.disabled;
    el.focus();
  };

  const handleClickEdit = ev => {
    const name = ev.previousElementSibling.name;
    switch (name) {
      case 'name':
        selectInput(ev, nameDisabled);
        setNameDisabled(!nameDisabled);
        break;

      case 'email':
        selectInput(ev, nameDisabled);
        setEmailDisabled(!emailDisabled);
        break;

      case 'birthday':
        selectInput(ev, nameDisabled);
        setBirthdayDisabled(!birthdayDisabled);
        break;

      case 'phone':
        selectInput(ev, nameDisabled);
        setPhoneDisabled(!phoneDisabled);
        break;
      case 'city':
        selectInput(ev, nameDisabled);
        setCityDisabled(!cityDisabled);
        break;
      default:
    }
  };

  // const handleSubmit =(e)=>{
  //     e.preventDefault();
  // }

  return (
    <UserItem>
      <li className="userInfoItem">
        <p className="userInfoName">Name:</p>
        <div className="inputSpace">
          <InfoItem
            className="infoItem"
            type="text"
            name="name"
            disabled={nameDisabled}
            id={nanoid()}
            defaultValue="ghhd"
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

      <li className="userInfoItem">
        <p className="userInfoName">Email:</p>
        <div className="inputSpace">
          <InfoItem
            className="infoItem"
            type="text"
            name="email"
            disabled={emailDisabled}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            id={nanoid()}
            defaultValue="ghhd"
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
      <li className="userInfoItem">
        <p className="userInfoName">Birthday:</p>
        <div className="inputSpace">
          <InfoItem
            className="infoItem"
            type="text"
            name="birthday"
            disabled={birthdayDisabled}
            id={nanoid()}
            defaultValue="ghhd"
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

      <li className="userInfoItem">
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
            defaultValue="ghhd"
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
            defaultValue="ghhd"
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
