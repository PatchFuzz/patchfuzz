



"use strict";
{
  let one = () => {
    return "example.com";
  };

  let two = () => {
    return one();
  };

  assertEquals("example.com", two());
}
