import React from 'react';
import Container from './Container';

function Video({ src }) {
  return <video src={src} loop playsInline controls autoPlay='true'/>;
}

export default function VideoPlayer() {
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap lg:w-120  items-center justify-center">
        <Video
          src="tech.mp4"
        />
      </Container>
    </>
  );
}
