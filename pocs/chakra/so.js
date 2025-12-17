function echo(str)
{
  if(typeof(WScript) == "undefined")
  {
      print(str);
  }
  else
  {
      print(str);
  }
}

function f() { f(); }

var finally_ = 0;

try {

    try {
        try {

            f(); 
        } finally {
            finally_++;

            try {
                f(); 
            } finally {
                finally_++;
            }
        }

    } catch (ex) {

        
        try {
            f(); 
        } finally {
            finally_++;

            try {
                f(); 
            } finally {
                finally_++;
            }
        }

    }

} catch (ex) {
    echo(finally_ == 4 ? "PASS" : "FAIL");
}
