import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState, useEffect, useRef } from 'react'
import './Tab2.css';



const Tab2: React.FC = () => {
  /**
   * use setcoordinate and setdatatype to store the response from the url in getcoordinates function
   * use listItem container to show the coordinate and data type from the url
   */
  const [coordinate, setCoordinate] = useState([]);
  const [dataType, setDataType] = useState("");



  const getCoordinates = () => {
    var url = "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140&model=SETON2012";
    fetch(url, { method: "GET" }).then(response => response.json()).then(function (data) {
      console.log(data);

      console.log(data.type);
      console.log(data.coordinates);
      setCoordinate(data.coordinates);
      setDataType(data.type)


    });
   


  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small" >Tab 2</IonTitle>
          </IonToolbar>

        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonButton shape="round" className="tabButton" onClick={getCoordinates}>Get coordinates</IonButton>

        <IonList>
          <IonItem key={dataType}>
            <IonLabel class="ion-text-center">data type: {dataType}</IonLabel>

          </IonItem>
          {coordinate.map(point => (
            <IonItem key={point}>
              <IonLabel class="ion-text-center">{point[0]}, {point[1]}</IonLabel>
            </IonItem>
          ))}
        </IonList>


      </IonContent>

    </IonPage>


  );
};

export default Tab2;
