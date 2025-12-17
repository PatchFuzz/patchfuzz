var a = new Array(0, 1);
a[4294967294] = 2;          
a[4294967295] = 3;          
a[4294967296] = 4;          
a[4294967297] = 5;          

print(a.indexOf(2, 4294967290)); 
print(a.indexOf(3, 4294967290)); 
print(a.indexOf(4, 4294967290)); 
print(a.indexOf(5, 4294967290)); 

a[1111111] = 2;
a[1111112] = 3;
a[1111113] = 4;
a[1111114] = 5;

print(a.indexOf(2, 4294967290)); 
print(a.indexOf(3, 4294967290)); 
print(a.indexOf(4, 4294967290)); 
print(a.indexOf(5, 4294967290)); 
