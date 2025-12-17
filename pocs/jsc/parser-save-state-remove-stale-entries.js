try {
    eval("delete((a=++(b=b)) => {})");
} catch { }

try {
    eval("!(({a=(++((t)=((e))))})=>{})");
} catch { }

