

function t1() {
    let x = [];

    try
    {
        for (let k = 0; k < 100; ++k)
        {
            let w = () => k; 

            if (w() > 10)
            {
                throw () => w; 
            }

            x[k] = w;
        }
    }
    catch (e)
    {
        

        try {
            eval("k");
            throw false;
        }
        catch (e) {
            if (!(e instanceof ReferenceError))
                throw "Loop index escaped block";
        }

        try {
            eval("w");
            throw false;
        }
        catch (e) {
            if (!(e instanceof ReferenceError))
                throw "Local name escaped block";
        }
    }
}
t1();
t1();
t1();
t1();
