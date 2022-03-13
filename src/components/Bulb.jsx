import { useEffect, useRef } from 'react'
import { useThree } from 'react-three-fiber'

const Bulb = props => {
    // const ref = useRef()
    // const { scene } = useThree()
    // useEffect(() => {
    //     if (scene.lights) scene.lights.push(ref)
    //     else scene.lights = [ref]
    // }, [])
    return (
        <mesh {...props}>
            <pointLight castShadow/>
           <sphereBufferGeometry args={[0.2, 10, 10]}/>
           <meshPhongMaterial emissive='red'/>
        </mesh>
    )
}

export default Bulb;
