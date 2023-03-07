import iconSearch from '../SearchForm/images/searchIcon.svg';
import iconClose from '../SearchForm/images/x-circle.svg';
import {
  Form,
  Input,
  Label,
  SearchBtn,
  IconSearch,
  CloseBtn,
  IconClose,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit, onChange, value, onClose, isHiden }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="search">
        <Input
          type="text"
          name="search"
          id="search"
          value={value}
          placeholder="Search"
          onChange={onChange}
        />
        {!isHiden ? (
          <SearchBtn disabled={!value}>
            <IconSearch src={iconSearch} />
          </SearchBtn>
        ) : (
          <CloseBtn type="button" onClick={onClose}>
            <IconClose src={iconClose} />
          </CloseBtn>
        )}
      </Label>
    </Form>
  );
};

export default SearchForm;
