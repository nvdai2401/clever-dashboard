export const convertToKebabCase = str => str.replace(/ /g, '_')

export const convertToSpaceStr = str => str.replace(/\_/g, ' ')

export const genMockArray = len => {
	let arr = []
	for (let i = 1; i <= len; i++) {
		arr.push(i)
	}
	return arr
}

export const getMaxLengthOfArrayObj = arrObj => {
	if (!typeof arrObj === 'object') return
	let maxLength = 0
	for (let key in arrObj) {
		const objLen = arrObj[key].length
		if (objLen > maxLength) maxLength = objLen
	}
	return maxLength
}
