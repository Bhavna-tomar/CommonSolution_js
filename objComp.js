myObj1 = { "name":"Bhavana", "age":"25", "car":null, "friends":['anto', 'rex', 'selva'] }; 
	myObj2 = { "name":"Bhavana", "age":"30", "car":null }; 
	 
	keyObj1 = Object.keys(myObj1); 
	keyObj2 = Object.keys(myObj2); 
		 
 
	valueObj1 = Object.values(myObj1); 
	valueObj2 = Object.values(myObj2); 
	 
	 
	if(keyObj1.length > keyObj2.length) { 
		var maxSize = keyObj1.length; 
	} else { 
		var maxSize = keyObj2.length; 
	} 
	 
	  
	for(var i=0; i<maxSize; i++) { 
		if(keyObj1[i] == keyObj2[i] && valueObj1[i] == valueObj2[i]) { 
			console.log('common value: '+valueObj2[i]);	 
		} else { 
			
			console.log(' different values  myObj1 value: '+ valueObj1[i] + '\ndifferent values myObj2 value: '+ valueObj2[i] +'\n'); 
		} 
	}