function shouldBe(actual, expected) {
  if (actual !== expected)
      throw new Error('bad value: ' + actual);
}
const byteRegexp = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;


const base64 =
  "iVBORw0KGgoAAAANSUhEUgAABkAAAAMgCAYAAAB7wK5aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUACZbYSURBVHgB7P1LoivJbiUKAuxUvvlPUDUEVSfVIirohvUB3HkilL+nlMh742zS3T4wAGsBBvPNnf/6L


shouldBe(base64.match(byteRegexp) !== null, true);