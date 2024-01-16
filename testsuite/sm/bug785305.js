


Reflect.parse("\
  function l(x = (function() {})) {\
	function x() {}\
  }\
")
