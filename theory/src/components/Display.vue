<template>
  <div id="main" ref="main"></div>
</template>

<script>
/**@param element {HTMLElement} */
function getAllElement(element, get = false) {
  if (element.children.length != 0) {
    let result = [];
    Array.from(element.children).map(x => {
      result.push(...getAllElement(x, true));
    });
    return result;
  } else if (get) return [element];
  return [];
}

export default {
  name: "Display",
  data() {
    return {};
  },
  methods: {
    goto(element) {
      let from = getAllElement(this.$refs.main)
        .map(x => {
          return {
            /**@type {HTMLElement} */
            el: x,
            /**@type {{el:HTMLElement}} */
            paired: null,
            key:
              x.getAttribute("pkey") ||
              x.outerHTML.replace(/\s*style=".*"\s*/, "") + x.src,
            kill: x.getAttribute("kill")
          };
        })
        .filter(x => x.kill == null);

      let to = getAllElement(element).map(x => {
        return {
          /**@type {HTMLElement} */
          el: x,
          paired: null,
          key:
            x.getAttribute("pkey") ||
            x.outerHTML
              .replace(/\s*style=".*"\s*/, "")
              .replace(/\s*data-v-.+=".*"\s*/, "") + x.src
        };
      });
      console.log(from, to);

      from.map(x => {
        if (x.key != null) {
          let match = to.find(y => y.key == x.key);
          if (match != null) {
            x.paired = match;
            match.paired = true;
          }
        }
      });

      to.filter(x => x.paired == null).map(x => {
        let el = document.createElement(x.el.tagName);
        el.setAttribute("pkey", x.key);
        this.$refs.main.append(el);
        el.style.opacity = 0;
        el.style.transform = "translate(0px, -10px)";
        from.push({
          el,
          paired: x,
          key: x.key,
          new: true
        });
      });

      setTimeout(() => {
        from.map((x, i, arr) => {
          let delay = Math.pow(i / arr.length, 2) * 500;
          setTimeout(() => {
            if (x.paired == null) {
              x.el.setAttribute("kill", "true");
              x.el.style.opacity = 0;
              x.el.style.transform = "translate(0px, 10px)";
              setTimeout(() => {
                x.el.remove();
              }, 1000);
            } else {
              let targetBox = x.paired.el.getBoundingClientRect();
              let targetStyle = getComputedStyle(x.paired.el);

              x.el.style.display = "block";
              x.el.style.fontWeight = targetStyle.fontWeight;
              x.el.style.fontSize = targetStyle.fontSize;
              x.el.style.color = targetStyle.color;
              x.el.style.margin = "0";
              x.el.style.padding = targetStyle.padding;

              x.el.style.position = "absolute";
              x.el.style.left = targetBox.left + "px";
              x.el.style.top = targetBox.top + "px";
              x.el.style.width = targetBox.width + "px";
              x.el.style.height = targetBox.height + "px";
              x.el.style.background = "";
              x.el.style.background = targetBox.background;
              // x.el.style.overflow = "hidden";
              x.el.style.opacity = 1;

              if (x.new) {
                x.el.style.opacity = 0;
                setTimeout(() => {
                  x.el.style.opacity = 1;
                  x.el.style.transition = "all 0.5s";
                }, 250);
              } else
                x.el.style.transition = "all 0.5s cubic-bezier(0.5,0,0.1,1)";

              x.el.style.transform = "translate(0,0)";

              x.el.textContent = x.paired.el.textContent;
              x.el.src = x.paired.el.src;
              x.el.href = x.paired.el.href;
            }
          }, delay);
        });
      }, 10);
    }
  }
};
</script>

<style scoped>
#main {
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
}
</style>
