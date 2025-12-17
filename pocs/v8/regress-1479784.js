const re = /(x)(x)(x)(x)(x)(x)(x)(x)|/g;
print("".replace(re, () => 42), "42");
