;

[1, "", true, Symbol(), undefined].forEach(props => {
    print(Object.getPrototypeOf(Object.create(null, props)), null);
});

print(() => Object.create(null, null), TypeError);
