class Quiz {
    // YOUR CODE HERE:
    
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    // 2. getQuestion()
    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    
    // 3. moveToNextQuestion()
    moveToNextQuestion() {
        this.currentQuestionIndex = this.currentQuestionIndex + 1;
    }

    // 4. shuffleQuestions()
    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.questions[i];
            this.questions[i] = this.questions[j];
            this.questions[j] = temp;
        } 
    }

    // 5. checkAnswer(answer)
    checkAnswer(answer) {
        let currentQuestion = this.questions[this.currentQuestionIndex];
        if (answer === currentQuestion.answer) {
            this.correctAnswers = this.correctAnswers + 1;
        }
    }

    // 6. hasEnded()
    hasEnded() {
        if (this.currentQuestionIndex === this.questions.length) {
            return true;
        } else {
            return false;
        }
    }

    filterQuestionsByDifficulty(difficulty) {
        if ([1, 2, 3].includes(difficulty)) {
            this.questions = this.questions.filter(function(question) {
                return question.difficulty === difficulty;
            });
        }
    }

    averageDifficulty() {
    let totalDifficulty = this.questions.reduce(function(accumulator, question) {
      return accumulator + question.difficulty;
    }, 0);
    return totalDifficulty / this.questions.length;
  }


}


