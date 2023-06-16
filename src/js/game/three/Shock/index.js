import * as THREE from 'three';

let alpha2 = 0.1

class Cylinder extends THREE.Mesh {
    constructor(color, opacity) { 
        super(new THREE.CylinderGeometry(0.03, 0.03, 0.5, 16, 16)), new THREE.MeshLambertMaterial({
            color: "lightblue", 
            //emissive: true,
            //emissiveIntensity: 0.4,

        });
    }
};

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

export class Shock extends THREE.Object3D {  
   constructor(){
        super();
        this.index = 0
        this.x = 0
        this.z = 0
        this.sparkles;
        this.alpha = 0.01
        let color = "red"
        let radius = 0.65
        //let opacity = getRandom(0.90, 0.97)
        let rotation = getRandom(1, 25)


        // Smokes
        let sparkle1 = new Cylinder(color, 1);
        sparkle1.position.set(0, 0, 0)
        sparkle1.visible = false

        let sparkle2 = new Cylinder(color, 1);
        sparkle2.position.set(0, 0, 0)
        sparkle2.visible = false
        sparkle2.rotateX(Math.PI/2)


        let sparkle3 = new Cylinder(color, 1);
        sparkle3.position.set(0, 0, 0)
        sparkle3.visible = false
        sparkle3.rotateX(Math.PI/2)


        let sparkle4 = new Cylinder(color, 1);
        sparkle4.position.set(0, 0, 0)
        sparkle4.visible = false
        sparkle4.rotateX(Math.PI/2)

        //smoke1.rotateX(degreesToRadians(40))
        //smoke1.rotateOnAxis(degreesToRadians(0))

        this.sparkles = [sparkle1, sparkle2, sparkle3, sparkle4]
        //this.smokes.forEach(smoke => this.visible = false)
        //this.deactiveSmokes()
        //this.smokesAnimation()

        this.add(sparkle1);
        this.add(sparkle2);
        this.add(sparkle3);
        this.add(sparkle4);


        
        return this;
   }
}





