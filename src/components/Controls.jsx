import React from "react";
import { OrbitControls } from "@react-three/drei";

export default function Controls() {
    return (
        <OrbitControls
            enablePan={false}
            enableZoom={true}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.99}
            minDistance={0.1} // minimum zoom distance
            maxDistance={9.7} // maximum zoom distance
            minAzimuthAngle={Math.PI / 5} // restrict left rotation
            maxAzimuthAngle={-Math.PI / 0.87} // restrict right rotation
        />
    );
}
