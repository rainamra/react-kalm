import React from "react";
import ReactPlayer from "react-player";
import { Card } from "react-bootstrap";

function VideoSelection({ youtubeURL, theme, description, status }) {
  return (
    <>
    <Card
    bg={status === true ? 'info' : 'light'}
    text={status === true ? 'white' : 'dark'}
    >
        <ReactPlayer
        width="100%"
        height="180px"
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onPlay={() => console.log('onPlay callback')}
        onEnded={() => console.log('onEnded callback')}
        url={youtubeURL}
      />
        <Card.Body>
        <Card.Title>{theme}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        </Card.Body>
    </Card>
    </>
  );
}

export default VideoSelection;
