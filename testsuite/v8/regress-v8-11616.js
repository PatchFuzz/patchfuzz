



assertEquals("x".repeat(3).match(/x(?<=^x{3})/), ["x"]);
assertEquals("x".repeat(4).match(/x(?<=^x{4})/), ["x"]);
assertEquals("x".repeat(7).match(/x(?<=^x{7})/), ["x"]);
assertEquals("x".repeat(17).match(/x(?<=^x{17})/), ["x"]);
