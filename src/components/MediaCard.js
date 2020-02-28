import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';






const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});







export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://statics-uestudio.uecdn.es/buhomag/2019/06/aladdin-accion-real-disney.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ALADIN
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            aladin are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>

      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>

      <CardActionArea>
      <CardMedia
          className={classes.media}
          image="https://ep01.epimg.net/cultura/imagenes/2019/07/22/actualidad/1563791717_146941_1563803892_noticia_normal_recorte1.jpg"
          title="Contemplative Repti"
        />
                <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            AVENGERS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            avengers are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>

     
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
   
      </CardActions>

    </Card>

    
  );
}