<template>
  <div id="app" @click="nextPage()">
    <display class="display" ref="display"></display>
    <div class="content" ref="pages">
      <page class="left">
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
          <span>光纖</span>
          <span>回音廊模態</span>
          <span>特性</span>
        </h3>
        <p>
          <span pkey="title_w">W</span>
          <span pkey="title_g">G</span>
          <span pkey="title_m">M</span>
          <span>的特性可以分為兩種模式來探討</span>
        </p>
        <div class="row">
          <div style="width:30%">
            <h4>
              <span>傳導衰減</span>
            </h4>
            <img src="@/assets/fiber1.png" alt />
          </div>
          <div style="width:30%">
            <h4>相位差干涉</h4>
            <img src="@/assets/fiber2.png" alt />
          </div>
        </div>
        <div class="row left">
          <div style="width:30%">
            <p>當光線在彎折之光纖中傳導會發生與直線傳輸時不同的衰減情形。</p>
          </div>
          <div style="width:30%">
            <p>彎折後光纖會產生新的光路，與正常光路之間會有相位差，產生干涉。</p>
          </div>
        </div>
      </page>
      <page>
        <h6 slot="parent">
          <span>光纖</span>
          <span>回音廊模態</span>
          <span>特性</span>
        </h6>
        <h2>
          <span>傳導衰減</span>
        </h2>
        <p>分為 ABC 三段，經過公式推導：</p>
        <div class="row">
          <div style="width:50%">
            <img src="@/assets/fiber1.png" alt />
          </div>
          <div>
            <!-- <div
              v-katex="'2\\alpha_B={1\\over 2}({\\pi\\over\\gamma^3R})^{1/2} {\\kappa^2\\over V^2K^2(\\gamma a)}\\exp(-{2\\gamma^3R\\over 2\\beta^2_0})'
            "
            ></div>

            <div
              v-katex="'2\\alpha={\\sqrt\\pi\\kappa^2\\times\\exp(-{2\\over 3}{\\gamma^3\\over\\beta^2}R)\\over 2\\gamma^{3/2}V^2\\sqrt{R}K^2_{+1}(\\gamma a)}'
            "
            ></div>-->

            <img src="@/assets/f1.png" alt />
          </div>
        </div>
        <p>彎曲半徑越大 = 損失係數越小</p>
      </page>
      <page>
        <h6 slot="parent">
          <span>光纖</span>
          <span>回音廊模態</span>
          <span>特性</span>
        </h6>
        <h2>相位差干涉</h2>
        <div style="height:50vh">
          <img src="@/assets/fiber2.png" alt />
        </div>
        <img src="@/assets/f2.png" alt />
      </page>
      <page>
        <img src="@/assets/fiber2.png" style="opacity:0" alt />
      </page>
    </div>
  </div>
</template>

<script>
import page from "@/components/Page.vue";
import display from "@/components/Display.vue";

export default {
  name: "app",
  data() {
    return {
      animation_id: null,
      time: 0,
      page_count: localStorage.page_count || 0,
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
      localStorage.page_count = p;
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
    this.goPage(this.page_count);
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
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.content {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  background: white;
  width: 100vh;
  height: 100vw;
}

@page {
  size: 338mm 190mm;
  margin: 0;
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
