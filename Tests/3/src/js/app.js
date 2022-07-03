const token = `someToken`;
const urlSendData = `https://someUrl${token}`;
const form = document.querySelector('form');

const customInputsControls = document.querySelector('#custom-inputs-control');
const titleField = document.querySelector('#title');
const nameField = document.querySelector('#name');
const countField = document.querySelector('#count');
const packagingField = document.querySelector('#packaging');
const clientField = document.querySelector('#client');
const commentField = document.querySelector('#comment');

const sendBtn = document.querySelector('#sendData');

const btnPlus = document.querySelector('#plus');
const btnMinus = document.querySelector('#minus');

async function sendData(data) {
	for (let key of data.keys()) {
		// eslint-disable-next-line no-console
		console.log(`${key}: ${data.get(key)}`);
	}
	try {
		let response = await fetch(urlSendData, {
			method: 'POST',
			body: data,
		});

		let result = await response.json();

		return result;
	} catch (error) {
		console.error(error);
	}

	return false;
}

let formData = new FormData(form);
form.addEventListener('change', (event) => {
	let title = titleField.value;

	let category = document.querySelector('input[name="category-radio"]:checked')
		? document.querySelector('input[name="category-radio"]:checked').value
		: false;

	let type = document.querySelector('input[name="type-radio"]:checked')
		? document.querySelector('input[name="type-radio"]:checked').value
		: false;

	let storage = document.getElementById('storage').value;
	let composition = document.getElementById('composition').value;

	let name = nameField.value ? nameField.value : false;
	let count = countField.value ? countField.value : false;
	let packaging = packagingField.value ? packagingField.value : false;
	let client = clientField.value ? clientField.value : false;
	let comment = commentField.value ? commentField.value : false;

	formData.set('title', `${title}`);
	formData.set(`category`, `${category}`);
	formData.set(`type`, `${type}`);
	formData.set(`storage`, `${storage}`);
	formData.set(`composition`, `${composition}`);
	formData.set(`name`, `${name}`);
	formData.set(`count`, `${count}`);
	formData.set(`packaging`, `${packaging}`);
	formData.set(`client`, `${client}`);
	formData.set(`comment`, `${comment}`);

	let custominputs = document.querySelectorAll('.custom-input');
	if (custominputs.length > 0) {
		custominputs.forEach((input) => {
			let customName = input.querySelector('input').value;
			let value = input.querySelector('input:last-child').value;

			formData.set(`${customName}`, `${value}`);
		});
	}

	if (event.target === document.querySelector('#files')) {
		let files = event.target.files;
		for (let i = 0; i < files.length; i++) {
			formData.set(`file_${i}`, files[i]);
		}
	}

	if (title && category && type) {
		sendBtn.removeAttribute('disabled');
	}
});

btnPlus.addEventListener('click', () => {
	let htmlElem = document.createElement('div');
	htmlElem.className = 'input-flex custom-input col-md-12 col-lg-6 p-0 mt-1';

	let inputLabel = document.createElement('input');
	inputLabel.type = 'text';
	inputLabel.className = 'form-control mb-1 customInputName';
	inputLabel.placeholder = 'Название поля';

	let input = document.createElement('input');
	input.type = 'text';
	input.className = 'form-control customInputValue';
	input.placeholder = 'Значение поля';

	htmlElem.append(inputLabel);
	htmlElem.append(input);

	customInputsControls.before(htmlElem);
});

btnMinus.addEventListener('click', () => {
	let inputsNode = document.querySelectorAll('.input-flex');
	let inputs = [...inputsNode];
	let lastElem = inputs[inputs.length - 1];
	let lastElemNameValue = lastElem.querySelector('input').value;

	formData.delete(`${lastElemNameValue}`);

	lastElem.remove();
});

sendBtn.addEventListener('click', () => sendData(formData));
