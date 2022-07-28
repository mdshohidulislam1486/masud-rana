import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import './experience.css';

const myExperience = [
  {
    id: 1,
    companyName: 'Benchmark Software',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit cum repudiandae laboriosam, numquam autem similique quod quibusdam tempora nostrum quo?',
    img: 'https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?cs=srgb&dl=pexels-jopwell-2422286.jpg&fm=jpg',
    others: 'no issue found',
  },
  {
    id: 2,
    companyName: 'Benchmark Software',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit cum repudiandae laboriosam, numquam autem similique quod quibusdam tempora nostrum quo?',
    img: 'https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?cs=srgb&dl=pexels-jopwell-2422286.jpg&fm=jpg',
    others: 'no issue found',
  },
  {
    id: 3,
    companyName: 'Benchmark Software',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit cum repudiandae laboriosam, numquam autem similique quod quibusdam tempora nostrum quo?',
    img: 'https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?cs=srgb&dl=pexels-jopwell-2422286.jpg&fm=jpg',
    others: 'no issue found',
  },
];

const Experience = () => {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', marginTop: '5em' }}>
        <Box sx={{ maxWidth: '50%', margin: '0 auto' }}>
          <Typography
            variant="h2"
            sx={{ color: '#e94e00a2', wordBreak: 'break-all' }}
          >
            Experiences
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, .7)' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit cum
            repudiandae laboriosam, numquam autem similique quod quibusdam
            tempora nostrum quo?
          </Typography>
        </Box>
      </Box>
      <Container sx={{ marginTop: '4em' }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {myExperience.map((exp) => (
            <Card
              className="card-custom-body"
              key={exp.id}
              sx={{ maxWidth: 345, margin: ' 1em' }}
            >
              <CardMedia
                component="img"
                height="140"
                image={exp.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {exp.companyName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {exp.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: '#e94e00' }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
