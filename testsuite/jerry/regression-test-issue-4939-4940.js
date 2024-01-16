













var date = new Date(1970, 0);
date.setYear(-0);
assert(date.getFullYear() === 1900)
