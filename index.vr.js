import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import { LiveTour } from 'live-tour-lab';


export default class cps_lab_tour extends React.Component {
  render() {
    return (
      <LiveTour tourURI='hello-world.json' />
    );
  }
};

AppRegistry.registerComponent('cps_lab_tour', () => cps_lab_tour);
