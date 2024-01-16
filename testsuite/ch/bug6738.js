





function jit() {
    let x = Math.round.call({}, 3133.7);
}

for (var i = 0; i < 0x1000; i++) {
    jit();
}

print("pass");
