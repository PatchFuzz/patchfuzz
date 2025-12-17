new class {
  constructor() {
    new class {
      [new class extends(() => {
         try {
           super.test = 0;
         } catch {
         }

         return Array;
       })() {

      }()] = super.test;
    };
  }
};
