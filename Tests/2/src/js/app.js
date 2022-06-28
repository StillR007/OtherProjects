import autoComplete from '@tarekraafat/autocomplete.js';

import getCityFetch from './modules/getCityList.js';
import checkValidFormFields from './modules/checkValidFormFields.js';

// eslint-disable-next-line func-names
(async function () {
	const getCitiesObject = await getCityFetch();

	const citiesObj = [...getCitiesObject];
	let cities = [];

	citiesObj.forEach((city) => {
		cities.push(city);
	});

	const cityPickup = new autoComplete({
		selector: '#city_pickup_code',
		placeHolder: 'Откуда',
		data: {
			src: cities,
			cache: true,
			keys: ['name'],
		},
		resultItem: {
			highlight: true,
		},
		events: {
			input: {
				selection: (event) => {
					const name = event.detail.selection.value.name;
					const type = event.detail.selection.value.type;
					cityPickup.input.value = `${type} ${name}`;
				},
			},
		},
		wrapper: false,
	});
	const cityDelivery = new autoComplete({
		selector: '#city_delivery_code',
		placeHolder: 'Куда',
		data: {
			src: cities,
			cache: true,
			keys: ['name'],
		},
		resultItem: {
			highlight: true,
		},
		events: {
			input: {
				selection: (event) => {
					const name = event.detail.selection.value.name;
					const type = event.detail.selection.value.type;
					cityDelivery.input.value = `${type} ${name}`;
				},
			},
		},
		wrapper: false,
	});
})();

let cityPickupCode = '';
let cityDeliveryCode = '';

const selects = document.querySelector('.selects');
const cityPickupField = document.querySelector('#city_pickup_code');
const cityDeliveryField = document.querySelector('#city_delivery_code');

cityPickupField.addEventListener('init', () => {
	selects.classList.remove('loading');
});

cityPickupField.addEventListener('selection', (event) => {
	cityPickupCode = event.detail.selection.value.code;
});
cityDeliveryField.addEventListener('selection', (event) => {
	cityDeliveryCode = event.detail.selection.value.code;
});

document.querySelector('form').addEventListener('change', () => {
	checkValidFormFields(
		cityPickupCode,
		cityDeliveryCode,
	);
});
