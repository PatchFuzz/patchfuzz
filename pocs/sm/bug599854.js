;
print(/(?:(?:(")(c)")?)*/.exec('"c"'), [ '"c"', '"', "c" ]);
print(/(?:(?:a*?(")(c)")?)*/.exec('"c"'), [ '"c"', '"', "c" ]);
print(/<script\s*(?![^>]*type=['"]?(?:dojo\/|text\/html\b))(?:[^>]*?(?:src=(['"]?)([^>]*?)\1[^>]*)?)*>([\s\S]*?)<\/script>/gi.exec('<script type="text/javascript" src="..."></script>'), ['<script type="text/javascript" src="..."></script>', '"', "...", ""]);
