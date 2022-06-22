const ageToVote = 18

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE

// 2
let currentYear = 2022
let jsReleaseYear = 1995
let myVar = 'current age of JavaScript is'
let currentAge = (currentYear) - (jsReleaseYear)
  console.log(myVar, currentAge)

if(currentAge > ageToVote){
  console.log('JavaScript is old enough to vote')
} else if (currentAge < ageToVote){
  console.log('JavaScript is not old enough to vote')
}


//3
console.log('Starting')
for(let i = 0; i <= 100; i+=10){
  console.log(i);
  if(i === 50){
    console.log(i + ' Halfway')
  }
  else if(i === 100){
    console.log(i + ' Finished')
  }
}


//4
let text = `${user.name}, lives at ${user.address.street}, ${user.address.city}`
console.log(text)


//5
for (let i = 0; i < cases.length; i++) {
  let story = cases[i];
  console.log(story.title, story.releaseYear);
}

for (let i = 0; i < cases.length; i++) {
  let story = cases[i];
  if(story.releaseYear === 1903){
    console.log(story.title);
  }
}


