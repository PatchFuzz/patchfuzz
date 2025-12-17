print("x".repeat(3).match(/x(?<=^x{3})/), ["x"]);
print("x".repeat(4).match(/x(?<=^x{4})/), ["x"]);
print("x".repeat(7).match(/x(?<=^x{7})/), ["x"]);
print("x".repeat(17).match(/x(?<=^x{17})/), ["x"]);
