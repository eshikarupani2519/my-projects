
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 3);
    scene.add(light);

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(2, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xFDB813 })
    );
    scene.add(sun);

    // Base orbital data adopted from online resources(realistic distances and periods)
    const planetData = [
      { name: 'Mercury', color: 0xb1b1b1, distance: 5, size: 0.3, period: 88 },
      { name: 'Venus',   color: 0xe6c072, distance: 7, size: 0.5, period: 225 },
      { name: 'Earth',   color: 0x2a5bde, distance: 9, size: 0.6, period: 365 },
      { name: 'Mars',    color: 0xff4e00, distance: 11, size: 0.4, period: 687 },
      { name: 'Jupiter', color: 0xd9a066, distance: 14, size: 1.2, period: 4331 },
      { name: 'Saturn',  color: 0xf6d77b, distance: 17, size: 1.0, period: 10747 },
      { name: 'Uranus',  color: 0x8bd6d6, distance: 20, size: 0.8, period: 30589 },
      { name: 'Neptune', color: 0x4666e5, distance: 23, size: 0.8, period: 59800 }
    ];
    const planetControlsDiv = document.getElementById("planetControls");
    let speedScale = 0.5;

    const planets = planetData.map(p => {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(p.size, 32, 32),
    new THREE.MeshStandardMaterial({ color: p.color })
  );
  const orbit = new THREE.Object3D();
  orbit.add(mesh);
  scene.add(orbit);
  // Create UI control
  const labelSpeed = document.createElement("label");
  labelSpeed.textContent = `${p.name} Speed`;
  const input = document.createElement("input");
  input.type = "range";
  input.min = "0.01";
  input.max = "10";
  input.step = "0.01";
  input.value = "1"; // default speed factor

  planetControlsDiv.appendChild(labelSpeed);
  planetControlsDiv.appendChild(input);


  const planet = {
    ...p,
    angle: Math.random() * Math.PI * 2,
    mesh,
    orbit,
    baseSpeed: 1 / p.period,
    speedFactor: 1,
    get speed() {
      return this.baseSpeed * this.speedFactor * speedScale;
    }
  };

  input.addEventListener("input", () => {
    planet.speedFactor = parseFloat(input.value);
  });

  return planet;
});


    camera.position.z = 60;

    let paused = false;
    document.getElementById("toggle").onclick = () => {
      paused = !paused;
      document.getElementById("toggle").textContent = paused ? "Resume" : "Pause";
    };
//controlling speed
   const slider = document.getElementById("speedSlider");
slider.addEventListener("input", () => {
  speedScale = parseFloat(slider.value);
});

// animation of planets
    function rotate() {
      requestAnimationFrame(rotate);

      if (!paused) {
        planets.forEach(p => {
          p.angle += p.speed;
          const x = p.distance * Math.cos(p.angle);
          const z = p.distance * Math.sin(p.angle);
          p.mesh.position.set(x, 0, z);
          p.mesh.rotation.y += 0.01;

          
        });
      }

      renderer.render(scene, camera);
    }
    rotate();