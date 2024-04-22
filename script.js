// complete the given function

function palindrome(str){
	str = str.split(" ").join("")
	str.toLowerCase()
	let i=0
	let j=str.length
	while (i<=j) {
		if(str[i]!=str[j]) return false
	}
	return true
}
module.exports = palindrome
