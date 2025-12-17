print(/(\u039C)/i.test("\xB5"));
print(/(\u039C)+/i.test("\xB5"));
print(/(\u039C)/ui.test("\xB5"));
print(/(\u039C)+/ui.test("\xB5"));

print(/(\u03BC)/i.test("\xB5"));
print(/(\u03BC)+/i.test("\xB5"));
print(/(\u03BC)/ui.test("\xB5"));
print(/(\u03BC)+/ui.test("\xB5"));

print(/(\u03BC)/i.test("\u039C"));
print(/(\u03BC)+/i.test("\u039C"));
print(/(\u03BC)/ui.test("\u039C"));
print(/(\u03BC)+/ui.test("\u039C"));

print(/(\u0178)/i.test("\xFF"));
print(/(\u0178)+/i.test("\xFF"));
print(/(\u0178)/ui.test("\xFF"));
print(/(\u0178)+/ui.test("\xFF"));
