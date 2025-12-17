var re = /.+/g;
re.exec("");
re.exec("anystring");
re=/.+/g;
re.exec("");
print(0, re.lastIndex);
