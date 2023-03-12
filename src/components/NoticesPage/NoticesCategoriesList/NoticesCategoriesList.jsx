import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { NoticeList } from './NoticesCategoriesList.styled';

export default function NoticesCategoriesList({ notices }) {
  return (
    <NoticeList>
      {notices &&
        notices.map(
          ({
            title,
            breed,
            location,
            birthday,
            petPhotoURL,
            category,
            id,
            isOwn,
            isFavorite,
            price,
          }) => (
            <NoticeCategoryItem
              key={id}
              title={title}
              breed={breed}
              location={location}
              birthday={birthday}
              petPhotoURL={petPhotoURL}
              category={category}
              id={id}
              isOwn={isOwn}
              isFavorite={isFavorite}
              price={price}
            />
          )
        )}
    </NoticeList>
  );
}
