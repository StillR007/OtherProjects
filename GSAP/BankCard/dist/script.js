let mainFunc = () => {
	const body = document.querySelector('body');

	cx = window.innerWidth / 2;
	cy = window.innerHeight / 2;

	function updateMe() {
		dx = clientX - cx
		dy = clientY - cy
		tiltX = dy / cy
		tiltY = dx / cx


		radius = Math.sqrt(Math.pow(tiltX, 2) + Math.pow(tiltY, 2))
		degree = radius * 20


		gsap.to('.content', 1, { transform: `rotate3d( ${-tiltX}, ${tiltY}, 0, ${degree}deg)` })
	}

	body.addEventListener('mousemove', e => {
		clientX = e.pageX;
		clientY = e.pageY;

		//console.log(`${clientX} / ${clientY}`);

		request = requestAnimationFrame(updateMe)
	})

	gsap.registerPlugin(CSSPlugin)

	const tl = gsap.timeline()
		.set('svg', { opacity: 1 })
		.set('.scratches', { rotation: 70, x: 450, y: -10 })
		.set('#tri2', { scale: 0.5 })
		.from('#cardMask rect', { scale: 0, rotation: -20, duration: 2, transformOrigin: '50% 50%', ease: 'expo.inOut' }, 0)
		.to('#tri1', {
			/* gsap.registerPlugin(MotionPathPlugin, TextPlugin) */
			motionPath: {
				path: "#midC",
				align: "#midC",
				alignOrigin: [0.5, 0.5],
				autoRotate: true,
				start: 1,
				end: 0
			}, duration: 6, repeat: -1, ease: 'none', repeatDelay: 1
		}, 0.5)
		.to('#tri2', {
			motionPath: {
				path: "#innerC",
				align: "#innerC",
				alignOrigin: [0.5, 0.5],
				autoRotate: true,
				start: 0,
				end: 1
			}, duration: 5, repeat: -1, ease: 'none', repeatDelay: 1
		}, 1.5)
		.from('.coil', { attr: { 'stroke-dashoffset': (i) => (i == 1) ? -28 : 28 }, ease: 'none', duration: 1, repeat: -1 }, 1)
		.fromTo('#orb1', { y: 160 }, { y: -20, ease: 'circ', repeat: -1, yoyo: true, duration: 1 }, 0.8)
		.from('.logoPt', { x: (i) => [18, -10][i], duration: 1.2, ease: 'expo.inOut' }, 0.9)
		.from('svg text', { x: -40, duration: 1.1, ease: 'expo.inOut', stagger: 0.2 }, 1)
		.from('.txtBox', { scaleX: 0, transformOrigin: '100% 0', duration: 1.1, ease: 'expo.inOut', stagger: 0.2 }, 1)
		.fromTo('#wave1', { x: 0, y: 0 }, { duration: 5, x: -701, y: 815, repeat: -1, ease: 'none' }, 0)
		.fromTo('#wave2', { x: 0, y: 0 }, { duration: 6, x: 804, y: -917, repeat: -1, ease: 'none', onRepeat: () => starShine.play(0) }, 0)

	starShine = gsap.timeline()
		.set('#star', { scale: 0, transformOrigin: '50% 50%', x: 2, y: 10 })
		.to('#star', { scale: 1, repeat: 1, yoyo: true, yoyoEase: true, duration: 0.4, ease: 'power4' }, 0)
		.fromTo('#star', { rotate: -20 }, { rotate: 120, duration: 0.8, ease: 'none' }, 0);
};

document.addEventListener("DOMContentLoaded", function (event) {
	mainFunc();
	document.addEventListener('resize', mainFunc);
});

