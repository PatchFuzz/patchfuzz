



if (this.Worker) {
  var __v_7 = new Worker('onmessage = function() {};', {type: 'string'});
  var e;
  var ab = new ArrayBuffer(2 * 1000 * 1000);
  try {
    __v_7.postMessage(ab);
    threw = false;
  } catch (e) {
    
    assertContains('cloned', e.message);
    threw = true;
  }
  assertTrue(threw, 'Should throw when trying to serialize large message.');
}
