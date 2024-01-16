





function COWSort() {
  const array = ["cc", "c", "aa", "bb", "b", "ab", "ac"];
  array.sort();
  return array;
}

assertArrayEquals(["aa", "ab", "ac", "b", "bb", "c", "cc"], COWSort());

Array.prototype.sort = () => {};

assertArrayEquals(["cc", "c", "aa", "bb", "b", "ab", "ac"], COWSort());
