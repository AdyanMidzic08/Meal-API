let button = document.getElementById("button");
let input = document.getElementById("text");
let letter_box = document.getElementById("alphabet");
let output = document.getElementById("output");
let boxLetter = document.getElementsByClassName("box");

function printAlphabet() {
  for (let i = 0; i < 26; i++) {
    let letter = String.fromCharCode(65 + i);
    letter_box.innerHTML += `
        <div onclick="searchFoodByLetter('${letter}')" class="box">${letter}</div>
        `;
  }
}

printAlphabet();

async function loadFood(text) {
  try {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
    let food = await response.json();
    console.log(food);

    if (food.meals) {
      let length = food.meals.length;
      output.innerHTML = "";

      for (let i = 0; i < length; i++) {
        let name = `${food.meals[i].strMeal}`;
        let land = `${food.meals[i].strArea}`;
        let category = `${food.meals[i].strCategory}`;
        let picture = `${food.meals[i].strMealThumb}`;
        let youtube = `${food.meals[i].strYoutube}`;

        output.innerHTML += `
                    <div class="Meal-Box">
                        <h3>${i + 1}. ${name}</h3>
                        <h4>${land}</h4>
                        <img src="${picture}" alt="food">
                        <p>${category}</p>
                        <a href="${youtube}" target="_blank"><div class="youtube-btn">Watch Video</div></a>
                    </div>
                    `;
      }
    } else {
      output.innerHTML =
        '<p style="color:white; text-align:center;">Keine Gerichte gefunden.</p>';
    }
  } catch (error) {
    throw error;
  }
}

function searchFood() {
  let text = input.value;
  console.log(text);
  loadFood(text);
}

async function loadFoodByLetter(Letter) {
  try {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`);
    let food = await response.json();
    console.log(food);

    if (food.meals) {
      let length = food.meals.length;
      output.innerHTML = "";

      for (let i = 0; i < length; i++) {
        let name = `${food.meals[i].strMeal}`;
        let land = `${food.meals[i].strArea}`;
        let category = `${food.meals[i].strCategory}`;
        let picture = `${food.meals[i].strMealThumb}`;
        let youtube = `${food.meals[i].strYoutube}`;

        output.innerHTML += `
                    <div class="Meal-Box">
                        <h3>${i + 1}. ${name}</h3>
                        <h4>${land}</h4>
                        <img src="${picture}" alt="food">
                        <p>${category}</p>
                        <a href="${youtube}" target="_blank"><div class="youtube-btn">Watch Video</div></a>
                    </div>
                    `;
      }
    } else {
      output.innerHTML =
        '<p style="color:white; text-align:center;">Keine Gerichte gefunden.</p>';
    }
  } catch (error) {
    throw error;
  }
}

function searchFoodByLetter(letter) {
  console.log(letter);
  loadFoodByLetter(letter);
}

input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    searchFood();
  }
});
