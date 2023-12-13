function main() {
  setInterval(() => {
    console.log("Counter: " + counter++);
  }, 1000);
}
let counter = 1;
main(counter);
