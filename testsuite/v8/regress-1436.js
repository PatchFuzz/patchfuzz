
































var global = this;
function non_strict(){ assertEquals(global, this); }
function strict(){ "use strict"; assertEquals(void 0, this); }
function strict_null(){ "use strict"; assertEquals(null, this); }

[2, 3].reduce(non_strict);
[2, 3].reduce(strict);
[2, 3].reduceRight(non_strict);
[2, 3].reduceRight(strict);



[2, 3].every(non_strict);
[2, 3].every(non_strict, undefined);
[2, 3].every(non_strict, null);
[2, 3].every(strict);
[2, 3].every(strict, undefined);
[2, 3].every(strict_null, null);

[2, 3].filter(non_strict);
[2, 3].filter(non_strict, undefined);
[2, 3].filter(non_strict, null);
[2, 3].filter(strict);
[2, 3].filter(strict, undefined);
[2, 3].filter(strict_null, null);

[2, 3].forEach(non_strict);
[2, 3].forEach(non_strict, undefined);
[2, 3].forEach(non_strict, null);
[2, 3].forEach(strict);
[2, 3].forEach(strict, undefined);
[2, 3].forEach(strict_null, null);

[2, 3].map(non_strict);
[2, 3].map(non_strict, undefined);
[2, 3].map(non_strict, null);
[2, 3].map(strict);
[2, 3].map(strict, undefined);
[2, 3].map(strict_null, null);

[2, 3].some(non_strict);
[2, 3].some(non_strict, undefined);
[2, 3].some(non_strict, null);
[2, 3].some(strict);
[2, 3].some(strict, undefined);
[2, 3].some(strict_null, null);
