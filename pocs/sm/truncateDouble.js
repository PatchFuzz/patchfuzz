function truncate(x) {
  return x | 0;
}

print(truncate(0xffffffff), -1);
print(truncate(0xffffffff + 5000.5), 4999);
print(truncate(-0xffffffff - 5000.5), -4999);
