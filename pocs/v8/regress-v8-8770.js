const re = /^.*?Y((?=X?).)*Y$/s;
const sult = "YABCY";
const result = re.exec(sult);

print(result);
print([sult, "C"], result);
