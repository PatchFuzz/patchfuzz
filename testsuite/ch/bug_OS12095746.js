




import("bug_OS12095746_mod0.js")
    .then((m)=>{ console.log('mod0 fail'); })
    .catch((e)=>{ console.log("mod0 catch:"+e.message); });

import('bug_OS12095746_mod1.js')
    .then((m)=>{ console.log('mod1 fail'); })
    .catch((e)=>{
        console.log('mod1 catch:'+e.message);
        import('bug_OS12095746_mod2.js')
            .then((m)=>{ print('mod2 fail'); })
            .catch((e)=>{ print('mod2 catch:'+e.message); });
        });
