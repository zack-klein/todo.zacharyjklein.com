import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import gcloudImg from './assets/images/power-by-cloud.png';


export default function GCloudPhoto() {
  return (
    <React.Fragment>
    <CardMedia>
      <img src={gcloudImg} width="100%" alt="recipe thumbnail"/>
    </CardMedia>
    </React.Fragment>
  );
};
