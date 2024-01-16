















function test_1 ()
{
 'use strict';

 Object.defineProperty (Number.prototype,
                        'getter',
                        { get : function () { return this; }, configurable : true });

 assert ((10).getter === 10);
 assert (typeof ((10).getter) === 'number');

 delete Number.prototype.getter;
}

test_1 ();
