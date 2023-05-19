import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoArrowUp } from 'react-icons/io5';

const JumpUpBlock = styled.div`
  position: fixed;
  right: 90px;
  bottom: 70px;
  width: 40px;
  height: 40px;
  background-color: #95b2e1;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;

export const JumpUp = () => {
  const [up, setUp] = useState(false);
  const goUp = () => {
    window.scrollTo(0, 0);
    setUp(false);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 1000) {
      setUp(true);
    } else {
      setUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!up) {
    return null;
  }
  return (
    <JumpUpBlock onClick={goUp}>
      {' '}
      <IoArrowUp />{' '}
    </JumpUpBlock>
  );
};
