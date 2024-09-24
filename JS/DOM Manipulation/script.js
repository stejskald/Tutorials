const playground = document.getElementById("playground")
// const playground = document.querySelector("#playground"); // by ID
// const playground = document.querySelector(".playground"); // by class
// const playground = document.querySelector("div"); // by element type (the 1st)

// playground.append("🧙 Wizard", " ", "🔮 Crystal Ball", "", "📜 Spell Book");
// const spiderWeb = document.createElement("div");
// spiderWeb.textContent = "🕸️";
// playground.append(spiderWeb);


// const scrollWisdom = document.createElement("p");
// playground.append(scrollWisdom);

// scrollWisdom.innerText = "Ancient wisdom lies within";
// console.log(scrollWisdom.innerText);

// scrollWisdom.textContent = "Ancient wisdom";
// console.log(scrollWisdom.textContent);

// console.log(playground.innerText); // Only visible text
// console.log(playground.textContent); // All text including hidden parts


// const spellBook = document.createElement("div");
// spellBook.innerHTML = `
// <p>Spells include: <strong>Levitation</strong> and <em>Invisibility</em>!</p>
// `;
// playground.append(spellBook);

// console.log(spellBook.innerHTML); // Only visible text
// console.log(spellBook.textContent); // All text including hidden parts


// const userInput = '<img src="x" onerror="alert(\'Hacked!\')">';
// playground.innerHTML = userInput;


// const temporaryElement = document.createElement("p");
// temporaryElement.textContent = "🐰 Now you can see me...";
// playground.append(temporaryElement);

// temporaryElement.remove();
// playground.removeChild(temporaryElement);

// const fruitBasket = document.createElement("div");
// fruitBasket.innerHTML = `
//   <p>Apple</p>
//   <p>Banana</p>
//   <p>Cherry</p>
// `;
// playground.append(fruitBasket);

// while (fruitBasket.firstChild) {
//   fruitBasket.removeChild(fruitBasket.firstChild);
// }


// const magicWand = document.createElement("div");
// magicWand.setAttribute("id", "wand1");
// magicWand.setAttribute("class", "magical-item wand");
// magicWand.textContent = "🗲 Magic Wand";
// playground.append(magicWand);

// console.log(magicWand.getAttribute("class"));
// console.log(magicWand.className);


// const secretScroll = document.createElement("div");

// secretScroll.id = "secretScroll";
// secretScroll.dataset.spell = "invisibility";
// secretScroll.dataset.components = "moonlight,shadow essence";
// secretScroll.textContent = "📜 Ancient Spell Scroll";

// playground.append(secretScroll);

// console.log("Spell type:", secretScroll.dataset.spell);
// console.log("Spell type:", secretScroll.dataset.spellType); // in HTML as data-spell-type!
// console.log("Components:", secretScroll.dataset.components.split(","));


// const shapeShifter = document.createElement("div");
// shapeShifter.textContent = "🦎 Shapeshifter";
// playground.append(shapeShifter);

// shapeShifter.classList.add("magical", "creature");
// console.log("Initial classes:", shapeShifter.className);

// shapeShifter.classList.remove("creature");
// shapeShifter.classList.add("humanoid");
// console.log("Updated classes:", shapeShifter.className);

// // add/remove a class name to/from list based on condition
// shapeShifter.classList.toggle("invisible", Math.random() > 0.5);
// console.log(shapeShifter.classList.contains("invisible"));

// shapeShifter.classList.replace("humanoid", "beast");
// console.log("Third class:", shapeShifter.classList.item(2));


// const enhancedGem = document.createElement("div");
// enhancedGem.textContent = "💎";
// enhancedGem.style.fontSize = "50px";
// enhancedGem.style.transition = "all 0.5s";
// playground.append(enhancedGem);

// setInterval(() => {
//   enhancedGem.style.transform = `rotate(${Math.random() * 360}deg)`;
//   enhancedGem.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
// }, 2000);


// const magicButton = document.createElement("button");
// magicButton.textContent = "Cast Spell";
// playground.append(magicButton);

// magicButton.addEventListener("click", () => {
//   alert("✨ Magic sparkles fill the air!")
// });

// magicButton.addEventListener("mouseover", (event) => {
//   event.target.style.backgroundColor = "black";
//   event.target.style.color = "white";
// });

// magicButton.addEventListener("mouseout", (event) => {
//   event.target.style.backgroundColor = "";
//   event.target.style.color = "";
// });

// function spellCast() {
//   alert("✨ Magic sparkles fill the air!");
// }

// magicButton.addEventListener("click", spellCast);
// // to remove the event listener
// magicButton.removeEventListener("click", spellCast);


// const spellList = document.createElement("ul");
// playground.append(spellList);

// function addSpell(spellName) {
//   const spell = document.createElement("li"); // list item
//   spell.textContent = spellName;
//   const removeButton = document.createElement("button");
//   removeButton.textContent = "<== Remove spell";
//   removeButton.addEventListener("click", () => spell.remove());
//   spell.append(removeButton);
//   spellList.append(spell);
// }

// addSpell("🔥 Fire Ball");
// addSpell("❄️ Frost Nova");


// const parentElement = document.createElement("div");
// const childElement1 = document.createElement("p");
// const childElement2 = document.createElement("span");
// parentElement.append(childElement1, childElement2);
// playground.append(parentElement);

// console.log(parentElement.firstChild);
// console.log(parentElement.lastChild);
// console.log(childElement1.nextSibling);
// console.log(childElement2.previousSibling);
// console.log(childElement1.parentNode); // returns entire div


// const fragment = document.createDocumentFragment();

// for (let i = 0; i <5; i++) {
//   const magicalItem = document.createElement("li");
//   magicalItem.textContent = `🔮 Magical Item ${i + 1}`;
//   fragment.append(magicalItem);
// }

// const spellList = document.createElement("ul");
// playground.append(spellList);

// spellList.append(fragment);


const template = document.getElementById("wizard-template");

function createWizard(name, specialty) {
  const wizardElement = template.content.cloneNode(true);
  wizardElement.querySelector(".wizard-name").textContent = name;
  wizardElement.querySelector(".wizard-specialty").textContent = specialty;
  playground.append(wizardElement);
}

createWizard("Gandalf", "black magic");
createWizard("Merlin", "white magic");