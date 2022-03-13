

const Floor = props => {
   // const [ref, api] = useBox(() => ({args: [20,1,10], ...props}))
    return (
        <mesh {...props} receiveShadow>
            <boxBufferGeometry args={[200, 1, 200]} />
            <meshPhysicalMaterial color={'black'} opacity={1}/>
        </mesh>
    )
}

export default Floor;