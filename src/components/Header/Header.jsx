import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { Navigation, MobileNav } from 'components/Navigation/Navigation';
import { useWindowSize } from 'usehooks-ts';
import './header.scss';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { width } = useWindowSize();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div className={clsx('header', { sticky: scrolled })}>
      <div>
        <Link to="/">
          <h1 className={clsx('maintitle', { sticky: scrolled })}>PhoneBook</h1>
        </Link>
        {!scrolled && (
          <p className="subtitle">
            Module 8. Home work | <b>User SignUp and LogIn</b>
          </p>
        )}
      </div>
      {width > 480 ? <Navigation /> : <MobileNav />}
    </div>
  );
};
