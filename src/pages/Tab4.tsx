import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { Cartesian3, Ion, Viewer } from 'cesium';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Globe, { GlobeMethods, GlobeProps } from 'react-globe.gl';
import d3 from 'd3';
import Map from '../components/Map';
import Orbit from '../components/Orbit';
import Floor from '../components/Floor';

import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';
import Geometry from 'cesium/Source/Core/Geometry';
import Bulb from '../components/Bulb';
extend({ OrbitControls });

/**
 * create the square and ambientLight and Blub
 */
interface ContainerProps {
    props: any;
}
const Tab4: React.FC = () => {

    

    const Box: React.FC<ContainerProps> = ({ props }) => {
        const ref = useRef<any>();
        useFrame(state => {
            ref.current.rotation.x += 0.01;
            ref.current.rotation.y += 0.01;

        });

        return (
            <mesh ref={ref} {...props} castShadow receiveShadow>
                <boxBufferGeometry />
                <meshPhysicalMaterial color='red' />

            </mesh>
        )
    }





    return (
        <IonPage>
            <IonContent fullscreen>
                <div style={{ height: '100vh', width: '100vw' }}>
                    <Canvas style={{ background: 'black' }} camera={{position: [3,3,3]}}>

                        <ambientLight intensity={0.2}/>
                        <Bulb />
                        <Orbit />
                        <axesHelper args={[5]}/>
                        <Box props={[-1,1,2]}/>
                        <Floor props={[0,-0.5,0]}/>
                    </Canvas>
                </div>
            </IonContent>







        </IonPage>
    );
};

export default Tab4;
