<template>
  <div id="app" @click="nextPage()">
    <display class="display" ref="display"></display>
    <div class="content" ref="pages">
      <page>
        <h1>
          <span>光纖</span>
          <span>回音廊模態</span>
        </h1>
        <h1>感測器之製作及應用</h1>
        <hr />
        <h3>光纖感測論文讀後報告 - 原理</h3>
        <p>光電三 106650004 邱柏翰</p>
      </page>
      <page>
        <h2>
          <span>回音廊模態</span>
        </h2>
        <h4>
          <span pkey="title_w">W</span>
          <span>ispering</span>
          <span class="blank"></span>
          <span pkey="title_g">G</span>
          <span>allery</span>
          <span class="blank"></span>
          <span pkey="title_m">M</span>
          <span>ode</span>
        </h4>
      </page>
      <page>
        <h3>
          <span>回音廊模態</span>
        </h3>
        <h4>
          <span pkey="title_w">W</span>
          <span pkey="title_g">G</span>
          <span pkey="title_m">M</span>
        </h4>
      </page>
      <page>
        <h3>
          <span>光纖</span>
          <span>回音廊模態</span>
          <span>特性</span>
        </h3>
        <p>WGM 的特性可以分為兩種模式來探討</p>
        <div class="row">
          <div style="width:30%">
            <h4>傳導衰減</h4>
            <img src="@/assets/fiber1.png" alt />
          </div>
          <div style="width:30%">
            <h4>相位差干涉</h4>
            <img src="@/assets/fiber2.png" alt />
          </div>
        </div>
      </page>
      <page>
        <h4>衰減</h4>
        <img src="@/assets/fiber1.png" alt />
      </page>
    </div>
  </div>
</template>

<script>
import page from "@/components/Page.vue";
import display from "@/components/Display.vue";
import "@/style/index.scss";

export default {
  name: "app",
  data() {
    return {
      animation_id: null,
      time: 0,
      page_count: 0,
      len: 0
    };
  },
  components: { page, display },
  computed: {},

  methods: {
    update() {
      this.time = new Date().getTime();
    },
    pagenum(x) {
      return this.page_count == x;
    },
    keydown(e) {
      console.log(e);
      if (e.key == "ArrowDown") this.goPage(this.page_count + 1);
      if (e.key == "ArrowUp") this.goPage(this.page_count - 1);
    },

    goPage(p) {
      if (isNaN(p)) p = 0;
      p = Math.floor(p);
      if (p < 0) p = 0;
      if (p >= this.len) p = this.len - 1;
      this.page_count = p;
      this.$refs.display.goto(this.$refs.pages.children[this.page_count]);
    },
    nextPage() {
      this.goPage(this.page_count + 1);
    },
    resize() {
      this.goPage(this.page_count);
    }
  },
  created() {
    let me = this;
    this.animation_id = setInterval(function() {
      me.update();
    });
    addEventListener("keydown", this.keydown);
    addEventListener("resize", this.resize);
  },
  mounted() {
    this.len = this.$refs.pages.children.length;
    this.goPage(0);
  },
  destroyed() {
    clearInterval(this.animation_id);
    removeEventListener("keydown", this.keydown);
    removeEventListener("resize", this.resize);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.content {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  width: 100vh;
  height: 100vw;
}

@page {
  size: 338mm 190mm;
}

@media print {
  .content {
    opacity: 1;
    height: auto;
  }
  .display {
    display: none;
  }
  #app {
    height: auto;
    overflow: unset;
  }
}
</style>
