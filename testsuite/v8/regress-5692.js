






var wasTouched = false;
l\u0065t:
do {
  break l\u0065t;
  wasTouched = true;
} while (false);


assertFalse(wasTouched);
