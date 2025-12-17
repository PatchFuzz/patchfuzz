function hello()
{
    var regex = /blah/;
    print("blah: " + regex.blah);
    regex.blah = 1;
    print("blah: " + regex.blah);
}

hello();
hello();
