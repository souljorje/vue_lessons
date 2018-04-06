<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show alert</button>
        <hr>
        <select name="animation" id="1" v-model="alertAnimation" class='form-control'>
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br><br>
        <transition :name="alertAnimation" type="transition">
          <div class="alert alert-info" v-if="show">Info about you, dumb</div>
        </transition>
        <transition :name="alertAnimation" type="animation">
          <div class="alert alert-info" v-if="show">Info about you, dumb</div>
        </transition>
        <transition
          appear
          enter-active-class="animated bounce"
          leave-active-class="animated shake"
          >
          <div class="alert alert-info" v-if="show">Info about you, dumb</div>
        </transition>
        <transition :name="alertAnimation" type="transition" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">Info about you, dumb</div>
          <div class="alert alert-warning" v-if="!show" key="warning">Info about you, dumb</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load = !load">Local / Remove element</button>
        <br><br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false">
          <div class="custom" style="width: 100px; height: 100px; background-color: lightblue"
          v-if="load">
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      alertAnimation: 'fade',
      load: false,
      elementWidth: 100,
    };
  },
  methods: {
    beforeEnter(element) {
      console.log('beforeEnter');
    },
    enter(element, done) {
      console.log('enter');
      let round = 1;
      const interval = setInterval(() => {
        element.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(element) {
      console.log('afterEnter');
    },
    enterCancelled(element) {
      console.log('enterCancelled');
      done();
    },
    beforeLeave(element) {
      console.log('beforeLeave');
    },
    leave(element, done) {
      console.log('leave');
      let round = 1;
      const interval = setInterval(() => {
        element.style.width = (element.clientWidth - round * 10) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(element) {
      console.log('afterLeave');
    },
    leaveCancelled(element) {
    },
  }
};
</script>

<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: .3s ease opacity;
  }
  .fade-leave {
    /* opacity: 1; */
  }
  .fade-leave-active {
    transition: .3s ease opacity;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  .slide-enter-active {
    animation: slide-in .3s ease forwards;
    transition: .3s ease opacity;
  }
  .slide-leave {
    /* opacity: 1; */
  }
  .slide-leave-active {
    animation: slide-out .3s ease forwards;
    transition: .3s ease opacity;
    opacity: 0;
  }

  @keyframes slide-in{
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out{
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
