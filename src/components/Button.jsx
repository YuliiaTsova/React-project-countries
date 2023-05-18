import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: none;
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  gap: 0.75rem;
  color: var(--color-text);
  cursor: pointer;
`;
