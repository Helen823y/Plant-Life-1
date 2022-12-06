class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("(0-100) Enter Sunlight");
    this.input2 = createInput("(0-10) Enter Water");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("My Plant Game");
    this.title.position(500, 0);

    this.question.html("Question:- What is the right way to nourish your plant" );
    this.question.position(150, 80);

    this.input1.position(900, 100);
    this.input2.position(900, 300);
    this.button.position(350, 150);

    this.button.mousePressed(()=>{
       
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(350, 350);

     SunIntensity=this.input1.value();
     WaterIntensity=this.input2.value();

     if (SunIntensity>=80 || SunIntensity<=60)
     {
       plant.addImage(RottedPlantImage,1190,500,10,10)
     }
     if (WaterIntensity<=4 || WaterIntesity>=6)
     {
      
       plant.addImage(RottedPlantImage,1190, 500, 10, 10)
     }

    });
  }

}
