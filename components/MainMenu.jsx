import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const MainMenu = ({ title }) => (
  <header className="bg-blue-500 p-4">
    <Link href="/">
      <button type="button" className="text-white text-xl font-semibold">
        {title}
      </button>
    </Link>
  </header>
);

MainMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainMenu;
