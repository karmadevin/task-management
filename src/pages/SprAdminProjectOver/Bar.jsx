import React, { useState, useEffect } from 'react';
import { CircularProgress, Container, Typography } from '@mui/material';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 10);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <Container style={{ textAlign: 'center', marginTop: '10px', position: 'relative'}}>
      <div >
        <CircularProgress
          variant="determinate"
          value={progress}
          size={100}
          thickness={4}
          sx={{ color: (theme) => theme.palette.primary.main}}
        />
        <Typography
          variant="h6"
          style={{
            position: 'absolute',
            top: '48%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
            color: (theme) => theme.palette.primary.main,
          }}
        >
          {`${progress}%`}
        </Typography>
      </div>
    </Container>
  );
}

export default App;
