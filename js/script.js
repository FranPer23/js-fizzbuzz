
const listEl = document.getElementById("list");


//multipli di 3 fizz, multipli di 5 buzz. multipli di entrambi fizzbuzz

for (let i = 0; i <= 100; i ++) {
  listEl.innerHTML += `<li>${i}</li>`
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log("FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log("Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log("Buzz");
  }
  
}



