var output = "";

function write(str) {
    if (typeof (WScript) == "undefined") {
        output += str + "\n";
        document.getElementById("writer").innerText = output; 
    } else {
        print(str);
    }
}

write("--- 1 ---");                                                               
try { write(eval('1+
try { write(eval('"a\0b"').length); } catch (e) { write(e); }                         
try { write(eval('\'a\0b\'').length); } catch (e) { write(e); }                       
try { write(eval('\0 = 1')); } catch (e) { write(e); }                                
try { write(eval('1')); } catch (e) { write(e); }                               
try { write(eval('1
try { write(eval('1\0')); } catch (e) { write(e); }                                 
