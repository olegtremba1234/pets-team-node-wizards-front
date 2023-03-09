import {
  LoqoutIcons,
  UserAvatarIcons,
  IconsRed,
  UserRemoveAvatar,
  IconsDone,
  PetsAddIcon,
  CardIcons,
} from './Icons.styled';

export const Icons = ({ id }) => {
  switch (id) {
    case 'icon-user_logout':
      return (
        <LoqoutIcons>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M27.209 11.682a.362.362 0 0 1 .511 0l2.799 2.799a2.24 2.24 0 0 1 0 3.162l-2.799 2.799a.357.357 0 0 1-.51 0 .36.36 0 0 1 0-.51l3.508-3.509H13.563a.36.36 0 1 1 0-.722h17.155l-3.508-3.509a.36.36 0 0 1 0-.51zM21.736 24.5V27a4.117 4.117 0 0 1-4.111 4.111H5.062A4.117 4.117 0 0 1 .951 27V5A4.117 4.117 0 0 1 5.062.889h12.563A4.117 4.117 0 0 1 21.736 5v2.5a.36.36 0 1 1-.722 0V5a3.392 3.392 0 0 0-3.389-3.389H5.062A3.392 3.392 0 0 0 1.673 5v22a3.392 3.392 0 0 0 3.389 3.389h12.563A3.392 3.392 0 0 0 21.014 27v-2.5a.361.361 0 0 1 .722 0z" />
          </svg>
        </LoqoutIcons>
      );
    case 'icon-user_red':
      return (
        <IconsRed>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M5.893 27.438a1.324 1.324 0 0 1-.983-.435 1.31 1.31 0 0 1-.35-1.019l.327-3.592L19.978 7.307l4.716 4.715L9.607 27.106l-3.592.327c-.04.004-.081.005-.121.005zM25.635 11.08 20.92 6.365l2.828-2.828a1.332 1.332 0 0 1 1.455-.289c.162.067.309.165.433.289l2.828 2.828a1.332 1.332 0 0 1 .289 1.455 1.332 1.332 0 0 1-.289.433l-2.828 2.828z" />
          </svg>
        </IconsRed>
      );
    case 'icon-user_done':
      return (
        <IconsDone>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M28.055 5.462a2.4 2.4 0 0 1 .083 3.393l-15.232 16a2.399 2.399 0 0 1-3.476 0l-7.168-7.529a2.4 2.4 0 1 1 3.476-3.31l5.43 5.703L24.662 5.545a2.4 2.4 0 0 1 3.393-.083z" />
          </svg>
        </IconsDone>
      );
    case 'camera':
      return (
        <UserAvatarIcons className="user-avatar-icons">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16 12.333a4.333 4.333 0 1 0 0 8.666 4.333 4.333 0 0 0 0-8.666z" />
            <path d="M12.333.333A3.333 3.333 0 0 0 9 3.666v.238c0 .605-.49 1.095-1.095 1.095a6.238 6.238 0 0 0-6.238 6.238v6.148c0 2.138 0 3.814.127 5.153.13 1.365.399 2.482 1.002 3.467a7.656 7.656 0 0 0 2.531 2.531c.985.604 2.103.873 3.467 1.002 1.339.127 3.015.127 5.153.127h4.105c2.138 0 3.814 0 5.153-.127 1.365-.13 2.482-.399 3.467-1.002a7.665 7.665 0 0 0 2.531-2.531c.604-.985.873-2.103 1.002-3.467.127-1.339.127-3.015.127-5.153v-6.148a6.238 6.238 0 0 0-6.238-6.238c-.605 0-1.095-.49-1.095-1.095v-.238A3.333 3.333 0 0 0 19.666.333h-7.333zM9.667 16.667a6.333 6.333 0 1 1 12.666 0 6.333 6.333 0 0 1-12.666 0zm14.333-4A1.333 1.333 0 1 1 24 10a1.333 1.333 0 0 1 0 2.667z" />
          </svg>
        </UserAvatarIcons>
      );
    case 'icon-user_delete':
      return (
        <CardIcons>
          <svg
            id="icon-user_delete"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M14 6h4a2 2 0 0 0-4 0zm-2 0a4.003 4.003 0 0 1 4-4 4.003 4.003 0 0 1 4 4h8a.997.997 0 0 1 1 1 .997.997 0 0 1-1 1h-1.128l-2.41 17.676A4.997 4.997 0 0 1 19.508 30h-7.016a5 5 0 0 1-4.954-4.324L5.128 8H4a.997.997 0 0 1-1-1 .997.997 0 0 1 1-1h8zm2 7a.997.997 0 0 0-1-1 .997.997 0 0 0-1 1v10a.997.997 0 0 0 1 1 .997.997 0 0 0 1-1V13zm5-1a.997.997 0 0 0-1 1v10a.997.997 0 0 0 1 1 .997.997 0 0 0 1-1V13a.997.997 0 0 0-1-1z" />
          </svg>
        </CardIcons>
      );
    case 'icon-user_plus':
      return (
        <PetsAddIcon>
          <svg
            viewBox="0 0 20 20 "
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M9 17V9M9 9V1M9 9H17M9 9H1" />
          </svg>
        </PetsAddIcon>
      );
    case 'icon-remove_avatar':
      return (
        <UserRemoveAvatar>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M25.5 49.166V25.5m0 0V1.833m0 23.667h23.667m-23.667 0H1.833" />
          </svg>
        </UserRemoveAvatar>
      );

    default:
      break;
  }
};
