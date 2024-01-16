




























assertThrows(function(){ decodeURIComponent("%ED%A0%80"); }, URIError);

assertThrows(function(){ decodeURIComponent("%ED%AF%BF"); }, URIError);

assertThrows(function(){ decodeURIComponent("%ED%B0%80"); }, URIError);

assertThrows(function(){ decodeURIComponent("%ED%BF%BF"); }, URIError);



assertThrows(function(){ decodeURIComponent("%C1%BF"); }, URIError);

assertThrows(function(){ decodeURIComponent("%E0%9F%BF"); }, URIError);
