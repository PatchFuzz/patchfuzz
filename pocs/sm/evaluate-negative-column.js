const column = evaluate("new Error().columnNumber;", { columnNumber: -1 });
print(column, 1);
