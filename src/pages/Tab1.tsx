import {IonPage} from '@ionic/react';
import {Entity, Viewer} from 'resium';
import './Tab1.css';
import {Cartesian3, Color, Ion} from "cesium";
import {Tab1Props} from "../App";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMGFjYTVjNC04OTJjLTQ0Y2EtYTExOS1mYzAzOWFmYmM1OWQiLCJpZCI6MjA4OTksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1Nzg1MzEyNjF9.KyUbfBd_2aCHlvBlrBgdM3c3uDEfYyKoEmWzAHSGSsk';

const Tab1: React.FC<Tab1Props> = (props) => {
    return (
        <IonPage>
            <Viewer full>
                <Entity
                    name="Madsen Building"
                    description="The University of Sydney"
                    point={{ pixelSize: 20, color: Color.FUCHSIA }}
                    position={Cartesian3.fromDegrees(151.189422, -33.888688, 100)}
                />
                <tbody>
                {props.points?.coordinates?.map((point, i) =>
                    <Entity
                        key={'point_' + i}
                        name={'Point ' + i}
                        point={{ pixelSize: 20, color: Color.fromRandom({
                                alpha: 1,
                                minimumRed: 0.1,
                                minimumGreen: 0.1,
                                minimumBlue: 0.1,
                        })}}
                        position={Cartesian3.fromDegrees(point[0], point[1], 100)}
                    />
                )}
                </tbody>
            </Viewer>
        </IonPage>
    );
};


export default Tab1;
