const args = process.argv;
let actualArgs = "";

for (let x = 2; x < args.length; x ++) {
  actualArgs += args[x];
};


const reverse = function(words) {
  let output = "";

  for (let i = words.length -1; i >= 0; i --) {
      output += words[i];
    }
    console.log(output);
  }

console.log(reverse("light house labs"));
console.log(reverse("1 fish 2 fish"));
console.log(reverse("summer holiday yeow"));
console.log(reverse("it is 2023 baybay!"));
console.log(reverse(actualArgs));