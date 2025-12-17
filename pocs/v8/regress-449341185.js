gc();
let re = /\p{Ll}/iu;
re.test("\u{118D4}");
%SetAllocationTimeout(1, 1);
re.test("\u{118B4}");
