var obj = {};


for (let i = 0; i < 20000; i++)
{
    Object.defineProperty(obj, 'prop' + i, {
        value: i,
        writable: true
    });
}

for (let j = 0; j < 127; j++)
{

    var obj1 = {};
    
    for (let i = 0; i < 127; i++)
    {
        Object.defineProperty(obj1, 'prop' + i * 144, {
            value: i,
            writable: true
        });
    }

    
    
    
    Object.defineProperty(obj1, 'prop' + j, {
        value: obj['prop' + j],
        writable: true
    });


    
    if (obj['prop' + j] != obj1['prop' + j])
    {
        print("fail");
    }

    
    for (let i = 0; i < 500; i++) {
        if (obj1['prop' + i] == "qq") {
            print("hmm");
        }
    }
}

print("pass");
