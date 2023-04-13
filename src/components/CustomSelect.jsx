import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (defaultStyles) => ({
      ...defaultStyles,
      padding: '0.25rem',
      height: '50px',
      border: 'none',
      borderRadius: 'var(--radii)',
      backgroundColor: 'var(--color-ui-base)',
      boxShadow: 'var(--shadow)',
      color: 'var(--color-text)',
    }),
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      cursor: 'pointer',
      backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui-base)',
      color: 'var(--color-text)',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: 'var(--placeholder)',
      fontSize: '14px',
    }),
    singleValue: (defaultStyles) => ({
      //selected option
      ...defaultStyles,
      color: 'var(--color-text)',
    }),
    valueContainer: (defaultStyles) => ({
      //selected option
      ...defaultStyles,
      paddingLeft: '0.75rem',
    }),
    menu: (defaultStyles) => ({
      //dropdown options
      ...defaultStyles,
      backgroundColor: 'var(--color-ui-base)',
      boxShadow: 'var(--shadow)',
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      '&:hover': { color: 'var(--controls)' },
    }),
    clearIndicator: (defaultStyles) => ({
      ...defaultStyles,
      '&:hover': { color: 'var(--controls)' },
    }),
  },
})`
  width: 200px;

  border: none;
  border-radius: var(--radii);
  font-family: var(--family);
  & > * {
    color: 'var(--color-text)';
  }
  & input {
  }
`;
