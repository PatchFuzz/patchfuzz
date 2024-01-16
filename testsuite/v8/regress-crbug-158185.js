


























assertEquals("0023456",
             Object.keys(JSON.parse('{"0023456": 1}'))[0]);
assertEquals("1234567890123",
             Object.keys(JSON.parse('{"1234567890123": 1}'))[0]);
assertEquals("123456789ABCD",
             Object.keys(JSON.parse('{"123456789ABCD": 1}'))[0]);
assertEquals("12A",
             Object.keys(JSON.parse('{"12A": 1}'))[0]);

assertEquals(1, JSON.parse('{"0":1}')[0]);
assertEquals(undefined, JSON.parse('{"00":1}')[0]);
