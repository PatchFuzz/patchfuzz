j = 0;
out1:
for (i = 0; ; j++)
    if (j == 50)
        break out1;
while (++i < 100) {}

print(j, 50);
print(i, 100);
