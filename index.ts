import * as Babylon from 'babylonjs';
import 'regenerator-runtime';
import { scene, engine } from './src/scene';
import { makeGround } from './src/ground';
import { makeCube, makeSphere } from './src/testObjects';
import Ammo from 'ammojs-typed';

async function main() : Promise<void> {
    const ammo = await Ammo();
    const physics: Babylon.AmmoJSPlugin = new Babylon.AmmoJSPlugin( true, ammo );
    scene.enablePhysics( new Babylon.Vector3( 0, -9.8, 0 ), physics );

    makeGround();

    // Test dump
    const spread = 10;
    const range = 50;
    for( var x = 0; x < range; x++ ) {
        for( var z = 0; z < range; z++ ) {
            makeSphere( 1, new Babylon.Vector3( range * spread / 2 - spread * x, 50, range * spread / 2 - spread * z ))
        }
    }

    scene.debugLayer.show();

    engine.runRenderLoop( () => scene.render() );
}

main();