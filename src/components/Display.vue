<template>
  <div id="main" ref="main"></div>
</template>

<script>
/**@param element {HTMLElement} */
function getAllElement(element, get = false, katex = false) {
  if (element.classList.contains("katex-mathml")) return [];
  if (
    element.children.length != 0 &&
    element.tagName != "svg" &&
    element.getAttribute("block") != "true"
  ) {
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

function getKey(element) {
  return (
    element.getAttribute("pkey") ||
    element.innerHTML + "," + element.src + "," + element.tagName
  );
}

function safeTimeout(element, timeout, callback) {
  if (element.timeout != null) clearTimeout(element.timeout);
  element.timeout = setTimeout(function() {
    element.timeout = null;
    callback(element);
  }, timeout);
}

function putBackRefer(x) {
  if (x.el.display_refer == null) return;
  for (var i in x.el.style) x.el.style.removeProperty(i);
  x.el.removeAttribute("kill");
  x.el.display_refer.parentElement.insertBefore(x.el, x.el.display_refer);
  x.el.display_refer.remove();
  x.el.display_refer = null;
}

export default {
  name: "Display",
  data() {
    return {
      timeout: null
    };
  },
  methods: {
    goto(element) {
      let from = getAllElement(this.$refs.main).map(x => {
        if (x.timeout != null) clearTimeout(x.timeout);

        return {
          /**@type {HTMLElement} */
          el: x,
          /**@type {{el:HTMLElement}} */
          paired: null,
          key: getKey(x),
          kill: x.getAttribute("kill"),
          time: x.getAttribute("time") || 500,
          complex: x.getAttribute("complex")
        };
      });

      let to = getAllElement(element).map(x => {
        if (x.display_owner) {
          if (x.display_owner.timeout != null)
            clearTimeout(x.display_owner.timeout);
        }
        return {
          /**@type {HTMLElement} */
          el: x,
          paired: null,
          key: getKey(x),
          time: x.getAttribute("time") || 500,
          complex: x.getAttribute("complex")
        };
      });

      from
        .filter(x => x.kill == null)
        .map(x => {
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
        el.setAttribute("time", x.time);
        el.innerHTML = x.el.innerHTML;

        for (var i in x.el.attributes) {
          el.setAttribute(x.el.attributes[i].name, x.el.attributes[i].value);
        }

        // complex procedural:
        // 1. original complex element.refer = new fake el
        // 2. new fake el.owner = original complex element el
        // 3. x.el = fake el
        // 4. el = original complex
        // 5. display main has el
        // 6. content has x.el
        if (x.complex == "true") {
          if (x.el.display_owner) {
            x.el.display_owner.removeAttribute("kill");
            x.el.display_owner.refer = x.el;
            el = x.el.display_owner;
            el.style.opacity = 1;
          } else {
            x.el.display_refer = el;
            el.display_owner = x.el;
            x.el = el;
            el = el.display_owner;

            el.parentElement.insertBefore(x.el, el);

            //this.$refs.main.append(x.el);
          }
        }

        this.$refs.main.append(el);

        el.style.opacity = 0;
        el.setAttribute("pkey", x.key);
        el.setAttribute("time", x.time);

        from.push({
          el: el,
          paired: x,
          key: x.key,
          new: true,
          time: x.time,
          complex: x.complex
        });
      });

      safeTimeout(this, 10, () => {
        from.map((x, i, arr) => {
          let delay = Math.pow(i / arr.length, 1.5) * x.time * 0.8;
          if (x.paired != null) delay += x.time / 4;
          if (x.new) delay += x.time / 4;

          safeTimeout(x.el, delay, () => {
            if (x.paired == null) {
              x.el.setAttribute("kill", "true");
              x.el.style.opacity = 0;
              x.el.style.transform = "scale(0.9)";
              x.el.style.zIndex = 0;
              safeTimeout(x.el, x.time, () => {
                if (x.complex == "true") {
                  putBackRefer(x);
                } else x.el.remove();
              });
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
              x.el.style.pointerEvents = targetStyle.pointerEvents;

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
              x.el.style.transform = "translate(0,0)";

              if (x.new) {
                x.el.style.opacity = 0;
                x.el.style.transform = "translate(0, 20px)";
                safeTimeout(x.el, 10, () => {
                  x.el.style.transform = "translate(0, 0)";
                  x.el.style.opacity = targetStyle.opacity;
                  x.el.style.transition =
                    "all " + x.time / 1000 + "s cubic-bezier(0.5,0,0.2,1)";
                });
              } else
                x.el.style.transition =
                  "all " + x.time / 1000 + "s cubic-bezier(0.5,0,0.2,1)";

              if (x.complex != "true") x.el.innerHTML = x.paired.el.innerHTML;

              x.el.src = x.paired.el.src;
              x.el.href = x.paired.el.href;
            }
          });
        });
      });
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
