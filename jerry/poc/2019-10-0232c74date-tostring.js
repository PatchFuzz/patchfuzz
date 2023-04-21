













print(new Date (NaN) == "Invalid Date");
print(new Date (Infinity, 1, 1, 0, 0, 0) == "Invalid Date");
print(new Date (2015, Infinity, 1, 0, 0, 0) == "Invalid Date");
print(new Date (2015, 7, 1, 0, Infinity, 0) == "Invalid Date");
print(new Date (NaN, 1, 1, 0, 0, 0) == "Invalid Date");
print(new Date (2015, NaN, 1, 0, 0, 0) == "Invalid Date");
print(new Date (2015, 7, 1, 0, NaN, 0) == "Invalid Date");
print(/Fri Feb 13 2015 \d{2}:\d{2}:\d{2} GMT\+\d{2}\d{2}/.test (new Date ("2015-02-13")));
print(/Wed Jul 08 2015 \d{2}:\d{2}:\d{2} GMT\+\d{2}\d{2}/.test (new Date ("2015-07-08T11:29:05.023")));

try
{
  Date.prototype.toString.call(-1);
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}

var date = new Date(0);
print(/Thu Jan 01 1970 \d{2}:\d{2}:\d{2} GMT\+\d{2}\d{2}/.test (date.toString()));
print(date.toUTCString() === "Thu, 01 Jan 1970 00:00:00 GMT");
print(date.toISOString() === "1970-01-01T00:00:00.000Z");

date = new Date("2015-08-12T09:40:20.000Z")
print(/Wed Aug 12 2015 \d{2}:\d{2}:\d{2} GMT\+\d{2}\d{2}/.test (date.toString()));
print(date.toUTCString() === "Wed, 12 Aug 2015 09:40:20 GMT");
print(date.toISOString() === "2015-08-12T09:40:20.000Z");

print(new Date (NaN).toDateString () == "Invalid Date");
print(new Date ("2015-02-13").toDateString () == "Fri Feb 13 2015");
print(new Date ("2015-07-08T11:29:05.023").toDateString () == "Wed Jul 08 2015");

try
{
  Date.prototype.toDateString.call(-1);
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}

print(new Date (NaN).toTimeString () == "Invalid Date");
print(new Date (Number.POSITIVE_INFINITY).toString () === "Invalid Date");
print(new Date ("2015-02-13").toGMTString () == "Fri, 13 Feb 2015 00:00:00 GMT");
print(new Date ("2015-07-08T11:29:05.023+01:00").toGMTString () == "Wed, 08 Jul 2015 10:29:05 GMT");
print(new Date ("2015-07-08T11:29:05.023+10:00").toGMTString () == "Wed, 08 Jul 2015 01:29:05 GMT");

try
{
  Date.prototype.toTimeString.call(-1);
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}

print(new Date ("2015-07-16").toISOString () == "2015-07-16T00:00:00.000Z");
print(new Date ("2015-07-16T11:29:05.023+00:00").toISOString () == "2015-07-16T11:29:05.023Z");

try
{
  new Date (NaN).toISOString ();
  print(false);
}
catch (e)
{
  print(e instanceof RangeError);
}

try
{
  new Date (Number.POSITIVE_INFINITY).toISOString ();
  print(false);
}
catch (e)
{
  print(e instanceof RangeError);
}

try
{
  Date.prototype.toISOString.call(-1);
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}

print(new Date (NaN).toUTCString () == "Invalid Date");
print(new Date ("2015-07-16").toUTCString () == "Thu, 16 Jul 2015 00:00:00 GMT");
print(new Date ("2015-07-16T11:29:05.023+00:00").toUTCString () == "Thu, 16 Jul 2015 11:29:05 GMT");

try
{
  Date.prototype.toUTCString.call(-1);
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}

print(new Date (NaN).toJSON () == null);
print(new Date ("2015-07-16").toJSON () == "2015-07-16T00:00:00.000Z");
print(new Date ("2015-07-16T11:29:05.023+00:00").toJSON () == "2015-07-16T11:29:05.023Z");

try
{
  Date.prototype.toJSON.call(-1);
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}

date_time = new Date ("2015-07-08T11:29:05.023+00:00").toJSON ();
print(new Date (date_time).toISOString () == "2015-07-08T11:29:05.023Z");

print(typeof Date (2015) == "string");
print(typeof Date() != typeof (new Date ()));
print(Date () == (new Date ()).toString ());
print(Date (2015, 1, 1) == (new Date ()).toString ());
print(Date (Number.NaN) == Date ());

print(new Date ("2015-07-08T11:29:05.023Z").toISOString() == "2015-07-08T11:29:05.023Z");


print(new Date (-8640000000000001).toString() == "Invalid Date")
print(new Date (-8640000000000000).toGMTString() == "Tue, 20 Apr -271821 00:00:00 GMT")

print(new Date(-62167219200001).toGMTString() == "Fri, 31 Dec -0001 23:59:59 GMT")
print(new Date(-62167219200000).toGMTString() == "Sat, 01 Jan 0000 00:00:00 GMT")

print(new Date(-61851600000001).toGMTString() == "Thu, 31 Dec 0009 23:59:59 GMT")
print(new Date(-61851600000000).toGMTString() == "Fri, 01 Jan 0010 00:00:00 GMT")

print(new Date(-59011459200001).toGMTString() == "Thu, 31 Dec 0099 23:59:59 GMT")
print(new Date(-59011459200000).toGMTString() == "Fri, 01 Jan 0100 00:00:00 GMT")

print(new Date(-30610224000001).toGMTString() == "Tue, 31 Dec 0999 23:59:59 GMT")
print(new Date(-30610224000000).toGMTString() == "Wed, 01 Jan 1000 00:00:00 GMT")

print(new Date(-1).toGMTString() == "Wed, 31 Dec 1969 23:59:59 GMT")
print(new Date(0).toGMTString() == "Thu, 01 Jan 1970 00:00:00 GMT")
print(new Date(1).toGMTString() == "Thu, 01 Jan 1970 00:00:00 GMT")

print(new Date(253402300799999).toGMTString() == "Fri, 31 Dec 9999 23:59:59 GMT")
print(new Date(253402300800000).toGMTString() == "Sat, 01 Jan 10000 00:00:00 GMT")

print(new Date (8640000000000000).toGMTString() == "Sat, 13 Sep 275760 00:00:00 GMT")
print(new Date (8640000000000001).toGMTString() == "Invalid Date")
