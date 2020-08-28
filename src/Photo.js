import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import homeImg from './assets/images/zack.jpeg';


export default function Photo() {
  return (
    <React.Fragment>
    <CardMedia>
      <img src={homeImg} width="100%" alt="recipe thumbnail"/>
    </CardMedia>
    </React.Fragment>
  );
}
