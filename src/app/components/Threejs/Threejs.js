import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import './three.scss';
import { useState } from "react";
import { Html } from "@react-three/drei";
import Avo from '../../../assets/obj/Avo2';

const Threejs = (props) => {
    const [hello, setHello] = useState(false);

    const sayHello = () => {
        setHello(!hello);

        setTimeout(() => {
            setHello(false)
        }, 3000)
    }

    const isDarkMode = props.isDarkMode;

    return (
        <Canvas className="canvas"
            style={{
                background: `${isDarkMode ? 'linear-gradient(120deg, #3C3B3F 6%, #605C3C 100%)' :
                    'linear-gradient(120deg,#44b744 10%, #3da43f 100%)'}`
            }}>
            <Html center className='canvas-content' style={{
                left: '-300px',
            }}>
                <h1 className='title'>Jeremiah Celis</h1>
                <p className='subtitle'>Software Engineer</p>
                <p className='lead'>a 23-year-old Filipino from Pampanga. </p>
                <button type="button" className="btn btn-dark btn-lg" data-bs-toggle="modal" data-bs-target="#contactModal">Contact</button>
            </Html>
            <Suspense fallback={null}>
                <pointLight position={[8, -7, 10]} castShadow />
                <ambientLight intensity={0.3} />
                <Avo position={[2, -3.7, 0]} hello={hello} onClick={sayHello} scale={2} castShadow />
            </Suspense>
        </Canvas>
    );
}

export default Threejs;