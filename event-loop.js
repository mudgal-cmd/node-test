console.log('First statement executed');

(function (){
  console.log('Second statement');
})();

setTimeout(()=>{
  console.log('Inside set timeout function');
}, 0);

console.log('Third statement executed');

setTimeout(()=>{
  console.log('Second timeout executed');
}, 0);
