var f = () => this;
print(f(), this);
print({f: f}.f(), this);
