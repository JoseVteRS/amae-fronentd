import { useState, useEffect } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

const BREAKPOINTS: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const useResponsiveMenu = (
  mobileMenu: React.ReactNode,
  desktopMenu: React.ReactNode,
  breakpoint: Breakpoint = 'md'
) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < BREAKPOINTS[breakpoint];

  return isMobile ? mobileMenu : desktopMenu;
};


export const useResponsive = (
  breakpoint: Breakpoint = 'md'
) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth < BREAKPOINTS[breakpoint];

};