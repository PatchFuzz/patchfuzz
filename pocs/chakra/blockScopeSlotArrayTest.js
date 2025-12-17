var g;

function test() {
    {
        let a = 0;
        {
            g = function inner() {
                a++; 
                a;
            }
        }
    }
}

test();
print(g);
print(g);
print("PASSED")