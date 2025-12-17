function f(a) {
    switch(a) {
        case 3: return 3;
        case 4: return 4;
        default: return -1;
    }
}

print(f(-0.0), -1);
print(f(3.14), -1);
print(f(12.34), -1);

