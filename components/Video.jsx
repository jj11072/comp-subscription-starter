import React, { useState, useRef, useEffect } from 'react';
import Container from './Container';

function Video({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline controls />;
}

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap lg:w-120  items-center justify-center">
        <Video
          isPlaying={isPlaying}
          src="tech.mp4"
        />
      </Container>
    </>
  );
}
