// complete the given function

function palindrome(str){
	newstr = str.split(" ").join("")
	newstr.toLowerCase()
	let i=0
	let j=newstr.length
	while (i<=j) {
		if(newstr[i]!=newstr[j]) return false
		i++
		j--
	}
	return true
}
module.exports = palindrome
