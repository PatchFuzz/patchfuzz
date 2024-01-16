













delete JSON[Symbol.toStringTag];
JSON[Symbol.toStringTag ] = "𖠀";
assert (Map.prototype.toString.call(JSON) === "[object 𖠀]");
