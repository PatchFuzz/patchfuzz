try { JSON.parse(''); } catch(e) { print(e); }
try { JSON.parse('--'); } catch(e) { print(e); }
try { JSON.parse('{"asdf  }'); } catch(e) { print(e); }
try { JSON.parse('{"asdf" }'); } catch(e) { print(e); }
try { JSON.parse('{"asdf":1'); } catch(e) { print(e); }
try { JSON.parse("[23"); } catch(e) { print(e); }
try { JSON.parse("[23,]"); } catch(e) { print(e); }
