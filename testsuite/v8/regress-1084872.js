



const re = new RegExp("(?<=(.)\\2.*(T))");
re.exec(undefined);
assertEquals(re.exec("bTaLTT")[1], "b");
