function nightlyOnly(error, f) {
  if (getBuildConfiguration("release_or_beta")) {
    try {
      f();
      throw new Error("use of feature expected to fail on release and beta, but succeeded; please update test");
    } catch (e) {
      if (!(e instanceof error)) {
        throw e;
      }
      
    }
  } else {
    f();
  }
}
