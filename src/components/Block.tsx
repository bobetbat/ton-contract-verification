import React from 'react';
import { TextareaAutosize, Input, Button, Card, Typography, CardHeader, CardActions, CardContent } from '@mui/material';


type Props = {
  children?: React.ReactNode;
  title?: React.ReactNode;
};

const Block: React.FC<Props> = ({ }) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        <Typography> Verify</Typography>

        <Input type='text' placeholder='Contract address' />
        <TextareaAutosize
          // maxRows={4}
          aria-label="maximum height"
          placeholder="Contract code"
          //   defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          // ut labore et dolore magna aliqua."
          style={{ width: '100%', minHeight: '40vh' }}
        />
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={() => { }}>Verify</Button>
      </CardActions>
    </Card>
  );
}

export default Block;
