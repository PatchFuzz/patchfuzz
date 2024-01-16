





assertEquals("foo", eval('switch(1) { case 1: "foo" }'));
assertEquals("foo", eval('{ switch(1) { case 1: "foo" } }'));
assertEquals("foo", eval('switch(1) { case 1: { "foo" } }'));
assertEquals("foo", eval('switch(1) { case 1: "foo"; break; case 2: "bar"; break }'));
assertEquals("bar", eval('switch(2) { case 1: "foo"; break; case 2: "bar"; break }'));
assertEquals("bar", eval('switch(1) { case 1: "foo"; case 2: "bar"; break }'));



assertEquals(undefined, eval('switch (1) {}'));
assertEquals(undefined, eval('switch (1) { case 1: {} }'));
