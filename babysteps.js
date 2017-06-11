var result = []; 

for (var i = 0, l = process.argv.length; i < l; i++) {
	if (!isNaN(Number(process.argv[i]))) 
		result.push(Number(process.argv[i])); 
}

result = result.reduce((a, b)=>{
	return a + b
}, 0); 

console.log(result); 