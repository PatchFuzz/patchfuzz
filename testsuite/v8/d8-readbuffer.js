





























assertEquals("string", typeof TEST_FILE_NAME);

var a = new Uint8Array(readbuffer(TEST_FILE_NAME));


var expected = "

for (var i = 0; i < expected.length; i++) {
  assertEquals(expected.charCodeAt(i), a[i]);
}
