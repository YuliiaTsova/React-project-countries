import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  background-color: var(--color-ui-base);
  border-radius: var(--radii);
  box-shadow: var(--shadow);

  @media (min-width: 767px) {
    width: 280px;
    margin-bottom: 0;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--color-ui-base);
  color: var(--color-text);
  &::placeholder {
    color: var(--placeholder);
    font-size: 14px;
  }
`;

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="type the country"
      ></Input>
    </InputContainer>
  );
};
