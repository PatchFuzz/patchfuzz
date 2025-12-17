var accesses = 100000;

for (var i = 0; i < accesses; i++)
    print(timesAccessed, i+1);

gc();

print(timesAccessed, accesses + 1);
