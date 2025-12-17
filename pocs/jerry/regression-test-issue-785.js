try { RegExp.prototype.toString() } catch (err) {  }
try { isNaN.apply(unescape, JSON.stringify) } catch (err) {  }
try { Array.prototype.forEach(eval) } catch (err) {  }
try { RegExp.prototype.compile(RegExp.prototype) } catch (err) {  }
