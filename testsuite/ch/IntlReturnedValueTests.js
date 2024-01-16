








var options = { ca: "gregory", hour12: true, timeZone:"UTC" };
var dateFormat1 = new Intl.DateTimeFormat("en-US", options);    
WScript.Echo("");  
var date1 = new Date(2000, 1, 1);

var date2 = dateFormat1.format(date1);                          
WScript.Echo("");  
var stringDate1 = date1.toLocaleString("en-us");                
Intl.DateTimeFormat.supportedLocalesOf(["en-US"], { localeMatcher: "best fit" });
dateFormat1.resolvedOptions();
WScript.Echo("");  



var numberFormat1 = new Intl.NumberFormat();                    
WScript.Echo("");  

var formattedNumber1 = numberFormat1.format(123.456);           
WScript.Echo("");  
Intl.NumberFormat.supportedLocalesOf(["en-US"], { localeMatcher: "lookup" }); 
numberFormat1.resolvedOptions();                                
WScript.Echo("");  



var collator1 = Intl.Collator();                                
var compare1 = collator1.compare('a', 'b');
WScript.Echo("");  
Intl.Collator.supportedLocalesOf(["en-US"], { localeMatcher: "best fit" }); 
collator1.resolvedOptions();

WScript.Echo("Pass");
