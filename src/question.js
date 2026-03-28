class Question {
    // YOUR CODE HERE:
      constructor(text, choices, answer, difficulty) {
    // Save each argument as a property on the object
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
      }
    //
    // 1. constructor (text, choices, answer, difficulty)

    // 2. shuffleChoices()
      shuffleChoices() {
        for (let i = this.choices.length - 1; i > 0; i--) {
           let j = Math.floor(Math.random() * (i + 1));
           let temp = this.choices[i];       // save choices[i] before it gets overwritten
           this.choices[i] = this.choices[j]; // choices[i] is now overwritten — but temp has the old value
           this.choices[j] = temp;           // restore the old choices[i] into choices[j]
        }
      }

    }