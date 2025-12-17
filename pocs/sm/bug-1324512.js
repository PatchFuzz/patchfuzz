evalInWorker(`
    if (!('gczeal' in this))
        quit();
    try {
      gczeal(2,1);
      throw new Error();
    } catch (e) {
      print("" + e, "Error");
    }
`);
