import * as Babylon from 'babylonjs';
import { scene } from './scene';

//Constants
const mass: number = 1;
const restitution: number = 0.9;

export function makeCube( size: number, position: Babylon.Vector3 ) : Babylon.Mesh {
    const cube: Babylon.Mesh = Babylon.MeshBuilder.CreateBox(
        'cube',
        { size: size },
    );
    cube.position = position;

    cube.physicsImpostor = new Babylon.PhysicsImpostor(
        cube,
        Babylon.PhysicsImpostor.BoxImpostor,
        { mass: mass, restitution: restitution },
        scene
    )

    return cube;
}

export function makeSphere( size: number, position: Babylon.Vector3 ) : Babylon.Mesh {
    const cube: Babylon.Mesh = Babylon.MeshBuilder.CreateSphere(
        'sphere',
        { diameter: size },
    );
    cube.position = position;

    cube.physicsImpostor = new Babylon.PhysicsImpostor(
        cube,
        Babylon.PhysicsImpostor.SphereImpostor,
        { mass: mass, restitution: restitution },
        scene
    )

    return cube;
}