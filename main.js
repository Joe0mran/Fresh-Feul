const protein = [
  {
    id: "protein1",
    name: "Chicken Breast (skinless, cooked)",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    photo: "p1.jpeg"
  },
  {
    id: "protein2",
    name: "Salmon (cooked)",
    calories: 206,
    protein: 22,
    carbs: 0,
    fat: 13,
    photo: "p2.jpeg"
  },
  {
    id: "protein3",
    name: "Eggs (whole)",
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fat: 11,
    photo: "p3.jpeg"
  },
  {
    id: "protein4",
    name: "Tofu (firm)",
    calories: 144,
    protein: 15,
    carbs: 3.9,
    fat: 8,
    photo: "p4.jpeg"
  },
  {
    id: "protein5",
    name: "Steak (cooked beef)",
    calories: 252,
    protein: 27.3,
    carbs: 0,
    fat: 15,
    photo: "p5.jpeg"
  }
];

const carbs = [
  {
    id: "carb1",
    name: "White Rice (cooked)",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    photo: "c1.jpeg"
  },
  {
    id: "carb2",
    name: "Sweet Potato (boiled)",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    photo: "c2.jpeg"
  },
  {
    id: "carb3",
    name: "Quinoa (cooked)",
    calories: 120,
    protein: 4.1,
    carbs: 21,
    fat: 1.9,
    photo: "c3.jpeg"
  },
  {
    id: "carb4",
    name: "Oats (rolled, dry)",
    calories: 389,
    protein: 16.9,
    carbs: 66,
    fat: 6.9,
    photo: "c4.jpeg"
  },
  {
    id: "carb5",
    name: "Chickpeas (boiled)",
    calories: 164,
    protein: 8.9,
    carbs: 27,
    fat: 2.6,
    photo: "c5.jpeg"
  }
];

const fats = [
  {
    id: "fat1",
    name: "Avocado",
    calories: 160,
    protein: 2,
    carbs: 9,
    fat: 15,
    photo: "f1.jpeg"
  },
  {
    id: "fat2",
    name: "Almonds",
    calories: 579,
    protein: 21,
    carbs: 22,
    fat: 50,
    photo: "f2.jpeg"
  },
  {
    id: "fat3",
    name: "Olive Oil",
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    photo: "f3.jpeg"
  },
  {
    id: "fat4",
    name: "Peanut Butter",
    calories: 588,
    protein: 25,
    carbs: 20,
    fat: 50,
    photo: "f4.jpeg"
  },
  {
    id: "fat5",
    name: "Walnuts",
    calories: 654,
    protein: 15,
    carbs: 14,
    fat: 65,
    photo: "f5.jpeg"
  }
];

let protein_image = document.getElementById("protein-pic");
let carb_image = document.getElementById("carb-pic");
let fat_image = document.getElementById("fat-pic");
let protein_selector = document.getElementById("protein-side");
let carb_selector = document.getElementById("carb-side");
let fat_selector = document.getElementById("fat-side");
let protein_last = -1, carb_last = -1, fat_last = -1;
// Image Changing + text appearance
protein_selector.addEventListener("change", function(){
    for(let it in protein){
        if(protein[it].id === this.value){
            protein_image.src = protein[it].photo;
            document.getElementById("Macros1").innerText = "Macros: ";
            document.getElementById("protein-text").innerText = "(0 kcal) (0g protein) (0g fats) (0g carb)";
            protein_last = it;
            return;
        }
    }
    protein_last = -1;
    protein_image.src = "none.png";
    document.getElementById("Macros1").innerText = "";
    document.getElementById("protein-text").innerText = "";
});
carb_selector.addEventListener("change", function(){
    for(let it in carbs){
        if(carbs[it].id === this.value){
            carb_image.src = carbs[it].photo;
            document.getElementById("Macros2").innerText = "Macros: ";
            document.getElementById("carb-text").innerText = "(0 kcal) (0g protein) (0g fats) (0g carb)";
            carb_last = it;
            return;
        }
    }
    carb_last = -1;
    carb_image.src = "none.png";
    document.getElementById("Macros2").innerText = "";
    document.getElementById("carb-text").innerText = "";

});
fat_selector.addEventListener("change", function(){
    for(let it in fats){
        if(fats[it].id === this.value){
            fat_image.src = fats[it].photo;
            document.getElementById("Macros3").innerText = "Macros: ";
            document.getElementById("fat-text").innerText = "(0 kcal) (0g protein) (0g fats) (0g carb)";
            fat_last = it;
            return;
        }
    }
    fat_last = -1;
    fat_image.src = "none.png";
    document.getElementById("Macros3").innerText = "";
    document.getElementById("fat-text").innerText = "";
});
// Adding Grams
let cal, p, c, f;
let protein_button = document.getElementById("check-protein");
let carb_button = document.getElementById("check-carb");
let fat_button = document.getElementById("check-fat");
let protein_text = document.getElementById("protein-text");
let carb_text = document.getElementById("carb-text");
let fat_text = document.getElementById("fat-text");
let answers = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

protein_button.addEventListener("click", function(){
    let proteing = document.getElementById("protein-weight").value;
    if(protein_last === -1){
        alert("Please enter an item!!");
        return;
    }
    if(proteing === "" || isNaN(proteing)){
        alert("Please enter an value!!");
        return;
    }
    proteing = Number(proteing);
    cal = (protein[protein_last].calories / (100.0) * proteing).toFixed(2);
    p = (protein[protein_last].protein / (100.0) * proteing).toFixed(2);
    c = (protein[protein_last].carbs / (100.0) * proteing).toFixed(2);
    f = (protein[protein_last].fat / (100.0) * proteing).toFixed(2);
    answers[0][0] = Number(cal);
    answers[0][1] = Number(p);
    answers[0][2] = Number(c);
    answers[0][3] = Number(f);
    document.getElementById("protein-text").innerText = "(" + cal + " kcal) (" + p + "g protein) (" + f +"g fats) (" + c + "g carb)";
});
carb_button.addEventListener("click", function(){
    let carbg = document.getElementById("carb-weight").value;
    if(carb_last === -1){
        alert("Please enter an item!!");
        return;
    }
    if(carbg === "" || isNaN(carbg)){
        alert("Please enter an value!!");
        return;
    }
    carbg = Number(carbg);
    cal = (carbs[carb_last].calories / (100.0) * carbg).toFixed(2);
    p = (carbs[carb_last].protein / (100.0) * carbg).toFixed(2);
    c = (carbs[carb_last].carbs / (100.0) * carbg).toFixed(2);
    f = (carbs[carb_last].fat / (100.0) * carbg).toFixed(2);
    answers[1][0] = Number(cal);
    answers[1][1] = Number(p);
    answers[1][2] = Number(c);
    answers[1][3] = Number(f);
    document.getElementById("carb-text").innerText = "(" + cal + " kcal) (" + p + "g protein) (" + f +"g fats) (" + c + "g carb)";
});
fat_button.addEventListener("click", function(){
    let fatg = document.getElementById("fat-weight").value;
    if(fat_last === -1){
        alert("Please enter an item!!");
        return;
    }
    if(fatg === "" || isNaN(fatg)){
        alert("Please enter an value!!");
        return;
    }
    fatg = Number(fatg);
    cal = (fats[fat_last].calories / (100.0) * fatg).toFixed(2);
    p = (fats[fat_last].protein / (100.0) * fatg).toFixed(2);
    c = (fats[fat_last].carbs / (100.0) * fatg).toFixed(2);
    f = (fats[fat_last].fat / (100.0) * fatg).toFixed(2);
    answers[2][0] = Number(cal);
    answers[2][1] = Number(p);
    answers[2][2] = Number(c);
    answers[2][3] = Number(f);
    document.getElementById("fat-text").innerText = "(" + cal + " kcal) (" + p + "g protein) (" + f +"g fats) (" + c + "g carb)";
});
// Checking macros
let check_button = document.getElementById("check-button");
check_button.addEventListener("click", function(){
    if(protein_last === -1 || carb_last === -1 || fat_last === -1){
        alert("Make sure to add all the items!");
        return;
    }
    document.getElementById("Macros4").innerText = "Macros: ";
    let cal = 0, p = 0, f = 0, c = 0;
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 3; j++){
            if(i == 0) cal += answers[j][i]
            else if(i == 1) p += answers[j][i]
            else if(i == 2) c += answers[j][i]
            else f += answers[j][i]
        }
    }
    cal = cal.toFixed(2); p = p.toFixed(2); c = c.toFixed(2); f = f.toFixed(2);
    document.getElementById("final-text").innerText = "(" + cal + " kcal) (" + p + "g protein) (" + f +"g fats) (" + c + "g carb)";
});