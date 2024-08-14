import React from "react";

export default function Lights() {
    return (
        <>
            <hemisphereLight intensity={0.5} />
            <group position={[-2.5, 0.6, -2.8]}>
                <pointLight
                    intensity={1}
                    distance={5}
                    decay={1}
                    position={[0, 1, 0]}
                    // shadow-bias={-0.001}
                    // shadow-radius={20}
                    // shadow-mapSize-width={1024}
                    // shadow-mapSize-height={1024}
                    // castShadow
                />
            </group>

            <group position={[1.1, 1.85, -1.95]}>
                <pointLight
                    intensity={4}
                    distance={10}
                    decay={1}
                    // shadow-mapSize-width={1024}
                    // shadow-mapSize-height={1024}
                    // shadow-bias={-0.001}
                    // shadow-radius={20}
                    // castShadow
                />
            </group>
        </>
    );
}
