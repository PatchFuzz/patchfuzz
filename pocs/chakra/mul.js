var diff_clock_time = null;

for(var i=0; i<3; i++)
{
        doClock();
}
       
function doClock(firsttime)
{
    var clock = new Date();
    
    if (firsttime == true)
    {
        var real_clock = new Date();
        diff_clock_time = clock * 1 - real_clock * 1;        
    }

    
    clock.setTime(clock * 1 - diff_clock_time * 1);
    var hours = clock.getHours();
}

