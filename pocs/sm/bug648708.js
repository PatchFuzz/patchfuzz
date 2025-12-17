thrown = false
try {
    ("".x = Object.seal)
    "".x.valueOf();
} catch (e) {thrown = true}
print(thrown, true);
