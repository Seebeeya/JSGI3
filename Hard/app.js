function dataSecurityExercise(){
    
    return function(){

      pii = {name: 'Shelby',

      ssn: 321-67-2109
    }
      console.log(`Hi ${pii.name}`)
    }
  }

  const result1 = dataSecurityExercise();
  result1();