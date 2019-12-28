<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
var lines = [];

function Line(x, y) {
  this.x = x;
  this.y = y;
  this.px = x;
  this.py = y;
  this.x;
  this.body = [[x, y]];
  this.len = 50 + 20 * Math.random();

  this.width = Math.random() * 3 + 1;
  let c = Math.random() * 20 + 235;
  this.color = `rgb(${c},${c},${c})`;
  this.update = function() {
    let wrap = false;
    if (this.x < 0) {
      this.x += innerWidth;
      wrap = true;
    }
    if (this.y < 0) {
      this.y += innerHeight;
      wrap = true;
    }

    if (this.x > innerWidth) {
      this.x -= innerWidth;
      wrap = true;
    }
    if (this.y > innerHeight) {
      this.y -= innerHeight;
      wrap = true;
    }
    let dx = this.x - this.px;
    let dy = this.y - this.py;

    if (wrap) {
      this.body.push([this.px, this.py]);
      this.body.push(null);
      this.body.push([this.x, this.y]);
      this.px = this.x;
      this.py = this.y;
    } else if (dx * dx + dy * dy > 10) {
      this.px = this.x;
      this.py = this.y;
      this.body.push([this.x, this.y]);
    }

    if (this.body.length > this.len)
      this.body.splice(0, this.body.length - this.len);
  };

  /**@param ctx {CanvasRenderingContext2D} */
  this.draw = function(ctx) {
    ctx.save();
    ctx.lineWidth = this.width;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    for (var i = this.body.length - 1; i >= 0; i--) {
      if (this.body[i] == null) {
        ctx.stroke();
        ctx.beginPath();
      } else {
        ctx.lineTo(...this.body[i]);
      }
    }
    ctx.stroke();
    ctx.restore();
  };
}

export default {
  data() {
    return {
      run: null
    };
  },
  methods: {
    resize() {
      this.$refs.canvas.width = innerWidth;
      this.$refs.canvas.height = innerHeight;
    },
    setup() {
      for (var i = 0; i < 50; i++)
        lines.push(
          new Line(Math.random() * innerWidth, Math.random() * innerHeight)
        );
    },
    draw() {
      /**@type {HTMLCanvasElement} */
      let canvas = this.$refs.canvas;
      let ctx = canvas.getContext("2d");
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,255,255,0.01)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      lines.map(x => {
        x.x += 2;
        x.y += Math.sin(x.x*0.01)+Math.sin(x.x*0.005)+2;
        x.update();
        x.draw(ctx);
      });
    }
  },
  mounted() {
    var me = this;
    this.run = setInterval(() => {
      me.draw();
    }, 20);
    addEventListener("resize", this.resize);
    this.resize();
    this.setup();
  },
  destroyed() {
    clearTimeout(this.run);
    removeEventListener("resize", this.resize);
  }
};
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
  background: white;
}
</style>