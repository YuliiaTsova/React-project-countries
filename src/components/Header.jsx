import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: felx;
  justify-content: space-between;
  align-items: center;
  padding 2rem 0;
`;
const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;
const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
  cursor: pointer;
`;

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}

            <span style={{ marginLeft: '0.75rem' }}> {theme} theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
