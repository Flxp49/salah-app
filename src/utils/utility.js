
export async function promiseHandler(promise, ...args) {
	try {
		const data = await promise(...args)
		return [data, null]
	} catch (error) {
		return [null, error]
	}
}

export function getKeyByValue(object, value) {
	return Object.keys(object).find((key) => object[key] == value)
}

export function makeTimestamp(time) {
	let date = new Date()
	let hour = time.split(":")[0]
	hour = hour == 0 ? 24 : hour
	date.setHours(hour)
	date.setMinutes(time.split(":")[1])
	date.setSeconds(0)
	console.log("DATE IS : " + typeof date);
	return date
}
