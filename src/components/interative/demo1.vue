<template>
  <div>
    <div block="true" complex="true" pkey="interative_demo1" id="interative_demo1">
      <div class="canvas_container">
        <canvas width="900" height="900" ref="canvas"></canvas>
      </div>
    </div>
    <div class="panel">
      <div class="row">
        <h5>
          <span>光纖彎曲半徑</span>
        </h5>
        <input
          complex="true"
          class="slider"
          type="range"
          min="100"
          max="350"
          v-model.number="radius"
        />
      </div>
      <div class="row">
        <h5>
          <span>光纖直徑</span>
        </h5>
        <input complex="true" class="slider" type="range" min="10" max="90" v-model.number="thick2" />
      </div>
    </div>
  </div>
</template>

<script>
import V2 from "./v2.js";
import { black, red } from "color-name";

/**@param canvas {HTMLCanvasElement}
 * @param ctx {CanvasRenderingContext2D}
 */
function drawU(canvas, ctx, r) {
  ctx.beginPath();
  ctx.moveTo(-r, canvas.height / 2);
  ctx.arc(0, 0, r, Math.PI, Math.PI * 2);
  ctx.lineTo(r, canvas.height / 2);
  ctx.stroke();
}

function simulate(p, v, r, r2) {
  let np = [1, 0];
  let nv = V2.normalize(v);
  let stop = false;

  let d = Math.abs(V2.cross(p, nv));
  let l1 = Math.sqrt(r * r - d * d) - V2.dot(p, nv);
  if (d < r2) {
    l1 = -V2.dot(p, nv) - Math.sqrt(r2 * r2 - d * d);
    stop = true;
  }

  let wall1 = v[0] > 0 ? r : -r;
  let wall2 = v[0] > 0 ? -r2 : r2;
  let l2 = (wall1 - p[0]) / nv[0];
  let l2_2 = (wall2 - p[0]) / nv[0];

  let p1 = V2.add(p, V2.scale(nv, l1));

  if (p1[1] <= 0) {
    p = p1;
    np = V2.normalize(p);
  } else {
    if (l2_2 > 0 && l2_2 < l2) {
      l2 = l2_2;
      stop = true;
    }
    let p2 = V2.add(p, V2.scale(nv, l2));
    p = p2;
    np = v[0] > 0 ? [-1, 0] : [1, 0];
  }

  v = stop ? [0, 0] : V2.add(v, V2.scale(np, -V2.dot(v, np) * 2));
  return [p, v];
}

/**@param canvas {HTMLCanvasElement}
 * @param ctx {CanvasRenderingContext2D}
 */
function draw(canvas, ctx, data) {
  // data.radius = Math.sin(new Date().getTime() * 0.001) * 100 + 250;
  // data.thick2 = Math.cos(new Date().getTime() * 0.001) * 10 + 50;

  ctx.save();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#2c3e50";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.resetTransform();

  ctx.translate(canvas.width / 2, canvas.height / 2);

  drawU(canvas, ctx, data.radius - data.thick1);
  drawU(canvas, ctx, data.radius + data.thick1);
  drawU(canvas, ctx, data.radius - data.thick1 - data.thick2);
  drawU(canvas, ctx, data.radius + data.thick1 + data.thick2);

  let startY = data.radius * 0.5;
  let p = [-data.radius - data.thick1, startY];
  let v = [-0.2, -1];
  let len = 0;
  let r = data.radius + data.thick1 + data.thick2;
  let r2 = data.radius + data.thick1;

  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  ctx.setLineDash([150, 50]);
  ctx.lineDashOffset = -((new Date().getTime() % 1000) / 1000) * 200;

  ctx.beginPath();
  ctx.moveTo(...p);
  for (var i = 0; i < 10; i++) {
    let [p2, v2] = simulate(p, v, r, r2);

    let alen = V2.len(V2.sub(p, p2));
    len += alen;
    p = p2;
    v = v2;
    ctx.lineTo(...p);
  }
  ctx.stroke();

  ctx.lineDashOffset -= canvas.height / 2 - startY;
  drawU(canvas, ctx, data.radius);

  ctx.restore();
}

export default {
  name: "demo1",
  data() {
    return {
      radius: 315,
      thick1: 4,
      thick2: 80,
      interval: null
    };
  },
  methods: {
    draw() {
      draw(this.canvas, this.ctx, this);
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    var me = this;
    this.interval = setInterval(() => {
      me.draw();
    }, 16);
  },
  destroyed() {
    clearInterval(this.interval);
  }
};
</script>

<style lang='scss' scoped>
#interative_demo1 {
  width: 100%;
  height: 80vh;
}
canvas {
  // position: absolute;
  // top: 50%;
  // transform: translate(0, -50%);
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.canvas_container {
  height: 100%;
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.row {
  width: 100%;
  justify-content: space-between;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #2c3e50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #2c3e50;
  cursor: pointer;
}

.panel {
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0;
}
</style>