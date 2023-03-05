import iconSearch from '../SearchForm/images/searchIcon.svg';
import { Form, Input, Label, SearchBtn, IconSearch } from './SearchForm.styled';

const SearchForm = ({ onSubmit, onChange}) => {

  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="search">
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={onChange}
        />
        <SearchBtn>
          <IconSearch src={iconSearch} />
        </SearchBtn>
      </Label>
    </Form>
  );
};

export default SearchForm;
