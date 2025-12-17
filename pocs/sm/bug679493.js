function mul(x, y) {
    return x*y;
}
print(mul(1, 2), 2);
print(mul(0, 2), 0);
print(mul(0, -1), -0);
print(mul(100000000, 20000), 2000000000000);
print(mul(0, -2), -0);
print(mul(0, 0), 0);


print(function(x){return x*1}(4), 4);
print(function(x){return x*1}(0), 0);
print(function(x){return x*1}(-4), -4);
print(function(x){return x*2}(4), 8);
print(function(x){return x*2}(0), 0);
print(function(x){return x*2}(-4), -8);
print(function(x){return x*2}(2000000000), 4000000000);
print(function(x){return x*5}(4), 20);
print(function(x){return x*5}(0), 0);
print(function(x){return x*5}(-4), -20);
print(function(x){return x*0}(0), 0);
print(function(x){return x*0}(5), 0);
print(function(x){return x*0}(-5), -0);
print(function(x){return x*-5}(4), -20);
print(function(x){return x*-5}(0), -0);
print(function(x){return x*-5}(-4), 20);
print(function(x){return x*20000}(100000000), 2000000000000);


print(function(){var x=5; return x*4}(), 20);
print(function(){var x=5; return x*-4}(), -20);
print(function(){var x=0; return x*4}(), 0);
print(function(){var x=0; return x*0}(), 0);
print(function(){var x=0; return x*-4}(), -0);
print(function(){var x=20000; return x*100000000}(), 2000000000000);
