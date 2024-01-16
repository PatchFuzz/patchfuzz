



function quitInWorker() {
  quit();
};

for(let i = 0; i < 10; i++){
  new Worker(quitInWorker, ({type : 'function', arguments : []}));
}
