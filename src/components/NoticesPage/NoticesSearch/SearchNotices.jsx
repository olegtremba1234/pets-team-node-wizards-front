import iconSearch from '../../SearchForm/images/searchIcon.svg';
import {
  Form,
  Input,
  Label,
  SearchBtn,
  IconSearch,
} from './SearchNotices.styled';

const SearchNotices = ({ onSubmit }) => {
  const onSubmitSearch = e => {
    e.preventDefault();
    onSubmit(e.target[0].value);
    e.target[0].value = '';
  };
  return (
    <Form onSubmit={onSubmitSearch}>
      <Label htmlFor="search">
        <Input type="text" name="search" id="search" placeholder="Search" />
        <SearchBtn>
          <IconSearch src={iconSearch} />
        </SearchBtn>
      </Label>
    </Form>
  );
};

export default SearchNotices;
