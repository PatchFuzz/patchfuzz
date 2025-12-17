if (this.Worker && this.quit) {
  try {
      new Function(new Worker("55"), {type: 'string'});
  } catch(err) {}

  quit();
}
