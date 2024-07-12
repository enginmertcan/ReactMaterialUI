import React from 'react';
import { Link, Box } from '@mui/material';

export const LessonLink = () => {
  return (
    <Box>
      {/* <Link href="https://github.com/enginmertcan">GitHub</Link>
      <Link href="https://github.com/enginmertcan" color="error">
        GitHub
      </Link>
      <Link href="https://github.com/enginmertcan" color="error" variant="body2">
        GitHub
      </Link> */}

      <Link href="https://github.com/enginmertcan" underline="none">
        GitHub
      </Link>
      <Link href="https://github.com/enginmertcan" underline="hover">
        GitHub
      </Link>
      <Link href="https://github.com/enginmertcan" underline="always">
        GitHub
      </Link>

      <Link
        href="https://github.com/enginmertcan"  onClick={() => {
          console.log('Can');
        }}
      >
        GitHub
      </Link>
    </Box>
  );
};
