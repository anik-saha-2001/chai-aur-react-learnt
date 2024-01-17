function customRender(reactElement, container) {
  // Version 1
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   container.appendChild(domElement);


  // Version 2
  const domEle = document.createElement(reactElement.type);
  domEle.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domEle.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domEle);

  

}

const reactElement = {
  type: "a",
  props: {
    href: "https://facebook.com",
    target: "_blank",
  },
  children: "Click me to visit Facebook",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
