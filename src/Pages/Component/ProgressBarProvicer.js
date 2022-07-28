import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReviewsProvider from './CircleProvider';

const ProgressBarProvicer = (props) => {
  const { score } = props;

  //function fo calculation the color
  const calcColor = (percent, start, end) => {
    let a = percent / 100,
      b = (end - start) * a,
      c = b + start;

    return 'hsl(' + c + ', 100%, 50%)';
  };
  return (
    <CircularProgressbar
      value={score}
      text={`${score} %`}
      circleRatio={1}
      styles={{
        trail: {
          strokeLinecap: 'butt',
          transform: 'rotate(-126deg)',
          transformOrigin: 'center center',
        },
        path: {
          strokeLinecap: 'butt',
          transform: 'rotate(-126deg)',
          transformOrigin: 'center center',
          stroke: calcColor(score, 0, 120),
        },
        text: {
          fill: '#dddd',
        },
      }}
      strokeWidth={10}
    />
  );
};

export default ProgressBarProvicer;
