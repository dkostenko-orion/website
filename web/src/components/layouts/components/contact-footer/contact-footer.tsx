import { Container } from '@theme-ui/components';
import React from 'react';
// import ReactPlayer from 'react-player/lazy';
import {
  Box,
  Heading,
  Image,
  Input,
  Label,
  ThemeUIStyleObject,
} from 'theme-ui';
// import Video from '../../../../../static/Bjerk.mp4';
import Button from '../../../button';
// import { PlayButton } from './play-button';

const styles: ThemeUIStyleObject = {
  mb: 0,
  px: [4, 4, 6],
  maxWidth: '1920px',
  backgroundColor: '#393E46',
  mx: 'auto',
  '.container': {
    mt: 5,
    pt: '12%',
    pb: ['12%', '12%', 0],
    px: 0,
    height: '100%',
    '.form': {
      '.header': {
        color: 'white',
        fontSize: 60,
        fontWeight: '500',
      },
      '.label': {
        mb: 4,
        mt: 1,
        color: 'white',
        fontSize: 24,
      },
      '.input': {
        mb: 3,
        background: '#232931',
        color: 'white',
        border: 'none',
        px: 4,
        py: 3,
      },
      '.button': {
        mt: 4,
      },
    },
    '.video': {
      // position: 'relative',
      height: '80%',
      width: '100%',
      maxHeight: '700px',
      overflow: 'hidden',
      alignItems: 'end',
      justifyContent: 'center',
      backgroundColor: 'black',
      display: ['none', 'none', 'block'],
    },
    '.mobile-video': {
      position: 'relative',
      height: '83vw',
      width: '83vw',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'end',
      textAlign: 'center',
      backgroundColor: 'black',
      display: ['block', 'block', 'none'],
    },
    '.input': {
      mb: 3,
      background: '#232931',
      color: 'white',
      border: 'none',
      px: 4,
      py: 3,
      borderRadius: '10px',
    },
    '.button': {
      mt: 4,
      py: '15px',
    },
  },
};

const ContactFooter: React.FC = () => {
  return (
    <Box sx={styles}>
      <Container className="container">
        <Box
          sx={{
            display: 'grid',
            gridGap: 6,
            gridTemplateColumns: ['none', 'none', '4fr 5fr'],
            gridTemplateRows: ['2fr 3fr', '2fr 3fr', 'none'],
            alignItems: 'start',
            pt: 0,
          }}
        >
          <Box className="mobile-video">
            <Image src={'../SimenPhoto.png'} />
            {/* <ReactPlayer
              url={Video}
              playing={true}
              controls={true}
              playIcon={<PlayButton />}
              light="../SimenPhoto.png"
              volume={0}
              width="83vw"
              height="83vw"
              style={{
                position: 'relative',
                margin: 'auto',
                zIndex: 2,
              }}
            /> */}
          </Box>
          <Box className="form">
            <Heading className="header">Si hei!</Heading>
            <Label className="label">
              Snakk med oss om ditt prosjekt, så hjelper vi deg fra start til
              mål.
            </Label>
            <Input className="input" placeholder="Fullt navn" />
            <Input className="input" placeholder="E-postadresse" />
            <Input className="input" placeholder="Prosjektbeskrivelse" />
            <Input className="input" placeholder="Budsjett" />
            <Button className="button" href="/contact">
              Start ditt prosjekt
            </Button>
          </Box>
          <Box className="video">
            <Image src={'../SimenPhoto.png'} />
            {/* <ReactPlayer
              url={Video}
              playing={true}
              controls={true}
              playIcon={<PlayButton />}
              light="../SimenPhoto.png"
              volume={0}
              width="60vh"
              height="60vh"
              style={{
                position: 'relative',
                margin: 'auto',
                zIndex: 2,
              }}
            /> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactFooter;
