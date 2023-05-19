import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoArrowUp } from 'react-icons/io5';

const JumpUpBlock = styled.div`
  position: fixed;
  right: 1%;
  bottom: 70px;
  width: 60px;
  height: 60px;
  background-color: RGBA(255, 0, 0, 0.6);
  border-radius: 50%;
  color: #ffffff;
  text-align: center;
  line-height: 90px;
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
      <IoArrowUp size={40} />
    </JumpUpBlock>
  );
};
