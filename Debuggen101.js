const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89, date: 1931},
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59, date: 1961},
    { name: "A. Curry", profession: "kikvorsman", age: 32, date: 1988},
    { name: "F. Vonk", profession: "slangenmelker", age: 36, date: 1984},
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27, date: 1993},
    { name: "Dr.Evil", profession: "digital overlord", age: 56, date: 1964}
  ];
  
  for (let person of array) {
    console.log("Dit is de gehele persoon" , person);  
    console.log("dit is naam" , person.name);
    console.log("geboortejaar" , person.date);
    console.log("namen + beroep" , person.name + " is een " +  person.profession); 

  if (person.age >= 50) {
    console.log("Deze persoon is ouder dan 50 jaar")
  }
    // console.log("Dit is de gehele persoon:",{ name: "N. Armstrong", profession: "spacecowboy", age: 8});
    // console.log("Dit is de gehele persoon:",{ name: "H. de Haan", profession: "kippen hypnotiseur", age: 59});
    // console.log("Dit is de gehele persoon:",{ name: "A. Curry", profession: "kikvorsman", age: 32});
    // console.log("Dit is de gehele persoon:",{ name: "F. Vonk", profession: "slangenmelker", age: 36});
    // console.log("Dit is de gehele persoon:",{ name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27});
    // console.log("Dit is de gehele persoon:",{ name: "Dr.Evil", profession: "digital overlord", age: 56});
    // console.log("Dit is naam:", { name: "N. Armstrong"})
    // console.log("Dit is naam:", { name: "H. de Haan"})
    // console.log("Dit is naam:", { name: "A. Curry"})
    // console.log("Dit is naam:", { name: "F. Vonk"})
    // console.log("Dit is naam:", { name: "B. Bunny"})
    // console.log("Dit is naam:", { name: "Dr.Evil"})
    // console.log("Geboortejaar:", { date: 2012})
    // console.log("Geboortejaar:", { date: 1961})
    // console.log("Geboortejaar:", { date: 1988})
    // console.log("Geboortejaar:", { date: 1984})
  }