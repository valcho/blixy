// import { graphql, useStaticQuery, Link } from "gatsby";
import { Link } from "gatsby";
import React, { useState } from "react";

import logo from "../images/blixy_logo.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header className="bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-screen-lg p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-purple-800 no-underline">
            <img src={logo} className="h-16 w-auto" />
            {/* <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span> */}
          </h1>
        </Link>

        <button className=" inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-3 md:text-lg">
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5 text-white mr-2">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          0878 467 570
        </button>

        {/* <button
          className="items-center block px-3 py-2 text-teal-600 border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button> */}

        {/* <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/prices`,
              title: `Цени`,
            },
            {
              route: `/gallery`,
              title: `Галерия`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-purple-800 text-xl no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav> */}
      </div>
    </header>
  );
}

export default Header;
