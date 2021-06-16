//by Rayhan Ali Darmawan
import React from 'react';

const BackgroundVideo = ({ videoSource, children, blur }) => {

  return (
    <>
        <video
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay="autoplay"
          loop="loop"
          muted
          id="video-id"
          className='video' >
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        {children}
    </>
  )
}

export default BackgroundVideo