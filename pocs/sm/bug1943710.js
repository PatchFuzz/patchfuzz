if ('captureStackTrace' in Error) {
  run(`
    a16 = {};
    Error.captureStackTrace(a16, Error)
  `);
  function run(code) {
    evaluate(code)
  }
}
