<template>
  <div>
    <div v-for="(step, stepIndex) in quest" class="quest-wrapper" v-if="stepIndex === currentStep" :key="stepIndex">
      <div class="quest-image">
        <img class="quest-image__screen" :src="step.image">
      </div>
      <div class="quest-title">{{step.title}}</div>
      <div class="quest-responses">
        <div v-on:dblclick="response.right ? currentStep++ : ''"
          class="quest-responses__item"
          v-for="(response, responseIndex) in step.responses"
          :key="responseIndex"
          v-html="response.text">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .quest-image {

  }
  .quest-image__mockup {
    max-width: 500px;
  }
</style>


<script>
const quest = [
  {
    title: "U're sitting and scrolling Instagram and suddenly met a nice girl. What will you do?",
    image: "https://res.cloudinary.com/souljorje/image/upload/v1520793873/1_yjf79w.jpg",
    responses: [
      {
        text: "Just take a look and continiue living"
      },
      {
        text: "She looks interesting. Subscribe and write her later.",
        right: true,
      }
    ]
  },
  {
    title: "What are you going to write her?",
    image: "https://res.cloudinary.com/souljorje/image/upload/v1520793872/2_xcvxdc.jpg",
    responses: [
      { text: "Say hello somehow", right: true, nextStep: 2 },
      { text: "Act like a gangsta" }
    ]
  },
  {
    title: "Damn, it's a shame, man...",
    image: "https://cloudinary.com/console/media_library#/dialog/image/upload/3alt_fxbpxh",
    responses: []
  },
  {
    title: "What's now?",
    image: "https://res.cloudinary.com/souljorje/image/upload/v1520793872/4_f7aoag.jpg",
    responses: [
      { text: "Ask her name", right: true, nextStep: 2 },
      { text: "Tell a haiku" }
    ]
  },
  {
    title: "Oh my gush, u're looser...",
    image: "https://cloudinary.com/console/media_library#/dialog/image/upload/3alt_fxbpxh",
    responses: []
  },
  {
    title: "U're doin' fine! Next turn.",
    image: "https://cloudinary.com/console/media_library#/dialog/image/upload/6_sjy1om",
    responses: [
      { text: "Wonder by her name and tell yours.", right: true, nextStep: 2 },
      { text: "Joke stupidly" }
    ]
  },
  {
    title: "Oh my gush, u're looser...",
    image: "https://cloudinary.com/console/media_library#/dialog/image/upload/5alt_wuwf1e",
    responses: []
  },
  {
    title: "U're doin' fine! Next turn.",
    image: "https://cloudinary.com/console/media_library#/dialog/image/upload/5_f6xhvl",
    responses: [
      { text: "What's your name?", right: true, nextStep: 2 },
      { text: "Your hair is winter fire<br/>January embers<br/>My heart burns there, too." }
    ]
  },
  {
    title: "Oh my gush, u're looser...",
    image: "https://cloudinary.com/console/media_library#/dialog/image/upload/5alt_wuwf1e",
    responses: []
  },
];
export default {
  data() {
    return {
      mockup: 'https://res.cloudinary.com/souljorje/image/upload/v1520783602/mockup_xfvo4f.png',
      quest,
      currentStep: 0
    };
  },
  methods: {
    goToStep(index) {
      this.currentStep = index;
    }
  }
};
</script>
