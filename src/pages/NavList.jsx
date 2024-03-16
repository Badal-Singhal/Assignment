// NavList.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavList() {
  const LINK = [
    {
      text: 'Sign in',
      to: '/',
    },
    {
      text: 'Join in',
      to: '/Joinin',
    },
  ];

  return (
    <div className="navList">
      <ul>
        {LINK.map((item, index) => (
          <li key={index}>
            <NavLink
              exact
              to={item.to}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
