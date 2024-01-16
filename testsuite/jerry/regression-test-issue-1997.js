













var a = Promise.resolve();
for (var i = 0; i < 200; i++)
{
    Promise.race([a]).then();
}
