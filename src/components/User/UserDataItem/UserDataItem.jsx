import { v4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Icons } from '../Icons/Icons';
import { UserItem } from './UserDataItem.styled';
import { nanoid } from 'nanoid';

const UserDataItem = () => {
  const [name, setName] = useState('icon-user_red');


  const [disabled, setDisabled] = useState(true);
  const [active, setActive] = useState(true);

  const [currentInput, setCurrentInput] = useState('');
  const [inputActive, setInputActive] = useState(true);

  const textInput = document.querySelector('.text-input');
  // const output = document.querySelector(".output");
 

 

  // const [inpDis, setInpDis] = useState(true);

  const selectInput = ev => {
    const id = ev.previousElementSibling.id;
    const el = document.getElementById(id);
    el.disabled = !disabled;
    el.focus();

    // setInpDis(ev.previousElementSibling.disabled);
    setDisabled(el.disabled);
    setInputActive(el.disabled);
    setCurrentInput(ev.previousElementSibling.name);
  };

  const edit = name => {
    switch (name) {
      case 'name':
        if ('name' === currentInput) {
          
          console.log("1", inputActive)
          if (inputActive) {
            
            return <Icons id={'icon-user_red'} />;
          } else {
            return <Icons id={'icon-user_done'} />;
          }
        } else {
          return <Icons id={'icon-user_red'} />;
        }

      case 'email':
        if ('email' === currentInput) {
          console.log("2", inputActive)
          if (inputActive) {
            return <Icons id={'icon-user_red'} />;
          } else {
            return <Icons id={'icon-user_done'} />;
          }
        } else {
          return <Icons id={'icon-user_red'} />;
        }

      case 'birthday':
        if ('birthday' === currentInput) {
          if (inputActive) {
            return <Icons id={'icon-user_red'} />;
          } else {
            return <Icons id={'icon-user_done'} />;
          }
        } else {
          return <Icons id={'icon-user_red'} />;
        }

      case 'phone':
        if ('phone' === currentInput) {
          if (inputActive) {
            return <Icons id={'icon-user_red'} />;
          } else {
            return <Icons id={'icon-user_done'} />;
          }
        } else {
          return <Icons id={'icon-user_red'} />;
        }

      case 'city':
        if ('city' === currentInput) {
          if (inputActive) {
            return <Icons id={'icon-user_red'} />;
          } else {
            return <Icons id={'icon-user_done'} />;
          }
        } else {
          return <Icons id={'icon-user_red'} />;
        }

      default:
    }
  };

  const handleClickEdit = ev => {
    
    selectInput(ev);
  };

  // e.preventDefault();
  //   return 'icon-user_red';
  return (
    <UserItem>
      <li className="userInfoItem">
        <p className="userInfoName">Name:</p>
        <div className="inputSpace">
          <input
            className="infoItem"
            type="text"
            name="name"
            disabled={active}
            id={nanoid()}
          ></input>
          {
            <button
              className="buttItem"
              type="button"
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {edit('name')}
            </button>
          }
        </div>
      </li>

      <li className="userInfoItem">
        <p className="userInfoName">Email:</p>
        <div className="inputSpace">
          <input
            className="infoItem"
            type="text"
            name="email"
            disabled={active}
            id={nanoid()}
          ></input>
          {
            <button
              className="buttItem"
              type="button"
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {edit('email')}
            </button>
          }
        </div>
      </li>
      <li className="userInfoItem">
        <p className="userInfoName">Birthday:</p>
        <div className="inputSpace">
          <input
            className="infoItem"
            type="text"
            name="birthday"
            disabled={active}
            id={nanoid()}
          ></input>
          {
            <button
              className="buttItem"
              type="button"
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {edit('birthday')}
            </button>
          }
        </div>
      </li>
      <li className="userInfoItem">
        <p className="userInfoName">Phone:</p>
        <div className="inputSpace">
          <input
            className="infoItem"
            type="text"
            name="phone"
            disabled={active}
            id={nanoid()}
          ></input>
          {
            <button
              className="buttItem"
              type="button"
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {edit('phone')}
            </button>
          }
        </div>
      </li>
      <li className="userInfoItem">
        <p className="userInfoName"> City:</p>
        <div className="inputSpace">
          <input
            className="infoItem"
            type="text"
            name="city"
            disabled={active}
            id={nanoid()}
          ></input>
          {
            <button
              className="buttItem"
              type="button"
              onClick={event => handleClickEdit(event.currentTarget)}
            >
              {edit('city')}
            </button>
          }
        </div>
      </li>
    </UserItem>
  );
};

export default UserDataItem;
