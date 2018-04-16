<template>
  <div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">What is {{ expression }}?</h3>
  </div>
  <div class="panel-body">
    <div class="row">
      <div
        class="col-sm-6"
        v-for="(answer, index) in answers"
        :key="index">
        <button
          class="btn btn-primary btn-block"
          @click="checkAnswer(answer)">{{ answer }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
  .btn {
    margin: 5px 0;
  }
</style>


<script>
export default {
  data() {
    return {
      answers: [],
      rightAnswer: '',
      expression: ''
    }
  },
  props: ['newQuestion'],
  methods: {
    checkAnswer(answer) {
      if (this.rightAnswer == answer) {
        this.$emit('answerGiven', true);
      } else {
        this.$emit('answerGiven', false);
      }
    },
    generateQuestion() {
      const operator = Math.random() <= 0.5 ? '+' : '-';
      this.answers = [];
      this.expression = `${Math.round(Math.random() * 100)} ${operator} ${Math.round(Math.random() * 100)}`;
      this.rightAnswer = eval(this.expression);
      this.answers.push(this.rightAnswer);
      for (let i = 0; i < 3; i++) {
        const wrongExpression = `${this.expression} ${operator} ${Math.round(Math.random() * 50)}`;
        this.answers.push(eval(wrongExpression));
      }
    },
  },
  activated() {
      this.newQuestion ? this.generateQuestion() : null;
    },
}
</script>
