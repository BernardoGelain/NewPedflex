import { useEffect, useRef, useState } from 'react';
import { HeaderContent, NavContainer } from './HomeSellerHeader.styles';
import { HomePageButton } from '@/components/HomeButton/HomeButton';

type Props = {
  logo?: string;
};
export default function HomeSellerHeader({ logo }: Props) {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        const { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <>
      <NavContainer isNavbarVisible={isNavbarVisible}>
        <HeaderContent>
          <img
            src="assets/click-dismelo-logo.png"
            alt="Logo"
            style={{ width: '120px' }}
          />
          <HomePageButton
            title="Acesso cliente"
            icon="assets/user.png"
            variant="outlined"
          />
        </HeaderContent>
      </NavContainer>
    </>
  );
}
