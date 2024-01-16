













try {
  eval(`class JSEtest {
      #test262;

      getPrivateReference() {
          return this.#test262;
      }

      setPrivateReference(value) {function    this.#test262 = value;
      }
      };
  `);
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}
