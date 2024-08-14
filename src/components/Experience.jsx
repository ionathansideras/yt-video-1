import React from "react";
import { Canvas } from "@react-three/fiber";
import { Room } from "./Room";
import Controls from "./Controls";
import Lights from "./Lights";
import { Perf } from "r3f-perf";

export default function Experience() {
    return (
        <Canvas
            gl={{ logarithmicDepthBuffer: true, antialias: false }}
            dpr={[1, 1.5]}
            camera={{ position: [7, 1, -4], fov: 25 }}
            className="canvas"
            // shadows
        >
            <Perf />
            <Controls />
            <Lights />
            <Room
                rotation={[0, Math.PI / 5.5, 0]}
                scale={1.3}
                position={[2.16, -1.16, -1.3]}
                // receiveShadow
                // castShadow
            />
        </Canvas>
    );
}
