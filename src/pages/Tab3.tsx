import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { Cartesian3 ,Ion, Viewer} from 'cesium';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import Globe, {GlobeMethods, GlobeProps} from  'react-globe.gl';
import d3 from 'd3';
import Map from '../components/Map';

const Tab3: React.FC = () => {
  
  
   
  

    

   
  

  // useIonViewDidEnter(() => {
  //   var viewer = new Viewer('cesiumContainer');
  // });
  return (
    <IonPage>
     <IonContent fullscreen>
     <div className="App">
     <Map id="e691172598f04ea8881cd2a4adaa45ba" />
     </div>

      </IonContent>

     



        
      
    </IonPage>
  );
};

export default Tab3;
