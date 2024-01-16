function C() {
  this.x = this[this.y = "foo"]--;
}


new C;
