const sentence = "hello there from lighthouse labs";

let time = 0;
// for (const char of sentence) {
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
  if (i !== (sentence.length - 1)) {
    process.stdout.write(sentence[i]);
  } if (i === (sentence.length - 1)) {
    process.stdout.write(sentence[i]+'\n');
  }
}, time) 
console.log('\n')
time += 50;
}