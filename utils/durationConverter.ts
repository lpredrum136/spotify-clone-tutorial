// https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript

export const convertDuration = (duration: number) => {
	const minutes = Math.floor(duration / 60000)
	const seconds = ((duration % 60000) / 1000).toFixed(0)
	return minutes + ':' + (Number(seconds) < 10 ? '0' : '') + seconds
}
