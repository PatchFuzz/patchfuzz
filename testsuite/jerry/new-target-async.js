

async function async_method () {
    assert (new.target === undefined);
}

async_method ();
