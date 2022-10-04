function Person(name, job, age){
        this.name = name,
        this.job = job,
        this.age = age
      }
     
     
     var exercise = (Person) => {
        console.log(`${this.name} said running is fun! - said no one ever`)
      }
    
      var fetchJob = (Person) => {
        console.log(`${this.name} is a ${this.job}`)
      }
    
    const programmer1 = new Person('Jackie', 'Backend-developer', 21);
    programmer1.exercise()
    programmer1.fetchJob()
    
    function Programmer(name, job, age, languages){
       
        this.name = name,
        this.job = job,
        this.age = age,
        this.languages = languages,
        this.isBusy = true;
      }
    
      completeTask();{
       var isBusy = false
       
      }
    
      acceptNewTask();{
        var isBusy = true
        
      }
      offerNewTask();{
        if(this.completeTask() === false){
          console.log(`${this.name} would love to take on a new responsibility`)
        }
    else {
          if(this.acceptNewTask() === true){
            console.log(`${this.name} can't accept any new tasks right now`)
          }
        }
      }
      learnLanguage();{
        console.log(`${this.name} would like to learn ${this.languages}`)
    }
    
      listLanguages();{
        let currentLanguagesSpoken = 'English'
        console.log(`${this.name} currently knows ${currentLanguagesSpoken} `)
      }
    
    const additionalProgramer = new Program('Shelby', 'Junior Software Engineer', 23, 'Japanese')
    additionalProgramer.exercise();
    additionalProgramer.fetchJob();
    additionalProgramer.offerNewTask();
    additionalProgramer.learnLanguage();
    additionalProgramer.listLanguages();
    
    
    const programmer2 = new Program('Arneatrice', 'Senior Software Engineer', 54, 'German')
    programmer2.exercise();
    programmer2.fetchJob();
    programmer2.offerNewTask();
    programmer2.learnLanguage();
    programmer2.listLanguages();