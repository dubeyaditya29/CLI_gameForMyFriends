

// Game for friends

//A game for my friend
var rls = require('readline-sync');
var chalk = require('chalk')
var score=0;

var name = rls.question('What is your name?');
console.log('Welcome '+chalk.underline.bgRed(name)+'\n'+'Let\'s play!! \nAnswer the following Questions About Me!!');

var age = rls.question('What is my age?');
if(age === '24'){
  score++;
  //console.log(score);
}
var company = rls.question('Name the company I work for..');
if(company === 'tcs' || company === 'TCS' || company === 'Tcs'){
  score++;
  //console.log(score);
}

var petName = rls.question('What is the name of my pet?');
if(petName === 'bobo'){
  score++;
  //console.log(score);
}
var songName = rls.question('Name my fav song?');
if(songName === 'kabira'){
  score++;
  //console.log(score);
}

var favFood = rls.question('Name my fav food?');
if(songName === 'kadhiChawal'){
  score++;
  //console.log(score);
}

var favFood = rls.question('whats my name?');
if(songName === 'aditya'){
  score++;
  //console.log(score);
}

if(score==0){
  console.log('You are not my friend  \n'+'You Scored '+score);
}else{
  console.log('Yayyy!! Lets party \n'+'You Scored '+score)
}

