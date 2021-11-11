import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://imgd.aeplcdn.com/393x221/n/cw/ec/1/versions/bajaj-pulsar-f250-standard.jpg?q=85',
  },
  {
    label: 'Bird',
    imgPath:
      'https://imgd.aeplcdn.com/393x221/bw/models/bajaj-pulsar-rs-200-bs-vi20200402124559.jpg?q=85',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://imgd.aeplcdn.com/393x221/n/cw/ec/106487/right-front-three-quarter.jpeg?isig=0&q=85',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://imgd.aeplcdn.com/393x221/bw/models/bajaj-pulsar-ns200-bs-vi20200211173001.jpg?q=85',
  },
];

function HomeSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

 

  

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
         
     
          bgcolor: 'background.default',
        }}
      >
       
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 355,
                  display: 'block',
             
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    
    </Box>
  );
}

export default HomeSlider;
