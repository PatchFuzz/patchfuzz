;

const disposedInClassStatic = [];
class staticBlockClass {
  static {
    using x = {
      value: 1,
      [Symbol.dispose]() {
        disposedInClassStatic.push(42);
      }
    };
  }
}
function testDisposalsInClassStatic() {
  const example = new staticBlockClass();
  disposedInClassStatic.push(43);
}
testDisposalsInClassStatic();
print(disposedInClassStatic, [42, 43]);

const disposedInDerivedCtor = [];
class baseClass {
  constructor() {
    disposedInDerivedCtor.push(43);
  }
}
class subClass extends baseClass {
  constructor() {
    try {
      using x = {
        value: 1,
        [Symbol.dispose]() {
          disposedInDerivedCtor.push(42);
        }
      };
    } finally {
      super();
    }
  }
}
function testDisposalsInDerivedCtor() {
  const example = new subClass();
  disposedInDerivedCtor.push(44);
}
testDisposalsInDerivedCtor();
print(disposedInDerivedCtor, [42, 43, 44]);
