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
        <h3>光纖感測論文讀後報告</h3>
        <p>光電三 106650004 邱柏翰</p>
      </page>

      <page>
        <h3>
          <span>摘要與動機</span>
        </h3>
        <p>INTRODUCTION</p>
      </page>

      <page>
        <h2>
          <span>回音廊模態</span>
        </h2>
        <h4>
          <span pkey="title_w">W</span>
          <span>hispering</span>
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

      <page class="left">
        <h6 slot="parent">
          <span>摘要</span>
        </h6>
        <h3>
          <span>光纖</span>
          <span>回音廊模態</span>
          <span>(</span>
          <span pkey="title_w">W</span>
          <span pkey="title_g">G</span>
          <span pkey="title_m">M</span>
          <span>)</span>
        </h3>
        <p>
          <span>1.</span>
          <strong>光纖彎曲180度</strong>
          <span>後會導致光線產生</span>
          <strong>干涉波長、強度</strong>
          <span>的改變</span>
        </p>
        <p>
          <span>2. 可用於</span>
          <strong>溫度感測</strong>
          <span>，對升溫靈敏度 2.122nm/°C，降溫靈敏度 2.438nm/°C。</span>
        </p>
        <br />
        <br />
        <h4>研究方向</h4>
        <p>克服彎曲光纖時容易斷列、難以控制干涉訊號的問題。</p>
        <p>如何利用半導體黃光微影製程技術在晶圓上作出 WGM。</p>
      </page>

      <page class="left">
        <h6 slot="parent">
          <span>動機</span>
        </h6>
        <p>基於 2009 年初步開發 WGM 感測系統 ...</p>
        <h2>目標</h2>
        <p>
          <span>1. 探討適合 WGM 感測器的</span>
          <strong>光纖直徑與彎曲半徑</strong>
          <span>。</span>
        </p>
        <p>
          <span>2. 探討WGM + FBG 感測器形成濾波效果佳的</span>
          <strong>能量解調系統</strong>
          <span>。</span>
        </p>
        <p>
          <span>3. 開發新型WGM</span>
          <strong>獨立式感測器</strong>
          <span>之元件。</span>
        </p>
      </page>

      <page>
        <h3>
          <span>原理</span>
        </h3>
        <p>THEORY</p>
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
          <span>的</span>
          <span>原理</span>
          <span>可以分為兩種特性來探討：</span>
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
            <img src="@/assets/fiber1.png" alt />
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
        <h6 slot="parent">
          <span>光纖</span>
          <span>回音廊模態</span>
          <span>特性</span>
          <span>：干涉頻譜</span>
        </h6>
        <div style="height:50vh">
          <img src="@/assets/result.png" alt />
        </div>
      </page>
      <page>
        <h6 slot="parent">
          <span>光纖</span>
          <span>回音廊模態</span>
          <span>特性</span>
          <span>：干涉頻譜</span>
          <span>動畫</span>
        </h6>
        <div style="height:50vh">
          <img src="@/assets/result.gif" alt />
        </div>
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
          <span>一般光纖WGM</span>
        </h6>
        <h5>微動平台控制光纖彎曲</h5>

        <img src="@/assets/arch1.png" alt />
      </page>

      <page>
        <h6 slot="parent">
          <span>架構</span>
          <span>：</span>
          <span>實驗步驟</span>
        </h6>
        <div class="row" style="height:35vh">
          <div class="col" style="width:45%">
            <p>1. 蝕刻控制光纖直徑</p>
            <img src="@/assets/steps1.png" alt />
          </div>
          <div class="col" style="width:45%">
            <p>2. 微動平台控制彎曲半徑</p>
            <img src="@/assets/arch1_main.jpg" alt />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col" style="width:45%">
            <p>3. 量測穿透光頻譜</p>
          </div>
          <div class="col" style="width:45%">
            <p>
              <span>4. 計算位移、半徑變化、</span>
              <br />
              <span>波長位置相關線性度</span>
            </p>
          </div>
        </div>
        <div class="row" style="height:35vh">
          <div class="col" style="width:45%">
            <img src="@/assets/result.png" alt />
          </div>
          <div class="col" style="width:45%">
            <img src="@/assets/result_line.jpg" alt />
          </div>
        </div>
      </page>

      <page>
        <h3>
          <span>實驗結果</span>
        </h3>
        <p>Result</p>
      </page>

      <page>
        <h6 slot="parent">
          <span>實驗結果</span>
          <span>：</span>
          <span>蝕刻對光纖直徑之影響</span>
        </h6>
        <h5>蝕刻時間對光纖直徑關係：</h5>
        <div class="row center" style="height:45vh">
          <img src="@/assets/result_time_verse_radius.jpg" alt />
        </div>
        <br />
        <table>
          <tr>
            <td>蝕刻時間 (hr)</td>
            <td>2.5</td>
            <td>3</td>
            <td>3.5</td>
            <td>4</td>
            <td>4.5</td>
          </tr>
          <tr>
            <td>光纖直徑 (μm)</td>
            <td>90</td>
            <td>85</td>
            <td>75</td>
            <td>65</td>
            <td>55</td>
          </tr>
        </table>
        <p>線性度：0.922</p>
      </page>

      <page>
        <h6 slot="parent">
          <span>實驗結果</span>
          <span>：</span>
          <span>不同半徑光纖之干涉情形</span>
        </h6>
        <h5>發生干涉的半徑範圍：</h5>
        <div class="row center" style="height:50vh">
          <img src="@/assets/result_radius_of_interference-80.jpg" alt />
        </div>
        <table style="font-size:18px">
          <tr>
            <td>光纖直徑 (μm)</td>
            <td>90</td>
            <td>85</td>
            <td>75</td>
            <td>65</td>
            <td>55</td>
          </tr>
          <tr>
            <td>第一次干涉</td>
            <td>6.39 ~ 6.22</td>
            <td>7.87 ~ 7.63</td>
            <td>6.51 ~ 6.45</td>
            <td>5.05 ~ 4.75</td>
            <td>6.77 ~ 6.63</td>
          </tr>
          <tr>
            <td>第二次干涉</td>
            <td>5.93 ~ 5.71</td>
            <td>6.4 ~ 6.09</td>
            <td>5.7 ~ 5.66</td>
            <td>4.28 ~ 3.74</td>
            <td>5.6 ~ 5.15</td>
          </tr>

          <tr>
            <td>第三次干涉</td>
            <td>x</td>
            <td>6 ~ 5.57</td>
            <td>5.53 ~ 5.31</td>
            <td>3.68 ~ 3.31</td>
            <td>4.14 ~ 3.58</td>
          </tr>

          <tr>
            <td>第四次干涉</td>
            <td>x</td>
            <td>5.43 ~ 5.2</td>
            <td>5.24 ~ 5.09</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </table>
        <p>單位：mm</p>
      </page>
      <page>
        <h6 slot="parent">
          <span>實驗結果</span>
          <span>：</span>
          <span>不同半徑光纖之干涉情形</span>
        </h6>
        <h5>發生干涉的波長範圍：</h5>
        <div class="row center" style="height:45vh">
          <img src="@/assets/result_wavelength_of_interference-80.jpg" alt />
        </div>
        <table style="font-size:16px">
          <tr>
            <td>光纖直徑 (μm)</td>
            <td>90</td>
            <td>85</td>
            <td>75</td>
            <td>65</td>
            <td>55</td>
          </tr>
          <tr>
            <td>第一次干涉</td>
            <td>1465.6 ~ 1490.7</td>
            <td>1481.6 ~ 1498.2</td>
            <td>1517.75 ~ 1573.85</td>
            <td>1459.65 ~ 1548.75</td>
            <td>1477.6 ~ 1528.95</td>
          </tr>
          <tr>
            <td>第二次干涉</td>
            <td>1518.25 ~ 1547.65</td>
            <td>1471.2 ~ 1538.85</td>
            <td>1494.45 ~ 1567.95</td>
            <td>1501.6 ~ 1557.35</td>
            <td>1501.15 ~ 1532.4</td>
          </tr>

          <tr>
            <td>第三次干涉</td>
            <td>x</td>
            <td>1494.25 ~ 1578</td>
            <td>1503.5 ~ 1575.7</td>
            <td>1503.3 ~ 1598.4</td>
            <td>1491.1 ~ 1595.7</td>
          </tr>

          <tr>
            <td>第四次干涉</td>
            <td>x</td>
            <td>1524.7 ~ 1560.2</td>
            <td>1508.85 ~ 1585.65</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </table>
        <p>單位：nm</p>
      </page>

      <page>
        <h6 slot="parent">
          <span>實驗結果</span>
          <span>：</span>
          <span>不同半徑光纖之干涉情形</span>
        </h6>
        <h5>彎曲半徑對於位移變化的線性度：</h5>
        <div class="row center" style="height:45vh">
          <img src="@/assets/result_good_displacement.svg" alt />
        </div>
        <table>
          <tr>
            <td>光纖直徑 (μm)</td>
            <td>90</td>
            <td>85</td>
            <td>75</td>
            <td>65</td>
            <td>55</td>
          </tr>
          <tr>
            <td>第一次干涉</td>
            <td>0.99</td>
            <td>0.948</td>
            <td>0.999</td>
            <td>0.993</td>
            <td>0.999</td>
          </tr>
          <tr>
            <td>第二次干涉</td>
            <td>0.999</td>
            <td>0.997</td>
            <td>0.999</td>
            <td>0.999</td>
            <td>0.964</td>
          </tr>

          <tr>
            <td>第三次干涉</td>
            <td>x</td>
            <td>0.998</td>
            <td>0.998</td>
            <td>0.998</td>
            <td>0.959</td>
          </tr>

          <tr>
            <td>第四次干涉</td>
            <td>x</td>
            <td>0.978</td>
            <td>0.997</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </table>
      </page>
      <page>
        <h6 slot="parent">
          <span>實驗結果</span>
          <span>：</span>
          <span>不同半徑光纖之干涉情形</span>
        </h6>
        <h5>波長位置對於半徑變化的線性度：</h5>
        <div class="row center" style="height:45vh">
          <img src="@/assets/result_good_wavelength.svg" alt />
        </div>
        <table>
          <tr>
            <td>光纖直徑 (μm)</td>
            <td>90</td>
            <td>85</td>
            <td>75</td>
            <td>65</td>
            <td>55</td>
          </tr>
          <tr>
            <td>第一次干涉</td>
            <td>0.976</td>
            <td>0.989</td>
            <td>0.971</td>
            <td>0.986</td>
            <td>0.996</td>
          </tr>
          <tr>
            <td>第二次干涉</td>
            <td>0.996</td>
            <td>0.996</td>
            <td>0.998</td>
            <td>0.999</td>
            <td>0.966</td>
          </tr>

          <tr>
            <td>第三次干涉</td>
            <td>x</td>
            <td>0.998</td>
            <td>0.997</td>
            <td>0.981</td>
            <td>0.978</td>
          </tr>

          <tr>
            <td>第四次干涉</td>
            <td>x</td>
            <td>0.976</td>
            <td>0.996</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </table>
      </page>
      <page>
        <h6 slot="parent">
          <span>實驗結果</span>
          <span>：</span>
          <span>總結</span>
        </h6>
        <h5>不同半徑光纖WGM比較：</h5>
        <table style="font-size: 16px">
          <tr>
            <td>蝕刻時間</td>
            <td>光纖直徑</td>
            <td>狀況</td>
            <td>是否適合作為WGM</td>
          </tr>
          <tr>
            <td>2.5小時</td>
            <td>90μm</td>
            <td>彎折後容易斷裂</td>
            <td>不適合</td>
          </tr>
          <tr>
            <td>3小時</td>
            <td>85μm</td>
            <td>容易彎曲，不易斷裂</td>
            <td>適合</td>
          </tr>
          <tr>
            <td>3.5小時</td>
            <td>75μm</td>
            <td>容易彎曲，不易斷裂，波長介於1550nm附近</td>
            <td>最適合</td>
          </tr>
          <tr>
            <td>4小時</td>
            <td>65μm</td>
            <td>波長不在1550nm附近</td>
            <td>一般</td>
          </tr>
          <tr>
            <td>4.5小時</td>
            <td>55μm</td>
            <td>蝕刻時容易斷裂</td>
            <td>不適合</td>
          </tr>
        </table>
        <br />
        <h5>
          <span>蝕刻3.5小時，</span>
          <span>75μm</span>
          <span>光纖WGM</span>
          <span>之干涉頻譜與波長位置關係圖</span>
        </h5>

        <div class="row" style="height:40vh">
          <img src="@/assets/result.png" alt />
          <img src="@/assets/result_line.jpg" alt />
        </div>
      </page>

      <page>
        <h3>
          <span>總結</span>
        </h3>
        <br />
        <p>
          <strong>
            <span time="500">彎曲</span>
            <span time="500">光纖</span>
          </strong>
          <span time="500">形成</span>
          <span time="500">回音廊模態</span>
          <span time="500">，會使入射光在</span>
          <strong time="500">特定波長產生干涉</strong>
          <span>。</span>
        </p>
        <p>
          <span time="500">干涉波長位置會受</span>
          <strong time="500">彎曲半徑</strong>
          <span time="500">影響，可以透過</span>
          <strong time="500">應力、壓力或溫度</strong>
          <span time="500">改變。</span>
        </p>
        <p>
          <span time="500">形成</span>
          <span time="500">光纖WGM</span>
          <span time="500">之最佳光纖直徑為</span>
          <strong>
            <span time="500">75μm</span>
          </strong>
          <span time="500">，感測波長範圍</span>
          <strong time="500">1500~1600nm</strong>
          <span time="500">。</span>
        </p>

        <div slot="footer">
          <h6>論文來源</h6>
          <p block="true" class="quote">
            國立高雄應用科技大學
            機械與精密工程研究所 碩士論文 -
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
// import background from "@/components/Background.vue";

function setCookie(cname, cvalue, ex) {
  var d = new Date();
  d.setTime(d.getTime() + ex * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

export default {
  name: "app",
  data() {
    return {
      animation_id: null,
      time: 0,
      page_count: getCookie("pagecount") || 0,
      len: 0
    };
  },
  components: {
    page,
    display,
    demo1
    // background
  },
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
      setCookie("pagecount", p, 200);
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

.background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: white;
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
