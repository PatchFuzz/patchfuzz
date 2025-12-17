var re = /A*(B)A*/d;
for (var i = 0; i < 100; i++) {
    var match = re.exec("xxxxxAAABAxxxxx");
    print(match.indices[0][0], 5);
    print(match.indices[0][1], 10);
    print(match.indices[1][0], 8);
    print(match.indices[1][1], 9);
}
