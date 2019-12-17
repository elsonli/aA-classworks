
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const liGenerator = (dogName, dogInfo) => {
  const aTag = document.createElement("a");
  aTag.innerHTML = dogName;
  aTag.setAttribute("href", dogInfo);
  const liTag = document.createElement("li");
  liTag.setAttribute("class", "dog-link");
  liTag.appendChild(aTag);
  return liTag;
};

function dogLinkCreator() {
  let dogNames = Object.keys(dogs);
  let liArray = [];
  for (let idx = 0; idx < dogNames.length; idx++) {
    liArray.push(liGenerator(dogNames[idx], dogs[dogNames[idx]]));
  }
  return liArray;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator();
  const dogList = document.querySelector(".drop-down-dog-list");
  for (let idx = 0; idx < dogLinks.length; idx++) {
    const dogLink = dogLinks[idx];
    dogLink.setAttribute("class", "hideClass");
    dogList.appendChild(dogLink);
  }
  handleEnter();
  handleLeave();
}

function handleEnter() {
  let dogNavH3 = document.querySelector("nav.drop-down-dog-nav h3");
  dogNavH3.addEventListener("mouseenter", (e) => {
    const dogList = document.querySelector(".drop-down-dog-list");
    const dogListChildren = dogList.children;
    for (let idx = 0; idx < dogListChildren.length; idx++) {
      dogListChildren[idx].setAttribute("class", "");
    }
  });
}

function handleLeave() {
  let dogNav = document.querySelector("nav.drop-down-dog-nav");
  dogNav.addEventListener("mouseleave", (e) => {
    const dogList = document.querySelector(".drop-down-dog-list");
    const dogListChildren = dogList.children;
    for (let idx = 0; idx < dogListChildren.length; idx++) {
      dogListChildren[idx].setAttribute("class", "hideClass");
    }
  });
}

attachDogLinks();