






let tests = [
    {
        name: "Reject promise with no reactions.",
        body: function(index)
        {
            let controller;
            let promise = new Promise((resolve, reject)=>{
                controller = {resolve, reject};
            });
            controller.reject("Rejection from test " +  index);
        }
    },
    {
        name: "Reject promise with a catch reaction only.",
        body: function(index)
        {
            let controller;
            let promise = new Promise((resolve, reject)=>{
                controller = {resolve, reject};
            }).catch(()=>{});
            controller.reject("Rejection from test " +  index);
        }
    },
    {
        name: "Reject promise with catch and then reactions.",
        body: function(index)
        {
            let controller;
            let promise = new Promise((resolve, reject)=>{
                controller = {resolve, reject};
            }).then(()=>{}).catch(()=>{});
            controller.reject("Rejection from test " +  index);
        }
    },
    {
        name: "Reject promise then add  a catch afterwards.",
        body: function(index)
        {
            let controller;
            let promise = new Promise((resolve, reject)=>{
                controller = {resolve, reject};
            });
            controller.reject("Rejection from test " +  index);
            promise.catch(()=>{});
        }
    },
    {
        name: "Reject promise then add two catches afterwards.",
        body: function(index)
        {
            let controller;
            let promise = new Promise((resolve, reject)=>{
                controller = {resolve, reject};
            });
            controller.reject("Rejection from test " +  index);
            promise.catch(()=>{});
            promise.catch(()=>{});
        }
    },
    {
        name: "Async function that throws.",
        body: function(index)
        {
            async function aFunction()
            {
                throw ("Rejection from test " +  index);
            }
            aFunction();
        }
    },
    {
        name: "Async function that throws but is caught.",
        body: function(index)
        {
            async function aFunction()
            {
                throw ("Rejection from test " +  index);
            }
            aFunction().catch(()=>{});
        }
    },
    {
        name: "Async function that awaits a function that throws.",
        body: function(index)
        {
            async function aFunction()
            {
                throw ("Rejection from test " +  index);
            }
            async function bFunction()
            {
                await aFunction();
            }
            bFunction();
        },
    },
    {
        name: "Reject a handled promise then handle one of the handles but not the other.",
        body: function(index)
        {
            let controller;
            let promise = new Promise((resolve, reject) => {  controller = {resolve, reject};});
            let a = promise.then(() => {});
            let b = promise.then(() => {});
            controller.reject("Rejection from test " +  index);

            let c = a.then(() => {}); 

            c.catch(() => {b.then(()=>{})}); 
            
            
            
        },
    },
    {
        name: "Reject a handled promise and don't handle either path.",
        body: function(index)
        {
            let controller;
            let promise = new Promise((resolve, reject) => {  controller = {resolve, reject};});
            let a = promise.then(() => {});
            let b = promise.then(() => {});
            controller.reject("Rejection from test " +  index);

            let c = a.then(() => {}); 

            
            
        }
    }
];

for(let i = 0; i < tests.length; ++i)
{
    WScript.Echo('Executing test #' + (i + 1) + ' - ' + tests[i].name);
    tests[i].body(i+1);
}
WScript.Echo("Begin async results:");
