export const getHash = str => {
    let hash = 0
	for (let i = 0; i < str.length; i++) {
		hash += Math.pow(str.charCodeAt(i) * 31, str.length - i)
		hash = hash & hash
	}
	return hash
}