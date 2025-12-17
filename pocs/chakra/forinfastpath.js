var obj = { a : 1, b: 2, c :3 };


var c = 0;
for (var i in obj)
{
    for (var j in obj)
    {
        var temp;
        if (c < 2)
        {
            temp = i;
        }
        else
        {
            temp = j;
        }
        
        c = obj[temp];


        print(temp + " = " + c);

    }
}

