



const worker = new Worker("onmessage = function(){}", {type: 'string'});
const buffer = new ArrayBuffer();
worker.postMessage(buffer, [buffer]);
try {
  worker.postMessage(buffer, [buffer]);
} catch (e) {
  if (e != "ArrayBuffer could not be transferred") {
    throw e;
  }
}
