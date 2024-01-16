



if (this.Worker) {
  var __v_8 =
    `var __v_9 = new Worker('postMessage(42)', {type: 'string'});
     onmessage = function(parentMsg) {
       __v_9.postMessage(parentMsg);
     };`;
  var __v_9 = new Worker(__v_8, {type: 'string'});
  __v_9.postMessage(9);
}
