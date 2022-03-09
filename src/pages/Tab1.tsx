import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

//import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3 ,Ion, Viewer} from 'cesium';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMGFjYTVjNC04OTJjLTQ0Y2EtYTExOS1mYzAzOWFmYmM1OWQiLCJpZCI6MjA4OTksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1Nzg1MzEyNjF9.KyUbfBd_2aCHlvBlrBgdM3c3uDEfYyKoEmWzAHSGSsk';

const Tab1: React.FC = () => {
  useIonViewDidEnter(() => {
    var viewer = new Viewer('cesiumContainer');
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
