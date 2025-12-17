var s = "('')x\nx\uF670";

print(s.match(/\((').*\1\)/i), ["('')", "'"]);
