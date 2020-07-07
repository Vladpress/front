import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "20px auto",
        textAlign: "center"
    },
    media: {
        height: 140,
    },
});

export default function Good ({ productName, salePrice, _id, img, history, openEditModal }) {
    const classes = useStyles();
    return (
        <div className="good">
            <Card className={classes.root}>
                <CardActionArea onClick={() => history.push(`/goods/${_id}`)}>
                    <CardMedia
                        style={{height: "360px", width: "350px"}} 
                        className={classes.media}
                        image={img || "../../img/1.png"} 
                        title="Good"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                            {productName && productName}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {salePrice}     
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton onClick={() => openEditModal( {productName, salePrice, img, _id })} aria-label="delete">
                        <EditIcon />
                    </IconButton>                    
                </CardActions>                
            </Card>
        </div>
    );
}

Good.propTypes = {   
    productName:PropTypes.string,
    salePrice: PropTypes.number,
    img:PropTypes.string,
  };


