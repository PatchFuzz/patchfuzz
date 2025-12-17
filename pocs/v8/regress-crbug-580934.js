"use strict";
{
  let one = () => {
    return "example.com";
  };

  let two = () => {
    return one();
  };

  print("example.com", two());
}
