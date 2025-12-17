var d = new Date(2010, 1, 1);

function Check(time) {
  print(d.getTime(), time);
}

Check(d.setMilliseconds(10));
Check(d.setSeconds(10));
Check(d.setMinutes(10));
Check(d.setHours(10));
Check(d.setDate(10));
Check(d.setMonth(10));
Check(d.setFullYear(2010));
Check(d.setUTCMilliseconds(10));
Check(d.setUTCSeconds(10));
Check(d.setUTCMinutes(10));
Check(d.setUTCHours(10));
Check(d.setUTCDate(10));
Check(d.setUTCMonth(10));
Check(d.setUTCFullYear(2010));
