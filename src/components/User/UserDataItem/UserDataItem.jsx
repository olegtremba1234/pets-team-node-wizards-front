import { useState } from 'react';
import { Icons } from '../Icons/Icons';
import { UserItem } from './UserDataItem.styled';

const UserDataItem = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <UserItem>
      <li className="userInfoItem">
        <p className="userInfoName">Name:</p>
        <div className="inputSpace">
          <input
            className="infoItem"
            type="text"
            name="name"
            disabled={disabled}
            // id={inputID.current}
          ></input>
          <button
            className="buttItem"
            type="button"
            //   onClick={openHandler}
          >
            <Icons id="icon-user_red" />
          </button>
        </div>
      </li>
      <li className="userInfoItem">
        <p className="userInfoName">Email:</p>
        <div className="inputSpace">
          <input
            className="infoItem"
            type="text"
            name="name"
            disabled={disabled}
            // id={inputID.current}
          ></input>
          <button
            className="buttItem"
            type="button"
            //   onClick={openHandler}
          >
            <Icons id="icon-user_red" />
          </button>
        </div>
      </li>
      <li className="userInfoItem">
        <p className="userInfoName">Birthday:</p>
        <div className="inputSpace">
          <input
            className="infoItem"
            type="text"
            name="name"
            disabled={disabled}
            // id={inputID.current}
          ></input>
          <button
            className="buttItem"
            type="button"
            //   onClick={openHandler}
          >
            <Icons id="icon-user_red" />
          </button>
        </div>
      </li>
      <li className="userInfoItem">
        <p className="userInfoName">Phone:</p>
        <div className="inputSpace">
          <input
            className="infoItem"
            type="text"
            name="name"
            disabled={disabled}
            // id={inputID.current}
          ></input>
          <button
            className="buttItem"
            type="button"
            //   onClick={openHandler}
          >
            <Icons id="icon-user_red" />
          </button>
        </div>
      </li>
      <li className="userInfoItem">
        <p className="userInfoName"> City:</p>
        <div className="inputSpace">
          <input
            className="infoItem"
            type="text"
            name="name"
            disabled={disabled}
            // id={inputID.current}
          ></input>
          <button
            className="buttItem"
            type="button"
            //   onClick={openHandler}
          >
            <Icons id="icon-user_red" />
          </button>
        </div>
      </li>
    </UserItem>
  );
};

export default UserDataItem;
