window.onload = function () {
	let scene = new THREE.Scene();
	let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 10000);
	//antialias сглаживает ребра
	let renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x000000);


	document.body.appendChild(renderer.domElement);


	// по умолчанию 0, так что нужно оттолкнуть
	camera.position.z = 5;
	camera.position.x = 0;
	camera.position.y = 0;

	let light = new THREE.DirectionalLight(0xfcf9e8, 1);
	scene.add(light);

	let ambiColor = "#cbc9bb";
	let ambientLight = new THREE.AmbientLight(ambiColor);
	scene.add(ambientLight);


	//Создаем менеджер заугрузок и говорим, что будем загружать избражения
	/* var loader = new THREE.ImageLoader(manager); 
	var manager = new THREE.LoadingManager(); */

	let objLoader = new THREE.OBJLoader();

	objLoader.load('model/pumpkin.obj', function (object) {
		console.log(object)
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				scene.add(object);
			}
		});
	});




	controls = new THREE.TrackballControls(camera);

	controls.rotateSpeed = 5;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;

	let render = () => {
		requestAnimationFrame(render);
		controls.update();
		renderer.render(scene, camera);
	};

	render();

};
