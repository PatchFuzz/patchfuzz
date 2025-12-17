var re = /^on([A-Z])/; 
var inputs = ["onClick"]; 
var result ;
for( var i = 0; i < inputs.length; i++) { 
    result = re.exec(inputs[i]); 
}
print(result.toString());
