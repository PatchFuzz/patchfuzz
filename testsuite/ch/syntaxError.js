




try { JSON.parse(''); } catch(e) { WScript.Echo(e); }
try { JSON.parse('--'); } catch(e) { WScript.Echo(e); }
try { JSON.parse('{"asdf  }'); } catch(e) { WScript.Echo(e); }
try { JSON.parse('{"asdf" }'); } catch(e) { WScript.Echo(e); }
try { JSON.parse('{"asdf":1'); } catch(e) { WScript.Echo(e); }
try { JSON.parse("[23"); } catch(e) { WScript.Echo(e); }
try { JSON.parse("[23,]"); } catch(e) { WScript.Echo(e); }
