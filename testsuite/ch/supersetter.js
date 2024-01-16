






(function() {
    function __f_2530() {};
    __f_2530.prototype = {
      mSloppy() {
          super.ownReadonlyAccessor = 25;
          this.ownReadonlyAccessor;
      }
    }
    var __v_11980 = new __f_2530();
    Object.defineProperty(__v_11980, 'ownReadonlyAccessor', { 
        get: function () { console.log('hello');
        }, set: function () { console.log('goodbye'); }
    })
    __v_11980.mSloppy()
})();

