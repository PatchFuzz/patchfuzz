config = getRealmConfiguration();

print(typeof config, "object");

for (const [key, value] of Object.entries(config)) {
  print(getRealmConfiguration(key), value);
}

config = getBuildConfiguration();

print(typeof config, "object");

for (const [key, value] of Object.entries(config)) {
  print(getBuildConfiguration(key), value);
}
