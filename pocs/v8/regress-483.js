function X() {
  this.x = this.x.x;
}

X.prototype.x = {x:1}

new X()
