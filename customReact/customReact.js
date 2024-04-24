function customRender(reactElement, container) {
  const { type, props, children } = reactElement;
  const element = document.createElement(type);

  Object.entries(props).forEach(function ([key, value]) {
    element.setAttribute(key, value);
  });

  if (typeof children === "string") {
    element.innerHTML = children;
  }

  container.appendChild(element);
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click Me",
};

const mainContainer = document.getElementById("root");

customRender(ReactElement, mainContainer);
