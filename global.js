// 2-intro
// we will discuss the global variables
// in vanilla js we get dom and window object
// in node js we get the following
//      __dirname  => path to current directory
//      __filename => file name
//      require => function to use modules (CommonJS)
//      module => info about current module (file)
//      process => info about env where the program is being executed
//console.log(process); => returns a process object showing kya chutiya tarike se maine prototype as a concept padha hai
//console.log(__dirname); => returns the directory /home/....../Desktop..... whatever
//console.log(__filename); => kya hi crazy hojaega
//console.log(module); => module object with id '.' returned
//console.log(require) => paaji iske andar toh module object hai?
console.log(__dirname)
setTimeout(() => {
    console.log('helloWorld')
}, 1000);
