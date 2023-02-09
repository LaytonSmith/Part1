let favNumber = 66;
let baseURL = "http://numbersapi.com";

async function part1() {
  let info = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(info);
}
part1();


const favNumbers = [66, 7, 20];
async function part2() {
  let info = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(info);
}
part2();

async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(info => {
    $('body').append(`<p>${info.text}</p>`);
  });
}
part3();