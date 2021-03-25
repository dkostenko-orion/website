import React from 'react';
import { Box, Link, ThemeUIStyleObject } from 'theme-ui';

export interface CallToActionImageProps {
  linkTo: string;
  linkText: string;
  image: any;
}

const styles: ThemeUIStyleObject = {
  ':hover': {
    cursor: 'pointer',
    '.linkText': {
      borderBottom: '2px solid',
    },
    '.img': {
      opacity: '.7',
      transition: '.5s',
    },
  },
  '.link': {
    color: 'text',
    textDecoration: 'none',
  },
  '.img': {
    transition: '.4s',
    width: '100%',
  },
};

const CallToActionImage: React.FC<{ data: CallToActionImageProps }> = ({
  data: { linkText, linkTo, image },
}) => {
  return (
    <Box sx={styles}>
      <Link className="link" href={linkTo}>
        <Box sx={{ mt: 4 }}>
          <img src={image} className="img" />
        </Box>
        <Box mt={1}>
          <span className="linkText">{linkText}</span>
        </Box>
      </Link>
    </Box>
  );
};

export default CallToActionImage;