import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ArrayVisualization = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
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

    // Create array of objects to visualize
    const array = [10, 2, 3, 1, 4, 5, 6, 7, 0, 7, 8, 9];
    const meshArray: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>[] =
      [];
    array.forEach((value, index) => {
      const geometry = new THREE.BoxGeometry(10, 10, 10);
      // const material = new THREE.MeshBasicMaterial({ map: texture });
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = index * 20 - array.length * 10;
      mesh.position.y += 5 * array[index];
      mesh.scale.y = 1.3 * array[index] + 1;
      setTimeout(() => {
        scene.add(mesh);
      }, 2000);

      meshArray.push(mesh);
    });

    // Set camera position and render scene
    // camera.position.z = 0;
    // Add ambient light to scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Add ambient light with color and intensity
    scene.add(ambientLight);

    // Set camera position and render scene
    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      meshArray.forEach((mesh, index) => {
        // mesh.rotation.x += 0.01;
        // mesh.rotation.y += 0.01;
        // mesh.scale.y = array[index] * 0.1;
      });
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ArrayVisualization;
