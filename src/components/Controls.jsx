import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767.98px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const optionSelect = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState();
  const [region, setRegion] = useState();

  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);
  }, [search, region]);
  // debugger;
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect options={optionSelect} placeholder="Filter by Region" isClearable isSearchable={false} value={region} onChange={setRegion} />
    </Wrapper>
  );
};
