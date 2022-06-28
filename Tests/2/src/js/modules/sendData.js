/* eslint-disable object-shorthand */
const token = `3LNFozYVEsWJi93DOrtB7ekeecF3jMwI`;
const urlSendData = `https://capi.tk-kit.com/1.0/order/calculate?token=${token}`;
// const urlSendData = `https://tk-kit.com/developers/api-doc/1.0/order/calculate?token=${token}`;

// eslint-disable-next-line consistent-return
export default async function sendData(
	CityPickupCode,
	cityDeliveryCode, weight,
	volume,
	length,
	height,
	width,
	pickUp = false,
	delivery = false,
) {
	let data = {
		validate: {
			city_delivery_code: `${cityDeliveryCode}`,
			city_pickup_code: `${CityPickupCode}`,
			declared_price: '100',
			currency_code: [
				'KZT',
				'RUB',
			],
			service: [
				pickUp,
				delivery,
			],
			places: [
				{
					count_place: 1,
					height: height,
					width: width,
					length: length,
					weight: weight,
					volume: volume,
				},
			],
			insurance: '1',
			insurance_agent_code: '8000152423',
		},
	};
	try {
		let response = await fetch(urlSendData, {
			method: 'POST',
			body: JSON.stringify(data),
		});

		// eslint-disable-next-line no-console
		console.log('response data: ', data);
		let result = await response.json();

		return result;
	} catch (error) {
		console.error(error);
	}
}
