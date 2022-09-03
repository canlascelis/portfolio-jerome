/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/avo2.glb')
  const { actions } = useAnimations(animations, group)
  const sayHello = props.hello;

  useEffect(() => {
    if (sayHello) {
      actions.hello.fadeIn(0.3).play();
    } else {
      actions.hello.stop();
    }
  }, [sayHello]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Light" position={[4.08, 5.9, -1.01]} rotation={[1.89, 0.88, -2.05]} />
        <group name="Camera" position={[-4.72, 7.91, 13.76]} rotation={[1.19, -0.13, 0.31]} />
        <group name="Armature" position={[0, 2.08, 0]} rotation={[-0.24, 0, 0]}>
          <primitive object={nodes.Bone} />
          <skinnedMesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.arms} skeleton={nodes.Cylinder001.skeleton} />
        </group>
        <group name="Area" position={[0, 5.01, 0]} />
        <group name="Area001" position={[4.16, 4.39, 2.07]} rotation={[0, -0.53, -1.02]} />
        <group name="Area002" position={[0, 2.08, 0]} />
{/*         <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.001']} scale={20.18} receiveShadow /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/avo2.glb')
