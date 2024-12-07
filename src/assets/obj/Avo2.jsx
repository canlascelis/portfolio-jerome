/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 avo2.glb --transform 
Files: avo2.glb [516.67KB] > C:\Users\celis\Documents\Projects\portfolio-jerome\public\avo2-transformed.glb [66.46KB] (87%)
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/avo2-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, 2.081, 0]} rotation={[-0.243, 0, 0]}>
          <primitive object={nodes.Bone} />
        </group>
        <group name="Area002" position={[0, 2.081, 0]} />
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.PaletteMaterial003} scale={30.181} />
        <skinnedMesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Cylinder001.skeleton} position={[0, 2.081, 0]} rotation={[-0.243, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('../../../public/avo2-transformed.glb')