//Variables


let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
  {
    quote: `"Be yourself; everyone else is already taken."`,
    person: `Oscar Wilde`
  }, 
   {
    quote: `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
    person: `Marilyn Monroe`
  },  
  {
    quote: `"So many books, so little time."`,
    person: `Frank Zappa`
  },  
  {
    quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
    person: `Albert Einstein`
  },  
  {
    quote: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
    person: `Bernard M. Baruch`
  },  
  {
    quote: `"You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth."`,
    person: `William W. Purkey`
  },  
  {
    quote: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
    person: `Dr. Seuss`
  }, 
   {
    quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
    person: `Maya Angelou`
  },  
  {
    quote: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
    person: `Ralph Waldo Emerson`
  },
  {
    quote: `"Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do."`,
    person: `Steve Jobs`
  }
];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})