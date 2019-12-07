<template>
  <div id="body">
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "page",
  props: ["show"],
  data() {
    return {};
  },
  mounted() {}
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
  top: 50%;
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