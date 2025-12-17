let c = class {
  x = eval("");
};
new c;
%ForceFlush(%GetInitializerFunction(c));
new c;
