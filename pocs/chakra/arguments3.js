var echo = function(v) {
    print(v);
}

var get_args = function(a, b) {
    return arguments;
}

echo("--- toString test ---");
echo(get_args());
echo(get_args(1, '2', null));

echo("\n--- getOwnPropertyNames should enumerate all properties ---");



echo(Object.getOwnPropertyNames(
     get_args()));
echo(Object.getOwnPropertyNames(
     get_args(1)));
echo(Object.getOwnPropertyNames(
     get_args(1, 2)));

var a = get_args(1, 2, '3', 'arg4', 'arg5');
echo(Object.getOwnPropertyNames(a));

delete a[0];
delete a[1];
delete a[4];
a[0] = 'arg0';
echo(Object.getOwnPropertyNames(a));
