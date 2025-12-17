var null_var = null;
var undef_var = [][0];
var boolean_var = false;
var number_var = 0;
var string_var = "";
var object_var = { foo : 0 };

print(null_var == null_var);
print(null_var == undef_var);
print(null_var != boolean_var);
print(null_var != number_var);
print(null_var != string_var);
print(null_var != object_var);

print(undef_var == null_var);
print(boolean_var != null_var);
print(number_var != null_var);
print(string_var != null_var);
print(object_var != null_var);
