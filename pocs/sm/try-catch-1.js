function F() {
    try {
	var T = {};
        throw 12;
    } catch (e) {
	
        T.x = 5;
    }
}
F();
F();
F();
