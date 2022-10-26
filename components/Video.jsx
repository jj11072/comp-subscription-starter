import React, { useState, useRef, useEffect } from 'react';
import Container from './Container';

function Video({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    // if (isPlaying) {
    //   console.log('Calling video.play()');
    //   ref.current.play();
    // } else {
    //   console.log('Calling video.pause()');
    //   ref.current.pause();
    // }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline controls />;
}

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap lg:w-120  items-center justify-center">
        {/* <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
        <Video
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </Container>
    </>
  );
}
