h = Function("a", "b", "c", "...rest", "return rest.toString();");
print(h.length, 3);
print(h(1, 2, 3, 4, 5), "4,5");
