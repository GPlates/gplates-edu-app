import {IonPage} from '@ionic/react';
import {Entity, Viewer} from 'resium';
import './Tab1.css';
import {Cartesian3, Color, Ion} from "cesium";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMGFjYTVjNC04OTJjLTQ0Y2EtYTExOS1mYzAzOWFmYmM1OWQiLCJpZCI6MjA4OTksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1Nzg1MzEyNjF9.KyUbfBd_2aCHlvBlrBgdM3c3uDEfYyKoEmWzAHSGSsk';

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <Viewer full>
                <Entity
                    name="Madsen Building"
                    description="The University of Sydney"
                    point={{ pixelSize: 20, color: Color.FUCHSIA }}
                    position={Cartesian3.fromDegrees(151.189422, -33.888688, 100)}
                />
            </Viewer>
        </IonPage>
    );
};


export default Tab1;
