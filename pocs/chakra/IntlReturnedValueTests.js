var options = { ca: "gregory", hour12: true, timeZone:"UTC" };
var dateFormat1 = new Intl.DateTimeFormat("en-US", options);    
print("");  
var date1 = new Date(2000, 1, 1);

var date2 = dateFormat1.format(date1);                          
print("");  
var stringDate1 = date1.toLocaleString("en-us");                
Intl.DateTimeFormat.supportedLocalesOf(["en-US"], { localeMatcher: "best fit" });
dateFormat1.resolvedOptions();
print("");  



var numberFormat1 = new Intl.NumberFormat();                    
print("");  

var formattedNumber1 = numberFormat1.format(123.456);           
print("");  
Intl.NumberFormat.supportedLocalesOf(["en-US"], { localeMatcher: "lookup" }); 
numberFormat1.resolvedOptions();                                
print("");  



var collator1 = Intl.Collator();                                
var compare1 = collator1.compare('a', 'b');
print("");  
Intl.Collator.supportedLocalesOf(["en-US"], { localeMatcher: "best fit" }); 
collator1.resolvedOptions();

print("Pass");
