const re = new RegExp("(?<=(.)\\2.*(T))");
re.exec(undefined);
print(re.exec("bTaLTT")[1], "b");
