const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
  let children = Array.from(htmlElement.children);
  children.forEach(node => {
    node.remove();
  });
  const childNode = document.createElement("p");
  childNode.innerHTML = `${string}`;
  htmlElement.appendChild(childNode);
};

htmlGenerator("Party Time.", partyHeader);
htmlGenerator("I <3 Vanilla DOM manipulation.", partyHeader);

module.exports = htmlGenerator;