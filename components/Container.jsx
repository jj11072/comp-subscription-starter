import React from 'react';

export default function Container(props) {
  return (
    <section
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </section>
  );
}
