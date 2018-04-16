<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <transition name="rotate" mode="out-in">
          <keep-alive>
            <component
              :is="mode"
              @answerGiven="showAnswer($event)"
              :right="answer"
              @continue="showQuestion($event)"
              :newQuestion="wannaContinue">
            </component>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
.rotate-enter {
  transform: rotateY(90deg);
}
.rotate-enter-active {
  transition: 0.3s ease transform;
}
.rotate-leave {
}
.rotate-leave-active {
  transition: 0.3s ease transform;
  transform: rotateY(90deg);
}
</style>

<script>
import Question from "./components/Question.vue";
import Answer from "./components/Answer.vue";

export default {
  data() {
    return {
      mode: "app-question",
      answer: null,
      wannaContinue: true,
    };
  },
  methods: {
    showAnswer(answer) {
      this.answer = answer;
      this.mode = "app-answer";
    },
    showQuestion(next) {
      this.wannaContinue = next;
      this.mode = "app-question";
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer
  }
};
</script>

