import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { accounting } from 'accounting';
import { Link } from 'react-router-dom';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Item ({product: {id, name, category, price, rating, image, description}},products) {
  const [expanded, setExpanded] = React.useState(false);

  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        action={
            <Typography
          className={''}
          variant='h5'
          color={'textSecondary'}>
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="en Stock"
      />
      <Link to={'/item/' + products.id}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="cel iphone"
      /></Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="share">
            <AddShoppingCartIcon></AddShoppingCartIcon>
          </IconButton>
     {Array(rating)
     .fill()
     .map((_,i)=> (
        <p key={i}>&#11088;</p>
      ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
    
  );
}