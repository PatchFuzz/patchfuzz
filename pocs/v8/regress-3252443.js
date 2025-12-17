var document = new Object();
document.getElementById = function(s) { return { style: {}}};
function x(p0, p1, p2, p3) {
  document.getElementById(p1+p0).style.display='';
  document.getElementById(p1+''+p0).style.backgroundColor = "";
  document.getElementById(p1+''+p0).style.color="";
  document.getElementById(p1+''+p0).style.borderBottomColor = "";
  for (var i = p3; i <= p2; ++i) {
    if (i != p0) {
      document.getElementById(p1+i).style.display='';
      document.getElementById(p1+''+i).style.backgroundColor = "";
      document.getElementById(p1+''+i).style.color="";
      document.getElementById(p1+''+i).style.borderBottomColor = "";
    }
  }
}

x(1, "xxx", 10000, 1)
