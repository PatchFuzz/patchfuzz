




let $0 = instantiate(`(module;;comment
)`);


let $1 = instantiate(`(module(;comment;)
(;comment;))`);


let $2 = instantiate(`(module
  (;comment(;nested(;further;)nested;)comment;)
)`);


let $3 = instantiate(`(module
  (;comment;;comment(;nested;)comment;)
)`);
