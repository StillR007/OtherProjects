import sendData from './sendData.js';

const submitButton = document.querySelector('#submit');
const warningText = document.querySelector('#warningText');
const weightField = document.querySelector('#weight');
const volumeField = document.querySelector('#volume');
const lengthField = document.querySelector('#length');
const heightField = document.querySelector('#height');
const widthField = document.querySelector('#width');

const pickUpField = document.querySelector('#pick_up');
const deliveryField = document.querySelector('#delivery');

const showErrorMassage = (errorText) => {
	submitButton.setAttribute('disabled', 'disabled');
	warningText.innerText = `${errorText}`;

	return false;
};

export default function checkValidFormFields(
	CityPickupCode,
	cityDeliveryCode,
) {
	if (!CityPickupCode) {
		showErrorMassage('Не указан город отправки');

		return false;
	}

	if (!cityDeliveryCode) {
		showErrorMassage('Не указан город получения');

		return false;
	}

	if (!weightField.value) {
		showErrorMassage('Не указан вес посылки');

		return false;
	}

	if (!volumeField.value && !(lengthField.value && heightField.value && widthField.value)) {
		showErrorMassage('Укажите объем или длину, высоту и ширину');

		return false;
	}

	let notEmptyValues = [lengthField.value, heightField.value, widthField.value].filter((values) => values.length > 0);
	if (notEmptyValues.length > 1) {
		let sumOfDimensions = notEmptyValues.reduce((acc, rec) => acc * rec);

		if (volumeField.value && volumeField.value < sumOfDimensions) {
			showErrorMassage('Объём меньше указанных габаритов');

			return false;
		}
	}

	submitButton.removeAttribute('disabled');
	submitButton.onclick = () => {
		sendData(
			CityPickupCode,
			cityDeliveryCode,
			weightField.value,
			volumeField.value,
			lengthField.value,
			heightField.value,
			widthField.value,
			pickUpField.checked ? 'T001' : false,
			deliveryField.checked ? 'S026' : false,
		);
	};

	return true;
}
