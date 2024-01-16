













var B = class {}
eval = class extends B {}

try {
  eval();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
