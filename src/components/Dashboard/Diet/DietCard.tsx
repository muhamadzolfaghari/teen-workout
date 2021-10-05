import Card, { CardProps } from '@mui/material/Card';
import { Avatar, CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import IFood from '../../../interface/IFood';

interface IProps extends CardProps {
  item: IFood;
}

const DietCard = ({ item, onClick }: IProps) => (
  <Card elevation={0} onClick={onClick} sx={{ borderRadius: 0 }}>
    <CardActionArea>
      <CardHeader
        title={<Typography variant={'h6'}>{item.name}</Typography>}
        avatar={
          <Avatar
            src={process.env.REACT_APP_API_BASE_URL + item.image}
            variant={'rounded'}
            sx={{ height: 64, width: 64 }}
          />
        }
      />
    </CardActionArea>
  </Card>
);

export default DietCard;
