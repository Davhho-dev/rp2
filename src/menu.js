


function createAppetizers() {
    const appetizers = document.getElementById("appetizers");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createFood("Chef's Platter (Cheese Sticks, Chicken Tenders, Egg Roll & Crab Rangoon)", "none", "$8.45"));
    foodWrapper.appendChild(createFood("Crab Rangoon (6)", "none", "$5.75"));
    foodWrapper.appendChild(createFood("Mozzarella Cheese Sticks (6)", "none", "$6.25"));
    foodWrapper.appendChild(createFood("Chicken Tenders (4)", "none", "$7.25"));
    foodWrapper.appendChild(createFood("Buffalo Wings (6)", "none", "$8.25"));
    foodWrapper.appendChild(createFood("Vietnamese Egg Roll (1)", "none", "$1.90"));
    foodWrapper.appendChild(createFood("Stuffed Crabs (2)", "none", "$8.95"));
    foodWrapper.appendChild(createFood("Coleslaw", "none", "$2.65"));
    foodWrapper.appendChild(createFood("Onion Rings", "none", "$3.25"));
    foodWrapper.appendChild(createFood("French Fries", "none", "$2.65"));
    foodWrapper.appendChild(createFood("Cajun French Fries", "none", "$3.10"));
    foodWrapper.appendChild(createFood("Sweet Potato Fries", "none", "$3.10"));
    foodWrapper.appendChild(createFood("Baked Potato", "none", "$3.65"));
    foodWrapper.appendChild(createFood("Tossed Salad", "none", "$4.25"));
    foodWrapper.appendChild(createFood("Seafood Gumbo", "none", "$5.25/$8.45"));
    foodWrapper.appendChild(createFood("Chicken Enchilada Soup", "none", "$4.95/$7.75"));
    foodWrapper.appendChild(createFood("Soup of the Day", "none", "$4.60/$7.15"));
    foodWrapper.appendChild(createFood("Vegetables", "none", "$3.10"));
    foodWrapper.appendChild(createFood("Hushpuppies (8)", "none", "$3.75"));
    foodWrapper.appendChild(createFood("Mashed Potatoes & Gravy", "none", "$2.85"));
    foodWrapper.appendChild(createFood("Rice & Gravy", "none", "$2.85"));
    foodWrapper.appendChild(createFood("Pasta Salad", "none", "$2.95"));
    appetizers.appendChild(foodWrapper);
}

function createSalads() {
    const salads = document.getElementById("salads");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createFood("Fried Shrimp", "none", "$13.95"));
    foodWrapper.appendChild(createFood("Grilled Shrimp", "none", "$16.95"));
    foodWrapper.appendChild(createFood("Chicken (Grilled or Fried)", "none", "$11.95"));
    foodWrapper.appendChild(createFood("Chef (Ham, Roast Beef, Cheese, and Egg)", "none", "$12.60"));
    foodWrapper.appendChild(createFood("Tuna (on Lettuce with sliced tomatoes)", "none", "$11.95"));
    foodWrapper.appendChild(createFood("Chicken Salad on a Bed of Lettuce", "none", "$11.95"));
    foodWrapper.appendChild(createImg("../dist/images/salad.jpeg", "width: 412px; height: 308px;"));
    salads.appendChild(foodWrapper);
}

function createPoBoys() {
    const poboys = document.getElementById("po-boys");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["Add Fries for $1.95", "Add Cajun Fries, Onion Rings, or Sweet Potato Fries for $2.25"]));
    foodWrapper.appendChild(createFood("Fried Shrimp", "none", "$9.10"));
    foodWrapper.appendChild(createFood("Shrimp & Catfish", "none", "$12.95"));
    foodWrapper.appendChild(createFood("Soft Shell Crab", "none", "14.65"));
    foodWrapper.appendChild(createFood("Fried Catfish", "none", "$9.10"));
    foodWrapper.appendChild(createFood("Roast Beef & Gravy", "none", "$9.10"));
    foodWrapper.appendChild(createFood("Ham or Turkey", "none", "$8.25"));
    foodWrapper.appendChild(createFood("Ham or Turkey & Cheese", "none", "$8.75"));
    foodWrapper.appendChild(createFood("Chicken (Grilled or Fried)", "none", "$8.75"));
    foodWrapper.appendChild(createFood("Hamburger", "none", "$7.65"));
    foodWrapper.appendChild(createFood("Cheeseburger", "none", "$8.10"));
    poboys.appendChild(foodWrapper);
}

function createSpecialitySandwiches() {
    const specialSandwiches = document.getElementById("specialty-sandwiches");
    const foodWrapper = document.createElement("div");
    foodWrapper.appendChild(createSubFoodTitle(["Served with Fries"]));
    foodWrapper.appendChild(createFood("Philly Steak and Cheese", "with onions, bell peppers & a side of Au jus", "$9.15"));
    foodWrapper.appendChild(createFood("Pelican (Chicken Philly)", "with onions, bell peppers & our special pelican sauce", "$9.15"));
    foodWrapper.appendChild(createFood("Crab Swiss Poboy", "none", "$9.75"));
    foodWrapper.appendChild(createFood("Club (Ham, Roast Beef, Bacon, & Cheese)", "none", "$9.95"));
    foodWrapper.appendChild(createFood("Roast Beef & Bacon Double Decker", "none", "$9.95"));
    specialSandwiches.appendChild(foodWrapper);
}

function createSandwiches() {
    const sandwiches = document.getElementById("sandwiches");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["Add Fries for $1.95", "Add Cajun Fries, Onion Rings, or Sweet Potato Fries for $2.25"]));
    foodWrapper.appendChild(createFood("Reuben (Corned beef, Sauerkraut, Swiss Cheese & Thousand Island on Grilled Rye Bread)", "$6.95"));
    foodWrapper.appendChild(createFood("Crab Swiss on rye", "none", "$7.55"));
    foodWrapper.appendChild(createFood("Grilled or Fried Chicken Breast on bun", "none", "$7.45"));
    foodWrapper.appendChild(createFood("Roast Beef (Hot or Cold", "none", "$7.25"));
    foodWrapper.appendChild(createFood("Roast Beef and Bacon", "none", "$8.20"));
    foodWrapper.appendChild(createFood("Turkey or Ham (Hot or Cold)", "none", "$7.45"));
    foodWrapper.appendChild(createFood("Turkey or Ham & Cheese (Hot or Cold)", "none", "$7.45"));
    foodWrapper.appendChild(createFood("BLT", "none", "$6.65"));
    foodWrapper.appendChild(createFood("Grilled Cheese", "$3.10"));
    foodWrapper.appendChild(createFood("Chicken Salad or Tuna Salad on toast", "none", "$6.65"));
    foodWrapper.appendChild(createFood("Tuna or Chicken Salad on Croissant", "none", "$7.45"));
    foodWrapper.appendChild(createFood("Patty Melt", "none", "$5.75"));
    foodWrapper.appendChild(createFood("Hamburger", "none", "$4.60"));
    foodWrapper.appendChild(createFood("Cheeseburger", "none", "$5.15"));
    sandwiches.appendChild(foodWrapper);
}

function createFood(item, subitem, price) {
    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("item-wrapper");

    const foodItem = document.createElement("p");
    foodItem.classList.add("food-item");
    foodItem.textContent = item;
    itemWrapper.appendChild(foodItem);

    const foodPrice = document.createElement("p");
    foodPrice.classList.add("food-price");
    foodPrice.textContent = price;

    const filler = document.createElement("span");
    filler.classList.add("filler");

    if(subitem !== "none") {
        const subItemWrapper = document.createElement("div");
        subItemWrapper.classList.add("sub-item-wrapper");
        
        const subFoodItem = document.createElement("p");
        subFoodItem.classList.add("sub-food-item");
        subFoodItem.textContent = subitem;

        subItemWrapper.appendChild(subFoodItem);
        subItemWrapper.appendChild(filler);
        subItemWrapper.appendChild(foodPrice);
        itemWrapper.appendChild(subItemWrapper);
    }else {
        itemWrapper.appendChild(filler);
        itemWrapper.appendChild(foodPrice);
    }
    return itemWrapper;
}

function createSubFoodTitle(foodArr) {
    const subTitleWrapper = document.createElement("div");
    subTitleWrapper.classList.add("sub-title-wrapper");

    foodArr.forEach(title => {
        const subFoodTitle = document.createElement("p");
        subFoodTitle.classList.add("sub-food-title");
        subFoodTitle.textContent = title;
        subTitleWrapper.appendChild(subFoodTitle);
    });
    return subTitleWrapper;
}

function createImg(source, size) {
    const img = document.createElement("img");
    img.classList.add("food-img");
    img.src = source;
    img.setAttribute("style", `${size}`);
    return img; 
}

export {createAppetizers, createSalads, createPoBoys, createSpecialitySandwiches, createSandwiches};