<template>
  <div id="body">
    <div v-if="$slots.parent!=null" class="parent">
      <span pkey="Page-leftTopLine" class="line"></span>
      <slot name="parent"></slot>
    </div>
    <p class="pagenum" time="10" v-if="pagenum>1">{{pagenum}}</p>
    <div id="content">
      <div class="container">
        <slot></slot>
      </div>
    </div>
    <div v-if="$slots.top!=null" id="content_top">
      <div class="container">
        <slot name="top"></slot>
      </div>
    </div>
    <div v-if="$slots.footer!=null" id="content_footer">
      <hr />
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "page",
  data() {
    return { pagenum: 0 };
  },
  mounted() {
    this.pagenum =
      Array.from(this.$el.parentNode.children).indexOf(this.$el) + 1;
  }
};
</script>

<style lang='scss' scoped>
#body {
  position: absolute;
  width: 100vw;
  height: 100vh;
  margin: auto;
  overflow: hidden;
}

#content,
#content_top {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

#content_footer {
  width: 100%;
  text-align: center;
  bottom: 16px;
  position: absolute;
}

#content_top {
  pointer-events: none;
}

@media print {
  #body {
    margin: 0;
    color: #000;
    background-color: #fff;
    page-break-after: always;
    page-break-inside: avoid;
    position: relative;
  }
}

.pagenum {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 8px 16px;
  font-size: 16px;
  text-align: left;
}

.parent {
  position: absolute;
  left: 0px;
  top: 32px;

  color: gray;
  display: flex;
  align-items: center;
}

.line {
  display: block;
  width: 60px;
  margin-right: 4px;
  height: 1px;
  background: gray;
  border-top: solid 1px gray;
}

.container {
  max-width: 1024px;
  max-height: 100vh;
  top: 48%;
  transform: translate(0, -50%);
  margin: auto;
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
