for (var i = 0; i < 2200; i++) {
  evalcx("function s(){}", evalcx('lazy'));
}


evalInWorker("");
