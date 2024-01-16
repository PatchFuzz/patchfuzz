













class Animal {}
class Dog extends Animal {
  static explain () {
    super.f = 8
  }
}

assert (Dog.f === undefined);
assert (Animal.f === undefined);

Dog.explain ()

assert (Animal.f === undefined);
assert (Dog.f === 8);
