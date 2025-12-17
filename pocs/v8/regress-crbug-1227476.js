print(
    () => {
      let ar = new Int32Array();
      ar.__defineGetter__(-2, function() {});
    }, TypeError);
