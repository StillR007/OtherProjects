function init() {
	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	const renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(new THREE.Color('#000000'));
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;


	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);


	const spotLight = new THREE.SpotLight('#ffffff');
	spotLight.position.set(-40, 40, -15);
	spotLight.castShadow = true;
	spotLight.shadow.mapSize = new THREE.Vector2(2024, 2024);
	spotLight.shadow.camera.far = 130;
	spotLight.shadow.camera.near = 40;
	scene.add(spotLight);

	const ambienLight = new THREE.AmbientLight('#353535');
	scene.add(ambienLight);

	document.getElementById("app").appendChild(renderer.domElement);

	createBoundingWall(scene)
	createGroundPlane(scene)
	createHouse(scene)
	createTree(scene)

	const controls = new THREE.TrackballControls(camera);

	controls.rotateSpeed = 5;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;

	let render = () => {
		requestAnimationFrame(render);
		controls.update();
		renderer.render(scene, camera);
	};

	render();
}

function createBoundingWall(scene) {
	const wallLeft = new THREE.BoxGeometry(70, 2, 2);
	const wallRight = new THREE.BoxGeometry(70, 2, 2);
	const wallTop = new THREE.BoxGeometry(2, 2, 50);
	const wallBottom = new THREE.BoxGeometry(2, 2, 50);

	const wallMaterial = new THREE.MeshLambertMaterial({
		color: '#a0522d'
	});

	const wallLeftMesh = new THREE.Mesh(wallLeft, wallMaterial);
	const wallRightMesh = new THREE.Mesh(wallRight, wallMaterial);
	const wallTopMesh = new THREE.Mesh(wallTop, wallMaterial);
	const wallBottomMesh = new THREE.Mesh(wallBottom, wallMaterial);

	wallLeftMesh.position.set(15, 1, -25);
	wallRightMesh.position.set(15, 1, 25);
	wallTopMesh.position.set(-19, 1, 0);
	wallBottomMesh.position.set(49, 1, 0);

	scene.add(wallLeftMesh);
	scene.add(wallRightMesh);
	scene.add(wallBottomMesh);
	scene.add(wallTopMesh);
}

function createGroundPlane(scene) {
	const planeGeometry = new THREE.PlaneGeometry(70, 50);
	const planeMaterial = new THREE.MeshLambertMaterial({
		color: 0x9acd32
	});
	const plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.receiveShadow = true;

	plane.rotation.x = -0.5 * Math.PI;
	plane.position.x = 15;
	plane.position.y = 0;
	plane.position.z = 0;

	scene.add(plane)
}

function createHouse(scene) {
	const roof = new THREE.ConeGeometry(5, 4);
	const base = new THREE.CylinderGeometry(5, 5, 6);


	const roofMesh = new THREE.Mesh(roof, new THREE.MeshLambertMaterial({
		color: '#8b7213'
	}));
	const baseMesh = new THREE.Mesh(base, new THREE.MeshLambertMaterial({
		color: '#ffe4c4'
	}));

	roofMesh.position.set(25, 8, 0);
	baseMesh.position.set(25, 3, 0);

	roofMesh.receiveShadow = true;
	baseMesh.receiveShadow = true;
	roofMesh.castShadow = true;
	baseMesh.castShadow = true;

	scene.add(roofMesh);
	scene.add(baseMesh);
}

function createTree(scene) {
	const trunk = new THREE.BoxGeometry(1, 8, 1);
	const leaves = new THREE.SphereGeometry(4);

	const trunkMesh = new THREE.Mesh(trunk, new THREE.MeshLambertMaterial({
		color: '#8b4513'
	}));
	const leavesMesh = new THREE.Mesh(leaves, new THREE.MeshLambertMaterial({
		color: '#00ff00'
	}));

	trunkMesh.position.set(-10, 4, 0);
	leavesMesh.position.set(-10, 12, 0);

	trunkMesh.castShadow = true;
	trunkMesh.receiveShadow = true;
	leavesMesh.castShadow = true;
	leavesMesh.receiveShadow = true;

	scene.add(trunkMesh);
	scene.add(leavesMesh);
}