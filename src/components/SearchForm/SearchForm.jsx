import iconSearch from '../SearchForm/images/searchIcon.svg';
import { Form, Input, Label, SearchBtn, IconSearch } from './SearchForm.styled';

const SearchForm = ({ onSubmit, onChange, value }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="search">
        <Input
          type="text"
          name="query"
          id="search"
          placeholder="Search"
          value={value}
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
