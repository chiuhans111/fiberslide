<template>
  <div ref="main">
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >
      <template v-if="$parent.show">
        <slot></slot>
      </template>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["link"],
  name: "Item",
  data() {
    return {
      div: null,
      div2: null
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getComputedStyle() {
      let el = (this.$slots.default[0])
      console.log(el)
      console.log(el.elm)
      return getComputedStyle(el.elm);
    },
    /**@param el {HTMLElement} */
    swipe(el, mid, done) {
      let delay =
        Math.sqrt(
          Array.from(el.parentElement.parentElement.children).indexOf(
            el.parentElement
          ) / el.parentElement.parentElement.children.length
        ) * 0.3;

      setTimeout(() => {
        /**@type {ClientRect} */
        let box = el.getBoundingClientRect();
        let box2 = el.parentElement.getBoundingClientRect();
        let div = (this.div = document.createElement("div"));

        this.div.style.position = "absolute";

        this.div.style.left = box.left - box2.left + "px";
        this.div.style.top = box.top - box2.top - 5 + "px";
        this.div.style.width = box.width + "px";
        this.div.style.height = box.height + 10 + "px";

        this.div2 = document.createElement("div2");
        this.div2.classList.add(this.$style.cover);

        this.div.append(this.div2);
        el.parentElement.append(this.div);
        // ...

        setTimeout(() => {
          mid();
        }, 400);

        setTimeout(() => {
          el.parentElement.removeChild(div);
          done();
        }, 900);
      }, delay * 1000);
    },

    // --------
    // ENTERING
    // --------

    /**@param el {HTMLElement} */
    beforeEnter: function(el) {
      el.style.opacity = 0;
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    enter: function(el, done) {
      this.swipe(
        el,
        function() {
          el.style.opacity = 1;
        },
        done
      );
    },
    afterEnter: function(el) {
      // ...
    },
    enterCancelled: function(el) {
      // ...
    },

    // --------
    // LEAVING
    // --------

    beforeLeave: function(el) {
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    /**@param el {HTMLElement} */
    leave: function(el, done) {
      // ...

      if (this.link) {
        let linked = this.link.$el;

        console.log(linked);

        let target = this.link.getComputedStyle();
        let targetBox = linked.getBoundingClientRect();
        let box = el.getBoundingClientRect();

        // document.body.append(el);
        el.style.position = "fixed";
        el.style.zIndex = "2";
        el.style.left = box.left + "px";
        el.style.top = box.top + "px";

        setTimeout(() => {
          el.style.left = targetBox.left + "px";
          el.style.top = targetBox.top + "px";
          el.style.fontSize = target.fontSize;
          console.log(target.fontSize);
          el.style.transition = "all 0.5s";
        }, 10);

        setTimeout(() => {
          done();
        }, 600);
      } else
        this.swipe(
          el,
          function() {
            el.style.opacity = 0;
          },
          done
        );
    },
    afterLeave: function(el) {
      // ...
    },
    // leaveCancelled only available with v-show
    leaveCancelled: function(el) {
      // ...
    }
  }
};
</script>

<style lang="scss" module>
.cover {
  // animation: swipe 1s;
  position: relative;
  display: block;
  width: 0%;
  height: 100%;
  left: 100%;
  background-color: white;
  animation: swipe 0.8s;
}

@keyframes swipe {
  0% {
    width: 0%;
    left: 0;
    animation-timing-function: cubic-bezier(1, 0, 1, 1);
  }
  50% {
    width: 100%;
    left: 0;
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    width: 0;
    left: 100%;
  }
}
</style>