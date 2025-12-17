;
const { Pattern } = Match;
const { OBJECT_WITH_EXACTLY } = Pattern;

import a from './bug-1899344.json' with { type: 'json' };

Pattern(OBJECT_WITH_EXACTLY({ 'hello': 'world' })).print(a);
