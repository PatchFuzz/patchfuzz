try {
  new class {
      static [function(){}] = [].trigger_error();
  }
} catch (e) {}
