<template>
  <div id="main" ref="main"></div>
</template>

<script>
/**@param element {HTMLElement} */
function getAllElement(element, get = false, katex = false) {
  if (element.classList.contains("katex-mathml")) return [];
  if (element.children.length != 0 && element.tagName != "svg") {
    let result = [];
    Array.from(element.children).map(x => {
      result.push(
        ...getAllElement(x, true, katex || x.classList.contains("katex"))
      );
    });
    return result;
  } else if (get) {
    if (katex && element.tagName == "svg") element.classList.add("katex");
    return [element];
  }
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
              x.innerHTML + "," + x.src + "," + x.tagName,
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
            x.innerHTML + "," + x.src + "," + x.tagName
        };
      });
      console.log(from, to);

      from.map(x => {
        if (x.key != null) {
          let match = to.find(y => y.key == x.key && y.paired != true);
          if (match != null) {
            x.paired = match;
            match.paired = true;
          }
        }
      });

      to.filter(x => x.paired == null).map(x => {
        let el = document.createElement(x.el.tagName);
        el.classList.add(...Array.from(x.el.classList));
        el.setAttribute("pkey", x.key);
        el.style.opacity = 0;

        this.$refs.main.append(el);

        // for (var i in x.el.attributes) {
        //   el.setAttribute(x.el.attributes[i].name, x.el.attributes[i].value);
        // }

        from.push({
          el,
          paired: x,
          key: x.key,
          new: true
        });
      });

      setTimeout(() => {
        from.map((x, i, arr) => {
          let delay = Math.pow(i / arr.length, 2) * 300;
          setTimeout(() => {
            if (x.paired == null) {
              x.el.setAttribute("kill", "true");
              x.el.style.opacity = 0;
              x.el.style.transform = "scale(0.9)";
              x.el.style.zIndex = 0;
              setTimeout(() => {
                x.el.remove();
              }, 350);
            } else {
              let targetBox = x.paired.el.getBoundingClientRect();
              let targetStyle = getComputedStyle(x.paired.el);

              x.el.style.fontWeight = targetStyle.fontWeight;
              x.el.style.fontSize = targetStyle.fontSize;
              x.el.style.textAlign = targetStyle.textAlign;
              x.el.style.color = targetStyle.color;
              x.el.style.margin = "0";
              x.el.style.padding = targetStyle.padding;
              x.el.style.opacity = targetStyle.opacity;

              x.el.style.fill = targetStyle.fill;
              x.el.style.fillRule = targetStyle.fillRule;
              x.el.style.fillOpacity = targetStyle.fillOpacity;
              x.el.style.stroke = targetStyle.stroke;

              x.el.style.lineHeight = targetStyle.lineHeight;
              x.el.style.whiteSpace = targetStyle.whiteSpace;
              x.el.style.fontFamily = targetStyle.fontFamily;
              x.el.style.verticalAlign = targetStyle.verticalAlign;

              x.el.style.border = targetStyle.border;
              x.el.style.borderBottomColor = targetStyle.borderBottomColor;
              x.el.style.borderBottom = targetStyle.borderBottom;

              x.el.style.background = "";
              x.el.style.background = targetStyle.background;

              // Array.from(targetStyle).forEach(key => {
              //   x.el.style.setProperty(
              //     key,
              //     targetStyle.getPropertyValue(key),
              //     targetStyle.getPropertyPriority(key)
              //   );
              // });

              x.el.style.display = "block";

              x.el.style.position = "absolute";

              x.el.style.left = targetBox.left + "px";
              x.el.style.top = targetBox.top + "px";

              // x.el.style.width = targetBox.width + "px";
              // x.el.style.height = targetBox.height + "px";

              x.el.style.width = targetStyle.width;
              x.el.style.height = targetStyle.height;

              // x.el.style.overflow = "hidden";

              if (x.new) {
                x.el.style.opacity = 0;
                setTimeout(() => {
                  x.el.style.opacity = targetStyle.opacity;
                  x.el.style.transition = "all 0.5s cubic-bezier(0.5,0,0.2,1)";
                }, 10);
              } else
                x.el.style.transition = "all 0.5s cubic-bezier(0.5,0,0.2,1)";

              x.el.style.transform = "translate(0,0)";

              x.el.innerHTML = x.paired.el.innerHTML;
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
