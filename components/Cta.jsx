import React from 'react';
import Container from './Container';

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-black dark:text-white bg--600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Sign up for our <span className="text-purple-600">newsletter</span>
          </h2>
          <p className="mt-2 font-medium text-opacity-90 lg:text-xl">
            Get the latest news and updates from our team.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href=""
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-purple-600 bg-gray-200 dark:bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Sign up
          </a>
        </div>
      </div>
    </Container>
  );
}
