import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Box, Container, SystemStyleObject } from 'theme-ui';

interface IntroVideoProps {
  videoUrl?: string;
  videoTitle?: string;
}

const style: SystemStyleObject = {
  '.main-video-container': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    maxHeight: '1000px',
    '.video-container': {
      position: 'relative',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: -99,
      paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */,
      '&::after': {
        display: 'block',
        content: '"" !important',
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        maxHeight: '800px',
        zIndex: 1,
        backgroundColor: 'dark',
        opacity: 0.5,
      },
    },
  },
  '.data-container': {
    minHeight: '3rem',
    fontSize: 5,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    height: '50rem',
    fontWeight: 'bold',
    display: 'flex',
    textAlign: 'start',
    verticalAlign: 'center',
    color: 'background',
    px: [5, 5, 6],
    paddingTop: '10%',
  },
};

const IntroVideo: React.FC<{ data: IntroVideoProps }> = ({
  children,
  data,
}) => (
  <Container sx={style}>
    <Box className="main-video-container">
      <Box className="video-container">
        <ReactPlayer
          url={data.videoUrl}
          playing={true}
          loop={true}
          controls={false}
          volume={0}
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    </Box>
    <Container className="data-container">
      <Box sx={{ my: '32%', width: '60%', zIndex: 2 }}>{children}</Box>
    </Container>
  </Container>
);

export default IntroVideo;
