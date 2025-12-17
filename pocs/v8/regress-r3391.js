var evil_called = 0;
var evil_locale_called = 0;
var exception_thrown = 0;

function evil_to_string() {
  evil_called++;
  return this;
}

function evil_to_locale_string() {
  evil_locale_called++;
  return this;
}

var o = {toString: evil_to_string, toLocaleString: evil_to_locale_string};

try {
  [o].toLocaleString();
} catch(e) {
  exception_thrown++;
}

print(1, evil_called, "evil1");
print(1, evil_locale_called, "local1");
print(1, exception_thrown, "exception1");

try {
  [o].toString();
} catch(e) {
  exception_thrown++;
}

print(2, evil_called, "evil2");
print(1, evil_locale_called, "local2");
print(2, exception_thrown, "exception2");

try {
  [o].join(o);
} catch(e) {
  exception_thrown++;
}

print(3, evil_called, "evil3");
print(1, evil_locale_called, "local3");
print(3, exception_thrown, "exception3");
print("ok");
