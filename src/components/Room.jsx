import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export const Room = (props) => {
    const { scene } = useGLTF("/models/optimized.glb");

    // useEffect(() => {
    //     scene.traverse((object) => {
    //         if (object.isMesh) {
    //             object.castShadow = true;
    //             object.receiveShadow = true;
    //         }
    //     });
    // }, [scene]);

    return <primitive object={scene} {...props} />;
};
