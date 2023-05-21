import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import TWEEN from "@tweenjs/tween.js";
import Button from "../../atoms/button";
const array = [5, 3, 8, 2, 1, 4, 6, 7];
const BubbleSorting = () => {
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/images/card-top.jpg");

    // Add mouse and orbit controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 100;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;

    // Define the array to sort

    // Create the array elements as cubes and add them to the scene
    const cubes:
      | { position: any }[]
      | THREE.Mesh<THREE.BoxGeometry, THREE.MeshNormalMaterial>[] = [];
    if (reset === true) {
      array.forEach((value: any, index: number) => {
        const geometry = new THREE.BoxGeometry(10, 10, 10);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        // const material = new THREE.MeshNormalMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = index * 20 - array.length * 10;
        mesh.position.y += 6 * array[index];
        mesh.scale.y = 1.3 * array[index] + 1;

        scene.add(mesh);

        cubes.push(mesh);
      });
    }

    // for (let i = 0; i < array.length; i++) {
    //   const cube = new THREE.Mesh(new THREE.BoxGeometry(1, array[i], 1), new THREE.MeshNormalMaterial());
    //   cube.position.x = i * 2 - (array.length - 1);
    //   scene.add(cube);
    //   cubes.push(cube);
    // }

    // Define the bubble sort algorithm
    function bubbleSort(array: any[]) {
      let i = 0;
      let j = 0;
      const sortStep = function () {
        if (j < array.length - i - 1) {
          if (array[j] > array[j + 1]) {
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;

            // Animate the cubes
            const tempCube = cubes[j];
            cubes[j] = cubes[j + 1];
            cubes[j + 1] = tempCube;
            const tween1 = new TWEEN.Tween(cubes[j].position)
              .to({ x: j * 20 - (array.length - 1) }, 1000)
              .start();
            const tween2 = new TWEEN.Tween(cubes[j + 1].position)
              .to({ x: (j + 1) * 20 - (array.length - 1) }, 1000)
              .start();
          }
          j++;
        } else {
          j = 0;
          i++;
        }
        if (i < array.length - 1) {
          setTimeout(sortStep, 1000);
        }
      };

      sortStep();
    }

    // Set camera position and render scene
    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      TWEEN.update();
      // meshArray.forEach((mesh: any, index: any) => {
      //   // mesh.rotation.x += 0.01;
      //   // mesh.rotation.y += 0.01;
      //   // mesh.scale.y = array[index] * 0.1;
      // });
      renderer.render(scene, camera);
    };
    animate();
    console.log(start);
    start == true ? bubbleSort(array, 10) : null;
    // bubbleSort(array,10);
    // Add event listener to slow down the animation when button is clicked
    // const slowButton = document.getElementById('slowButton');
    // slowButton.addEventListener('click', () => {
    //   bubbleSort(array, 2); // Run the algorithm at half speed
    // });
  }, [start, reset]);

  const startSorting = () => {
    setStart(true);
  };
  const resetObj = () => {
    setReset(true);
  };
  // function startSorting(): void {
  //   this.bubbleSort(array, 2);
  // }

  return (
    <>
      <canvas ref={canvasRef} />
      <Button onClick={startSorting}>Bubble Sorting</Button>{" "}
      <Button onClick={resetObj}>Reset</Button>
    </>
  );
};

export default BubbleSorting;
