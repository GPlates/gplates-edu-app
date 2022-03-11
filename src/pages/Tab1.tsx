import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import { Cartesian3 ,Ion, Viewer, HorizontalOrigin, VerticalOrigin, DistanceDisplayCondition, Color} from 'cesium';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMGFjYTVjNC04OTJjLTQ0Y2EtYTExOS1mYzAzOWFmYmM1OWQiLCJpZCI6MjA4OTksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1Nzg1MzEyNjF9.KyUbfBd_2aCHlvBlrBgdM3c3uDEfYyKoEmWzAHSGSsk';



const Tab1: React.FC = () => {

  useIonViewDidEnter(() => {
    var viewer = new Viewer('cesiumContainer');

    var AustraliaPin = viewer.entities.add({
      name: 'Australia',
      position: Cartesian3.fromDegrees(151.194191, -34.035875,1000),
      point: {
        color: Color.YELLOW,
        pixelSize: 10
      },
      label: {
        text: 'Sydney',
        horizontalOrigin: HorizontalOrigin.CENTER,
        verticalOrigin: VerticalOrigin.BOTTOM,
      }
    })
    viewer.flyTo(AustraliaPin)

  });

  return (
    <IonPage>

      <IonContent fullscreen>
        <div id="cesiumContainer" ></div>
      </IonContent>

    </IonPage>   
  );
};


export default Tab1;
