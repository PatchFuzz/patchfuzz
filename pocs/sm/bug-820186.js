function randomRecursion() {
    var y = ""
    if (rnd(2)) {
        var x = 2;
        "{" + x + "}";
        randomRecursion();
        randomRecursion();
        return [""];
    }
    return [""];
}

function thisFunctionIsNeverCalled() {
}

function testOne() {
    ox = newGlobal();
    var code = randomRecursion()[rnd(3)];
}

initRnd();
gczeal(10, 3);

for (var count = 0; count < 20; count++) {
    print(count);
    testOne()
}














function MersenneTwister19937()
{
	
	
	
	
	
	
	var N = 624;
	var M = 397;
	var MATRIX_A = 0x9908b0df;   
	var UPPER_MASK = 0x80000000; 
	var LOWER_MASK = 0x7fffffff; 
	
	
	var mt = new Array(N);   
	var mti = N+1;           

	function unsigned32 (n1) 
	{
		return n1 < 0 ? (n1 ^ UPPER_MASK) + UPPER_MASK : n1;
	}

	function subtraction32 (n1, n2) 
	{
		return n1 < n2 ? unsigned32((0x100000000 - (n2 - n1)) & 0xffffffff) : n1 - n2;
	}

	function addition32 (n1, n2) 
	{
		return unsigned32((n1 + n2) & 0xffffffff)
	}

	function multiplication32 (n1, n2) 
	{
		var sum = 0;
		for (var i = 0; i < 32; ++i){
			if ((n1 >>> i) & 0x1){
				sum = addition32(sum, unsigned32(n2 << i));
			}
		}
		return sum;
	}

	
	
	this.init_genrand = function (s)
	{
		
		mt[0]= unsigned32(s & 0xffffffff);
		for (mti=1; mti<N; mti++) {
			mt[mti] =
			
			addition32(multiplication32(1812433253, unsigned32(mt[mti-1] ^ (mt[mti-1] >>> 30))), mti);
			
			
			
			
			
			mt[mti] = unsigned32(mt[mti] & 0xffffffff);
			
		}
	}

	
	
	
	
	
	this.init_by_array = function (init_key, key_length)
	{
		
		var i, j, k;
		
		this.init_genrand(19650218);
		i=1; j=0;
		k = (N>key_length ? N : key_length);
		for (; k; k--) {
			
			
			mt[i] = addition32(addition32(unsigned32(mt[i] ^ multiplication32(unsigned32(mt[i-1] ^ (mt[i-1] >>> 30)), 1664525)), init_key[j]), j);
			mt[i] =
			
			unsigned32(mt[i] & 0xffffffff);
			i++; j++;
			if (i>=N) { mt[0] = mt[N-1]; i=1; }
			if (j>=key_length) j=0;
		}
		for (k=N-1; k; k--) {
			
			
			mt[i] = subtraction32(unsigned32((dbg=mt[i]) ^ multiplication32(unsigned32(mt[i-1] ^ (mt[i-1] >>> 30)), 1566083941)), i);
			
			mt[i] = unsigned32(mt[i] & 0xffffffff);
			i++;
			if (i>=N) { mt[0] = mt[N-1]; i=1; }
		}
		mt[0] = 0x80000000; 
	}

  this.export_state = function() { return [mt, mti]; };
  this.import_state = function(s) { mt = s[0]; mti = s[1]; };
  this.export_mta = function() { return mt; };
  this.import_mta = function(_mta) { mt = _mta };
  this.export_mti = function() { return mti; };
  this.import_mti = function(_mti) { mti = _mti; }

	
	
	this.genrand_int32 = function ()
	{
		
		
		var y;
		var mag01 = new Array(0x0, MATRIX_A);
		

		if (mti >= N) { 
			
			var kk;

			if (mti == N+1)   
				
				this.init_genrand(5489); 

			for (kk=0;kk<N-M;kk++) {
				
				
				y = unsigned32((mt[kk]&UPPER_MASK)|(mt[kk+1]&LOWER_MASK));
				mt[kk] = unsigned32(mt[kk+M] ^ (y >>> 1) ^ mag01[y & 0x1]);
			}
			for (;kk<N-1;kk++) {
				
				
				y = unsigned32((mt[kk]&UPPER_MASK)|(mt[kk+1]&LOWER_MASK));
				mt[kk] = unsigned32(mt[kk+(M-N)] ^ (y >>> 1) ^ mag01[y & 0x1]);
			}
			
			
			y = unsigned32((mt[N-1]&UPPER_MASK)|(mt[0]&LOWER_MASK));
			mt[N-1] = unsigned32(mt[M-1] ^ (y >>> 1) ^ mag01[y & 0x1]);
			mti = 0;
		}

		y = mt[mti++];

		
		
		
		
		
		y = unsigned32(y ^ (y >>> 11));
		y = unsigned32(y ^ ((y << 7) & 0x9d2c5680));
		y = unsigned32(y ^ ((y << 15) & 0xefc60000));
		y = unsigned32(y ^ (y >>> 18));

		return y;
	}

	
	
	this.genrand_int31 = function ()
	{
		
		return (this.genrand_int32()>>>1);
	}

	
	
	this.genrand_real1 = function ()
	{
		
		return this.genrand_int32()*(1.0/4294967295.0);
		
	}

	
	
	this.genrand_real2 = function ()
	{
		
		return this.genrand_int32()*(1.0/4294967296.0);
		
	}

	
	
	this.genrand_real3 = function ()
	{
		
		return ((this.genrand_int32()) + 0.5)*(1.0/4294967296.0);
		
	}

	
	
	this.genrand_res53 = function ()
	{
		
		var a=this.genrand_int32()>>>5, b=this.genrand_int32()>>>6;
		return(a*67108864.0+b)*(1.0/9007199254740992.0);
	}
	
}

function initRnd() {
  var fuzzMT = new MersenneTwister19937;
  var fuzzSeed = 53;
  fuzzMT.init_genrand(fuzzSeed);
  rnd = function (n) { var v = Math.floor(fuzzMT.genrand_real2() * n); return v; };
  rnd.rndReal = function() { return fuzzMT.genrand_real2(); };
  rnd.fuzzMT = fuzzMT;
}
