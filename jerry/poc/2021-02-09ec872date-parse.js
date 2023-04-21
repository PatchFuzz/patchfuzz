













var wrongFormats = ["",
                    "2",
                    "20",
                    "201",
                    "2015-",
                    "2015-01-",
                    "2015-01-01-",
                    "qwerty",
                    "2015-01-01T",
                    "2015-01-01T1:1",
                    "2015-01-01T01",
                    "2015-01-01T01",
                    "2015-01-01T01:01F",
                    "T2015",
                    "2015-01-01Z",
                    "2015-01-01+01:00",
                    "2015-01-01T00:00+01",
                    "2015-01-01T00:00+1",
                    "2015-01-01T00:00-01",
                    "2015-01-01T00:00.000",
                    "2015-01-01T00:00:",
                    "2015-01-01T00:",
                    "2015-01-01T00:00:00.1",
                    "2015-01-01T00:00:00.01",
                    "2015-01-01T24:01:00.000",
                    "2015-01-01T24:00:01.000",
                    "2015-01-01T24:00:00.001",
                    "2015-01-01T00:00+01:00Z",
                    "2015/01-01",
                    "2015-01-32",
                    "2015--1",
                    "2015-13",
                    "2015-01--1",
                    "-215",
                    "-215-01-01",
                    "2015-01-00",
                    "2015-01-01T25:00",
                    "2015-01-01T00:60",
                    "2015-01-01T-1:00",
                    "2015-01-01T00:-1",
                    "2e+3",
                    "+2015-01-01",
                    "-2015-01-01",
                    "+02015-01-01",
                    "-02015-01-01",
                    "002015-01-01",
                    "+0002015-01-01",
                    "-0002015-01-01",
                    "2015-01T00:00:00.000-03X00",
                    "2015-01T00:00:00.000-02-02",
                    "2015-01-01T00-03:00",
                    "Fri Jan 01 1 00:00:00 GMT+0000",
                    "Fri Jan 01 11 00:00:00 GMT+0000",
                    "Fri Jan 01 111 00:00:00 GMT+0000",
                    "Fri Jan 01 1234567 00:00:00 GMT+0000",
                    "Fri Jan 01 +1000 00:00:00 GMT+0000",
                    "Fri Jan 01 -1 00:00:00 GMT+0000",
                    "Fri Jan 01 -11 00:00:00 GMT+0000",
                    "Fri Jan 01 -111 00:00:00 GMT+0000",
                    "Fri Jan 01 -1234567 00:00:00 GMT+0000",
                    "Thu Apr 10 1997"];

for (i in wrongFormats) {
  var d = Date.parse(wrongFormats[i]);
  print(isNaN(d));
}

var d;

d = Date.parse(undefined);
print(isNaN(d));

d = Date.parse({});
print(isNaN(d));

d = Date.parse(2000 + 15);
print(d == 1420070400000);

d = Date.parse("2015");
print(d == 1420070400000);

d = Date.parse("2015-01");
print(d == 1420070400000);

d = Date.parse("2015-01-01");
print(d == 1420070400000);

var timezoneOffsetMS = new Date(0).getTimezoneOffset() * 60000;

d = Date.parse("2015-01T00:00");
print(d == 1420070400000 + timezoneOffsetMS);

d = Date.parse("2015-01T00:00:00");
print(d == 1420070400000 + timezoneOffsetMS);

d = Date.parse("2015-01T00:00:00.000");
print(d == 1420070400000 + timezoneOffsetMS);

d = Date.parse("2015-01T24:00:00.000");
print(d == 1420156800000 + timezoneOffsetMS);

d = Date.parse("2015-01T00:00:00.000+03:00");
print(d == 1420059600000);

d = Date.parse("2015-01T00:00:00.000-03:00");
print(d == 1420081200000);

d = Date.parse("2015-07-03T14:35:43.123+01:30");
print(d == 1435928743123);

print(isNaN(Date.parse("-271821-04-19T23:59:59.999Z"))) 
print(Date.parse("-271821-04-20T00:00:00.000Z") == -8640000000000000)
print(Date.parse("-000001-12-31T23:59:59.999Z") == -62167219200001)
print(Date.parse("0000-01-01T00:00:00.000Z") == -62167219200000)
print(Date.parse("0009-12-31T23:59:59.999Z") == -61851600000001)
print(Date.parse("0010-01-01T00:00:00.000Z") == -61851600000000)
print(Date.parse("0099-12-31T23:59:59.999Z") == -59011459200001)
print(Date.parse("0100-01-01T00:00:00.000Z") == -59011459200000)
print(Date.parse("0999-12-31T23:59:59.999Z") == -30610224000001)
print(Date.parse("1000-01-01T00:00:00.000Z") == -30610224000000)
print(Date.parse("1969-12-31T23:59:59.999Z") == -1)
print(Date.parse("1970-01-01T00:00:00.000Z") == 0)
print(Date.parse("1970-01-01T00:00:00.001Z") == 1)
print(Date.parse("9999-12-31T23:59:59.999Z") == 253402300799999)
print(Date.parse("+010000-01-01T00:00:00.000Z") == 253402300800000)
print(Date.parse("+275760-09-13T00:00:00.000Z") == 8640000000000000)
print(isNaN(Date.parse("+275760-09-13T00:00:00.001Z"))) 


print(isNaN(Date.parse("Mon Apr 19 -271821 23:59:59 GMT+0000"))) 
print(Date.parse("Tue Apr 20 -271821 00:00:00 GMT+0000") == -8640000000000000)
print(Date.parse("Fri Dec 31 -0001 23:59:59 GMT+0000") == -62167219201000)
print(Date.parse("Sat Jan 01 0000 00:00:00 GMT+0000") == -62167219200000)
print(Date.parse("Thu Dec 31 0009 23:59:59 GMT+0000") == -61851600001000)
print(Date.parse("Fri Jan 01 0010 00:00:00 GMT+0000") == -61851600000000)
print(Date.parse("Thu Dec 31 0099 23:59:59 GMT+0000") == -59011459201000)
print(Date.parse("Fri Jan 01 0100 00:00:00 GMT+0000") == -59011459200000)
print(Date.parse("Tue Dec 31 0999 23:59:59 GMT+0000") == -30610224001000)
print(Date.parse("Wed Jan 01 1000 00:00:00 GMT+0000") == -30610224000000)
print(Date.parse("Wed Dec 31 1969 23:59:59 GMT+0000") == -1000)
print(Date.parse("Thu Jan 01 1970 00:00:00 GMT+0000") == 0)
print(Date.parse("Thu Jan 01 1970 00:00:01 GMT+0000") == 1000)
print(Date.parse("Fri Dec 31 9999 23:59:59 GMT+0000") == 253402300799000)
print(Date.parse("Sat Jan 01 10000 00:00:00 GMT+0000") == 253402300800000)
print(Date.parse("Sat Sep 13 275760 00:00:00 GMT+0000") == 8640000000000000)
print(isNaN(Date.parse("Sat Sep 13 275760 00:00:01 GMT+0000"))) 


print(isNaN(Date.parse("Mon, 19 Apr -271821 23:59:59 GMT"))) 
print(Date.parse("Tue, 20 Apr -271821 00:00:00 GMT") == -8640000000000000)
print(Date.parse("Fri, 31 Dec -0001 23:59:59 GMT") == -62167219201000)
print(Date.parse("Sat, 01 Jan 0000 00:00:00 GMT") == -62167219200000)
print(Date.parse("Thu, 31 Dec 0009 23:59:59 GMT") == -61851600001000)
print(Date.parse("Fri, 01 Jan 0010 00:00:00 GMT") == -61851600000000)
print(Date.parse("Thu, 31 Dec 0099 23:59:59 GMT") == -59011459201000)
print(Date.parse("Fri, 01 Jan 0100 00:00:00 GMT") == -59011459200000)
print(Date.parse("Tue, 31 Dec 0999 23:59:59 GMT") == -30610224001000)
print(Date.parse("Wed, 01 Jan 1000 00:00:00 GMT") == -30610224000000)
print(Date.parse("Wed, 31 Dec 1969 23:59:59 GMT") == -1000)
print(Date.parse("Thu, 01 Jan 1970 00:00:00 GMT") == 0)
print(Date.parse("Thu, 01 Jan 1970 00:00:01 GMT") == 1000)
print(Date.parse("Fri, 31 Dec 9999 23:59:59 GMT") == 253402300799000)
print(Date.parse("Sat, 01 Jan 10000 00:00:00 GMT") == 253402300800000)
print(Date.parse("Sat, 13 Sep 275760 00:00:00 GMT") == 8640000000000000)
print(isNaN(Date.parse("Sat, 13 Sep 275760 00:00:01 GMT"))) 


print(Date.parse("2000/01/01 12:12Z") == 946728720000)
print(Date.parse("1991-07-13 16:04Z") == 679421040000)
