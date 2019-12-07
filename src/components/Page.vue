<template>
  <div id="body">
    <div v-if="$slots.parent!=null" class="parent">
      <span pkey="Page-leftTopLine" class="line"></span>
      <slot name="parent"></slot>
    </div>
    <p class="pagenum" v-if="pagenum>1">{{pagenum}}</p>
    <div id="content">
      <div class="container">
        <slot></slot>
      </div>
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

#content {
  position: relative;
  top: 48%;
  width: 100%;
  transform: translate(0, -50%);
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
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.container {
  max-width: 1024px;
  max-height: 100%;
  margin: auto;
}
</style>
