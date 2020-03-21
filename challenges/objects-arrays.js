// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/
// FUNCTION
function makeDinosaurObject(name, diet, weight, length, period) {
  let dinosaurObject = {
    name: name,
    diet: diet,
    weight: weight,
    length: length,
    period: period
  }
  return dinosaurObject;
};

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceous
// makeDinosaurObject('tyrannosaurus', 'carnivorous', '7000kg', '12m', 'Late Cretaceous');

let tyrannosaurus = makeDinosaurObject('tyrannosaurus', 'carnivorous', '7000kg', '12m', 'Late Cretaceous');


// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic


let stegosaurus = makeDinosaurObject('stegosaurus', 'herbivorous', '2000kg', '9m', 'Late Cretaceous');

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceous

let velociraptor = makeDinosaurObject('velociraptor', 'carnivorous', '1.8m', '9m', 'Late Cretaceous');

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(tyrannosaurus.weight);

// What was the diet of a velociraptor?
console.log(stegosaurus.carnivorous);

// How long was a stegosaurus?
console.log(stegosaurus.length);

// What time period did tyrannosaurus live in?
console.log(tyrannosaurus.period);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.

tyrannosaurus.roar = function () {
  return "RAWERSRARARWERSARARARRRR!";
};

console.log(tyronnosaurus.roar());


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests using any array method you like

const graduates = [
  { id: 1, first_name: "Cynde", university: "Missouri Southern State College", email: "ctorry0@macromedia.com" },
  { id: 2, first_name: "Saundra", university: "The School of the Art Institute of Chicago", email: "swhal1@state.gov" },
  { id: 3, first_name: "Lambert", university: "Marian College", email: "lparham2@techcrunch.com" },
  { id: 4, first_name: "Modestine", university: "International Medical & Technological University", email: "mdolder3@symantec.com" },
  { id: 5, first_name: "Chick", university: "Sultan Salahuddin Abdul Aziz Shah Polytechnic", email: "camorts4@google.com.au" },
  { id: 6, first_name: "Jakob", university: "Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft", email: "jharken5@spiegel.de" },
  { id: 7, first_name: "Robbi", university: "Salem University", email: "rbrister6@redcross.org" },
  { id: 8, first_name: "Colline", university: "Coastal Carolina University", email: "cbrosh7@alibaba.com" },
  { id: 9, first_name: "Michail", university: "Universidad Católica de Ávila", email: "mrome8@shinystat.com" },
  { id: 10, first_name: "Hube", university: "Universitat Rovira I Virgili Tarragona", email: "hlethbrig9@foxnews.com" },
];

/* Request 1: Create a new array called universities that contains all the universities in the graduates array. This will be an array of strings.

Once you have the new array created, log the result. */

function getUniversities(graduates) {
  const universities = [];
  graduates.forEach(student => universities.push(student.university));
  return universities;
};
getUniversities(graduates);

// console.log(universities);

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. This will be an array of strings.

The resulting contact information strings should have a space between the first name and the email, like this: 
"Josh josh@example.com"

Log the result of your new array. */
function getFirstLast(graduates) {
  const contactInfo = [];
  graduates.forEach(student => contactInfo.push(`${student.first_name} ${student.email}`));
  return contactInfo;
}
getFirstLast(graduates);
// console.log(contactInfo);

/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called unisWithUni that contains them all. This will be an array of objects. Log the result. */
function getString(graduates) {
  const unisWithUni = [];
  for (let i = 0; i < graduates.length; i++) {
    let uni = graduates[i];
    if (uni.university.indexOf('Uni') > -1) {
      unisWithUni.push(uni);
    }
  }
  return unisWithUni;
}
getString(graduates);

console.log(unisWithUni);


// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
  { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
  { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
  { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
  { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
  { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
  { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
  { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
  { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
  { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
];

/* Request 1: .forEach()

The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."

*/

function getNamesFunction(zooAnimals) {
  const displayNames = [];
  zooAnimals.forEach(animal => displayNames.push(`Name: ${animal.animal_name}, Scientific: ${animal.scientific_name}`));
  return displayNames;
};
getNamesFunction(zooAnimals);

console.log(displayNames);

/* Request 2: .map()

The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.

*/

function lowerAnimalNames(zooAnimals) {
  const lowCaseAnimalNames = [];
  zooAnimals.map(animal => lowCaseAnimalNames.push(animal.animal_name.toLowerCase()));
  return lowCaseAnimalNames;
}
lowerAnimalNames(zooAnimals);


console.log(lowCaseAnimalNames);

/* Request 3: .filter() 

The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.

*/

function populationCheck(zooAnimals) {
  const lowPopulationAnimals = [];
  zooAnimals.filter(animal => {
    if (animal.population < 5) {
      lowPopulationAnimals.push(animal);
    }
  })
  return lowPopulationAnimals;
};
populationCheck(zooAnimals);


console.log(lowPopulationAnimals);

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.

*/

function totalAnimalPopulation(zooAnimals) {
  return zooAnimals.reduce((accu, animal) => accu + animal.population, 0);
};
totalAnimalPopulation(zooAnimals);


console.log(populationTotal);


/*

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/

