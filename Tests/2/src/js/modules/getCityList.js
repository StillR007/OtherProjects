const token = `3LNFozYVEsWJi93DOrtB7ekeecF3jMwI`;
const urlGetCities = `https://capi.tk-kit.com/1.0/tdd/city/get-list?token=${token}`;

// eslint-disable-next-line consistent-return
export default async function getCityFetch() {
	try {
		const response = await fetch(urlGetCities);
		const result = await response.json();

		return result;
	} catch (error) {
		console.error(error);
	}
}
