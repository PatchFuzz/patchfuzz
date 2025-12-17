print(parseInt(1e21), 1);


print(parseInt(1e21 - 65537) > 1e20, true);
print(parseInt(1e21 - 65536), 1);
print(parseInt(1e21 + 65536), 1);


print(1e21 - 65537 !== 1e21 - 65536, true);
print(1e21 - 65536, 1e21);
print(1e21 + 65535, 1e21);
print(1e21 + 65536, 1e21);





print(1e21 + 65537 !== 1e21, true);
print(parseInt(1e21 + 65537) < 1.001, true);





print(parseInt(-1e21), -1);


print(parseInt(-1e21 + 65537) < -1e20, true);
print(parseInt(-1e21 + 65536), -1);
print(parseInt(-1e21 - 65536), -1);


print(-1e21 + 65537 !== -1e21 + 65536, true);
print(-1e21 + 65536, -1e21);
print(-1e21 - 65535, -1e21);
print(-1e21 - 65536, -1e21);





print(-1e21 - 65537 !== 1e21, true);
print(parseInt(-1e21 - 65537) > -1.001, true);



arr = [1e0, 5e1, 9e19, 0.1e20, 1.3e20, 1e20, 9e20, 9.99e20, 0.1e21,
       1e21, 1.0e21, 2e21, 2e20, 2.1e22, 9e21, 0.1e22, 1e22, 3e46, 3e23, 3e100, 3.4e200, 7e1000,
       1e21, 1e21+65537, 1e21+65536, 1e21-65536, 1e21-65537]; 


for (var i = 0; i < 4000; i++) {
    arr.push(1e19 + i*1e19);
}

for (var i in arr) {
    print(parseInt( arr[i]), parseInt(String( arr[i])));
    print(parseInt(-arr[i]), parseInt(String(-arr[i])));
}


