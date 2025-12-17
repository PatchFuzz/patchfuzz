;

function doesntThrowOnNullOrUndefinedDisposable() {
  using a = null;
  using b = undefined;
}
doesntThrowOnNullOrUndefinedDisposable();
