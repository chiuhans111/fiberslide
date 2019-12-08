<template>
  <div id="app" @click="nextPage">
    <display class="display" ref="display"></display>
    <div class="content" ref="pages">
      <page class="left">
        <h1>
          <span>光纖</span>
          <span>回音廊模態</span>
        </h1>
        <h1>
          <span>感測器</span>
          <span>之</span>
          <span>製作</span>
          <span>及</span>
          <span>應用</span>
        </h1>
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
        <br />
        <div>
          <img src="@/assets/whispering_gallery.jpg" style="height:50vh" alt />
          <p
            class="quote"
          >Photography: Matthew Biddulp / St Paul's Cathedral from the Whispering Gallery/</p>
        </div>
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
          <span>的特性可以分為兩種模式來探討：</span>
        </p>
        <div class="row row-center">
          <div style="width:40%; ">
            <h4>
              <span>衰減</span>
            </h4>
          </div>
          <div style="width:40%">
            <h4>相位差</h4>
          </div>
        </div>
        <div class="row row-center" style="height:40vh;">
          <div class="col" style="width:40%; ">
            <div>
              <img src="@/assets/fiber1.png" alt />
            </div>
          </div>
          <div class="col" style="width:40%">
            <img src="@/assets/fiber2.png" alt />
          </div>
        </div>
        <div class="row left">
          <div style="width:40%">
            <p block="true">
              <span>當光線在</span>
              <strong>彎折之光纖</strong>
              <span>中傳導會發生與直線傳輸時不同的衰減情形。</span>
            </p>
          </div>
          <div style="width:40%">
            <p block="true">
              <span>彎折後光纖會</span>
              <strong>產生新的光路</strong>
              <span>，與正常光路之間會有相位差，</span>
              <strong>產生干涉</strong>
              <span>。</span>
            </p>
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
          <span>衰減</span>
        </h2>
        <p>分為 ABC 三段，經過公式推導：</p>
        <div class="row row-center">
          <div class="col" style="width:50%">
            <img src="@/assets/fiber1.png" alt />
          </div>
          <div class="col" style="width:50%">
            <img src="@/assets/f1.png" alt />
          </div>
        </div>
        <p>彎曲半徑越小 → 損失係數越大</p>
      </page>
      <page>
        <h6 slot="parent">
          <span>光纖</span>
          <span>回音廊模態</span>
          <span>特性</span>
        </h6>
        <h2>
          <span>相位差</span>
        </h2>
        <div style="height:50vh">
          <img src="@/assets/fiber2.png" alt />
        </div>
        <img src="@/assets/f2.png" alt />
        <p>
          <strong>
            <span>光纖彎曲半徑</span>
          </strong>
          <span>與</span>
          <strong>
            <span>光纖直徑</span>
          </strong>
          <span>都會使內外光路產生相位差。</span>
        </p>
      </page>
      <page>
        <h6 slot="parent">
          <span>光纖</span>
          <span>回音廊模態</span>
          <span>特性</span>
        </h6>
        <h4>
          <span>相位差</span>
          <span>模擬動畫</span>
        </h4>
        <div slot="top">
          <img src="@/assets/fiber2.png" style="opacity:0" alt />
        </div>
        <demo1></demo1>
      </page>

      <page>
        <h3>
          <span>架構</span>
        </h3>
        <p>Architecture</p>
      </page>

      <page>
        <h6 slot="parent">
          <span>架構</span>
          <span>：種類</span>
        </h6>
        <h3>主要分成兩類：</h3>

        <br />
        <br />
        <div class="row row-center">
          <div style="width:50%">
            <h5>
              <span>一般光纖WGM</span>
            </h5>
          </div>
          <div style="width:45%">
            <h5>
              <span>微型光纖WGM</span>
            </h5>
          </div>
        </div>
        <div class="row row-center">
          <div class="col" style="width:50%">
            <img src="@/assets/steps1.png" alt />
          </div>
          <div class="col" style="width:45%">
            <img src="@/assets/steps2.png" alt />
          </div>
        </div>
        <br />
        <div class="row row-center">
          <div style="width:50%">
            <p>
              <span>主要感測</span>
              <strong>應力變化</strong>
              <span>與作為</span>
              <strong>濾波器</strong>
              <span>使用</span>
            </p>
          </div>
          <div style="width:45%">
            <p>
              <span>主要針對</span>
              <strong>壓力</strong>
              <span>與</span>
              <strong>溫度</strong>
              <span>進行感測</span>
            </p>
          </div>
        </div>
      </page>
      <page>
        <h6 slot="parent">
          <span>架構</span>
          <span>：</span>
          <span>光纖蝕刻製作步驟</span>
        </h6>
        <h4>
          <span>一般光纖WGM</span>
        </h4>
        <br />
        <div style="height:50%">
          <img src="@/assets/steps1.png" alt />
        </div>
      </page>
      <page>
        <h6 slot="parent">
          <span>架構</span>
          <span>：</span>
          <span>一般光纖WGM</span>
        </h6>
        <br />
        <br />

        <div class="row" style="height:40vh">
          <div class="col" style="width:45%">
            <h5>微動平台控制光纖彎曲</h5>
            <img src="@/assets/arch1.png" alt />
          </div>
          <div class="col" style="width:45%">
            <h5>極化控制系統</h5>
            <img src="@/assets/arch4.png" alt />
          </div>
        </div>
        <br />
        <div class="row" style="height:40vh">
          <div class="col" style="width:45%">
            <h5>低頻能量解調</h5>
            <img src="@/assets/arch2.png" alt />
          </div>
          <div class="col" style="width:45%">
            <h5>高頻能量解調</h5>
            <img src="@/assets/arch3.png" alt />
          </div>
        </div>
      </page>
      <page>
        <h6 slot="parent">
          <span>架構</span>
          <span>：</span>
          <span>微影製程步驟</span>
        </h6>
        <h4>
          <span>微型光纖WGM</span>
        </h4>
        <div style="height:80vh">
          <img src="@/assets/steps2.png" alt />
        </div>
      </page>
      <page>
        <h6 slot="parent">
          <span>架構</span>
          <span>：</span>
          <span>微型光纖WGM</span>
        </h6>
        <div style="height:35vh">
          <h5>壓力感測</h5>
          <img src="@/assets/arch5.png" alt />
        </div>
        <br />
        <br />
        <div style="height:35vh">
          <h5>溫度感測</h5>
          <img src="@/assets/arch6.png" alt />
        </div>
      </page>
      <page>
        <h3>
          <span>總結</span>
        </h3>
        <br />
        <p>
          <strong>
            <span time="1000">彎曲</span>
            <span time="1000">光纖</span>
          </strong>
          <span time="1000">形成</span>
          <span time="1000">回音廊模態</span>
          <span time="1000">，會使入射光在</span>
          <strong time="1000">特定波長產生干涉</strong>
          <span>。</span>
        </p>
        <p>
          <span time="1000">干涉波長會受</span>
          <strong time="1000">彎曲半徑</strong>
          <span time="1000">影響，因此可</span>
          <span time="1000">製作</span>
          <span time="1000">成</span>
          <span time="1000">感測器</span>
          <span time="1000">使用。</span>
        </p>
        <p>
          <span time="1000">彎曲半徑可以透過</span>
          <strong time="1000">應力、壓力或溫度</strong>
          <span time="1000">改變。</span>
        </p>
        <p>
          <span time="1000">干涉的結果也可以</span>
          <span time="1000">應用</span>
          <span time="1000">於</span>
          <strong time="1000">可調濾波器</strong>
          <span time="1000">。</span>
        </p>

        <div slot="footer">
          <h6>論文來源</h6>
          <p block="true" class="quote">
            國立高雄應用科技大學
            機械與精密工程研究所 碩士論文 -
            光纖回音廊模態感測器之製作及應用
            <br />Fabrication and Application of the Optical Fiber Sensor
            Based on Bending Induced Whispering
            Gallery Mode
            <br />研究生：黃建彰
            指導教授：江家慶博士
            <br />中華民國 100 年 7 月
          </p>
        </div>
      </page>
    </div>
  </div>
</template>

<script>
import page from "@/components/Page.vue";
import display from "@/components/Display.vue";
import demo1 from "@/components/interative/demo1.vue";

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
  components: { page, display, demo1 },
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

      // if (p < 0) p = 0;
      // if (p >= this.len) p = this.len - 1;

      if (this.len > 0) {
        while (p < 0) p += this.len;
        if (p >= this.len) p %= this.len;
      } else p = 0;

      this.page_count = p;
      this.$refs.display.goto(this.$refs.pages.children[this.page_count]);
      localStorage.page_count = p;
    },
    nextPage(e) {
      console.log(e);
      if (e.target.tagName == "INPUT") return;
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
