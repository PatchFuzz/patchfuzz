



Error.prepareStackTrace = (error, frames) => {
  
  
  JSON.stringify({}, frames[0].getFunction());
};
let v0;
try {
  throw new Error();
} catch (e) {
  e.stack
}
