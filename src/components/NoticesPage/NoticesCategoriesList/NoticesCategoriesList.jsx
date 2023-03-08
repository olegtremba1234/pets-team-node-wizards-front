import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { NoticeList } from './NoticesCategoriesList.styled';

export default function NoticesCategoriesList({ notices }) {
  return (
    <NoticeList>
      {notices &&
        notices.map(
          ({ title, breed, location, birthday, photoURL, category, id }) => (
            <NoticeCategoryItem
              key={id}
              title={title}
              breed={breed}
              location={location}
              birthday={birthday}
              photoURL={photoURL}
              category={category}
            />
          )
        )}
    </NoticeList>
  );
}
