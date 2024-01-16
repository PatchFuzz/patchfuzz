





function target() {};

for (let key of Object.getOwnPropertyNames(this)) {
  try {
    let newTarget = this[key];
    let arg = target;
    Reflect.construct(target, arg, newTarget);
  } catch {}
}
