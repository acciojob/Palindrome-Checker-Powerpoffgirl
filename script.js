// complete the given function

function palindrome(str){
	const n = str.length;
	for(let i=0; i<n/2; i++){
		if(str[i] !== (str[n-1-i])){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
