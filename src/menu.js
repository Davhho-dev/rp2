function buildMenu() {
    createAppetizers();
    createSalads();
    createPoBoys();
    createSpecialitySandwiches();
    createSandwiches();
    createBreakfast();
    createOmelet();
    createEggPlates();
    createPancakes();
    createSideOrders();
    createKidsMenu();
    createVietnameseSpecials();
    createPlatter();
    createSeafood();
    createSeafoodALC();
    createSteakPlatter();
    createBeverages();
    createDesserts()
}

function createAppetizers() {
    const appetizers = document.getElementById("appetizers");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createFood("Chef's Platter", "(Cheese Sticks, Chicken Tenders, Egg Roll & Crab Rangoon)", "$8.45"));
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
    if(window.innerWidth > "420") foodWrapper.appendChild(createImg("../dist/images/salad.jpeg", "width: 412px; height: 308px;"));
    salads.appendChild(foodWrapper);
}

function createPoBoys() {
    const poboys = document.getElementById("po-boys");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["Add Fries for $1.95", "Add Cajun Fries, Onion Rings, or Sweet Potato Fries for $2.25"]));
    foodWrapper.appendChild(createFood("Fried Shrimp", "none", "$9.10"));
    foodWrapper.appendChild(createFood("Shrimp & Catfish", "none", "$12.95"));
    foodWrapper.appendChild(createFood("Soft Shell Crab", "none", "$14.65"));
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
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["Served with Fries"]));
    foodWrapper.appendChild(createFood("Philly Steak and Cheese", "with onions, bell peppers & a side of Au jus", "$9.15"));
    foodWrapper.appendChild(createFood("Pelican (Chicken Philly)", "with onions, bell peppers & our special pelican sauce", "$9.15"));
    foodWrapper.appendChild(createFood("Crab Swiss Poboy", "none", "$9.75"));
    foodWrapper.appendChild(createFood("Club", "Ham, Roast Beef, Bacon, & Cheese", "$9.95"));
    foodWrapper.appendChild(createFood("Roast Beef & Bacon Double Decker", "none", "$9.95"));
    specialSandwiches.appendChild(foodWrapper);
}

function createSandwiches() {
    const sandwiches = document.getElementById("sandwiches");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["Add Fries for $1.95", "Add Cajun Fries, Onion Rings, or Sweet Potato Fries for $2.25"]));
    foodWrapper.appendChild(createFood("Reuben", "(Corned beef, Sauerkraut, Swiss Cheese & Thousand Island on Grilled Rye Bread)", "$6.95"));
    foodWrapper.appendChild(createFood("Crab Swiss on rye", "none", "$7.55"));
    foodWrapper.appendChild(createFood("Grilled or Fried Chicken Breast on bun", "none", "$7.45"));
    foodWrapper.appendChild(createFood("Roast Beef (Hot or Cold", "none", "$7.25"));
    foodWrapper.appendChild(createFood("Roast Beef and Bacon", "none", "$8.20"));
    foodWrapper.appendChild(createFood("Turkey or Ham (Hot or Cold)", "none", "$7.45"));
    foodWrapper.appendChild(createFood("Turkey or Ham & Cheese (Hot or Cold)", "none", "$7.45"));
    foodWrapper.appendChild(createFood("BLT", "none", "$6.65"));
    foodWrapper.appendChild(createFood("Grilled Cheese", "none", "$3.10"));
    foodWrapper.appendChild(createFood("Chicken Salad or Tuna Salad on toast", "none", "$6.65"));
    foodWrapper.appendChild(createFood("Tuna or Chicken Salad on Croissant", "none", "$7.45"));
    foodWrapper.appendChild(createFood("Patty Melt", "none", "$5.75"));
    foodWrapper.appendChild(createFood("Hamburger", "none", "$4.60"));
    foodWrapper.appendChild(createFood("Cheeseburger", "none", "$5.15"));
    sandwiches.appendChild(foodWrapper);
}

function createBreakfast() {
    const breakfast = document.getElementById("breakfast-menu");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["Available All Day"]));
    foodWrapper.appendChild(createFood("Breakfast Special", "2 Eggs, Grits, & Toast (No Substitions) only until 11:00am", "$4.75"));
    foodWrapper.appendChild(createFood("Deluxe Breakfast", "2 Pancakes, 2 Eggs, Grits or Hash brown & Bacon Ham or Sausage", "$9.85"));
    foodWrapper.appendChild(createFood("Chef's Breakfast", "1 Biscuit with Gravy, 2 Eggs, Grits or Hash browns & Bacon, Ham, or Sausage", "$9.85"));
    foodWrapper.appendChild(createFood("Smoked Pork Chop", "2 Eggs, Grits, or Hash Browns & Toast", "$9.25"));
    foodWrapper.appendChild(createFood("Corned Beef Hash", "2 Eggs, Grits, or Hash Browns & Toast", "$9.25"));
    foodWrapper.appendChild(createFood("8oz Ribeye", "2 Eggs, Grits or Hash Browns & Toast", "Market Price"));
    breakfast.appendChild(foodWrapper);
}

function createOmelet() {
    const omelet = document.getElementById("omelets");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["Served with Grits or Hash brown & Toast"]));
    foodWrapper.appendChild(createFood("Cheese", "none", "$6.95"));
    foodWrapper.appendChild(createFood("Meat & Cheese", "Bacon, Ham, or Sausage", "$8.65"));
    foodWrapper.appendChild(createFood("Western Omelet", "Onions, Bell Peppers, Tomatoes", "$8.65"));
    foodWrapper.appendChild(createFood("Grilled Shrimp", "none", "$13.95"));
    foodWrapper.appendChild(createFood("Add to any omelet Bacon, Ham, or Sausage", "none", "$2.35"));
    foodWrapper.appendChild(createFood("Onion, Bell Pepper, Tomato, or Jalepño", "none", "$.75"));
    omelet.appendChild(foodWrapper);
}

function createEggPlates() {
    const eggplate = document.getElementById("egg-plates");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["Served with Grits or Hash browns & Toast"]));
    foodWrapper.appendChild(createSplitFood(["1 Egg any style", "$5.45", "with meat $7.60"]));
    foodWrapper.appendChild(createSplitFood(["2 Eggs any style", "$5.95", "with meat $8.15"]));
    foodWrapper.appendChild(createSplitFood(["3 Eggs any style", "$6.15", "with meat $8.45"]));
    eggplate.appendChild(foodWrapper);
}

function createPancakes() {
    const pancakes = document.getElementById("pancakes");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSplitFood(["Short Stack (2)", "$5.95", "with meat $7.75"]));
    foodWrapper.appendChild(createSplitFood(["Full Stack (3)", "$7.35", "with meat $9.55"]));
    foodWrapper.appendChild(createSplitFood(["French Toast (3)", "$7.95", "with meat $9.95"]));
    foodWrapper.appendChild(createFood("Add Blueberries, Pecans, Chocolate chips, Strawberries, or Bananas", "none", "$1.75"));
    pancakes.appendChild(foodWrapper);
}

function createSideOrders() {
    const sideOrders = document.getElementById("side-orders");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSplitFood(["Biscuit & Gravy", "(1) $4.25", "(2) $6.45"]));
    foodWrapper.appendChild(createFood("Hash brown", "none", "$2.95"));
    foodWrapper.appendChild(createFood("Grits", "none", "$1.90"));
    foodWrapper.appendChild(createSplitFood(["Oatmeal", "cup $3.25", "bowl $4.75"]));
    foodWrapper.appendChild(createFood("Bacon, Ham, or Sausage", "none", "$3.10"));
    foodWrapper.appendChild(createSplitFood(["Eggs", "(1) $1.00", "(2) $1.95"]));
    foodWrapper.appendChild(createFood("Toast (White or Wheat)", "none", "$1.95"));
    foodWrapper.appendChild(createFood("Croissant", "none", "$2.55"));
    foodWrapper.appendChild(createFood("Biscuit, Rye Toast, or English Muffin", "none", "$2.25"));
    foodWrapper.appendChild(createFood("Fresh Fruit Cup", "none", "$3.95"));
    foodWrapper.appendChild(createFood("Boiled or Poached Egg", "none", "each $1.75"));
    foodWrapper.appendChild(createFood("Home Fries", "none", "$3.10"));
    sideOrders.appendChild(foodWrapper);
}

function createKidsMenu() {
    const kidsMenu = document.getElementById("kids-menu");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["All served with Fries"]));
    foodWrapper.appendChild(createFood("Grilled Cheese", "none", "$4.20"));
    foodWrapper.appendChild(createFood("2 Piece Chicken Tenders", "none", "$5.35"));
    foodWrapper.appendChild(createFood("Shrimp", "none", "$5.35"));
    foodWrapper.appendChild(createFood("Catfish", "none", "$5.35"));
    foodWrapper.appendChild(createFood("Hamburger", "none", "$4.00"));
    foodWrapper.appendChild(createFood("Cheeseburger", "none", "$4.20"));
    if(window.innerWidth > "420") {
        foodWrapper.appendChild(createImg("../dist/images/steak.jpeg", "width: 397px; height: 305px;"));
        foodWrapper.appendChild(createImg("../dist/images/menu-pelican.svg", "width: 397px; height: 183px;"));
    }
    kidsMenu.appendChild(foodWrapper);
}

function createVietnameseSpecials() {
    const vietnameseSpecial = document.getElementById("vietnamese-specials");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createFood("Bánh Mì Gà", "none", "$8.55"));
    foodWrapper.appendChild(createSplitFood(["Pho", "Dine In $10.55", "take out $11.55"]));
    foodWrapper.appendChild(createFood("Bún Bò Xào", "none", "$10.75"));
    foodWrapper.appendChild(createFood("Bún Tôm Nem Nướng", "none", "$12.75"));
    if(window.innerWidth > "420") foodWrapper.appendChild(createImg("../dist/images/vietnamese.jpeg", "width: 381px; height: 285px;"));
    vietnameseSpecial.appendChild(foodWrapper);
}

function createPlatter() {
    const platter = document.getElementById("platters");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createFood("Hamburger Steak", "with onions & gravy", "$10.15"));
    foodWrapper.appendChild(createFood("Open Face Roast Beef", "none", "$9.15"));
    foodWrapper.appendChild(createFood("Grilled Chicken", "(with onions, bell peppers, & swiss cheese)", "$9.15"));
    foodWrapper.appendChild(createFood("Chicken Penne Pasta", "Served with Fries, Mashed Potato, or Rice & Gravy", "$9.35"));
    platter.appendChild(foodWrapper);
}

function createSeafood() {
    const seafood = document.getElementById("seafood");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["To substitue Grilled Shrimp or Catfish  $3.00"]));
    foodWrapper.appendChild(createFood("Fried Shrimp", "Freshly battered shrimp served with Fries, Hushpuppies and Coleslaw or Salad", "$15.95"));
    foodWrapper.appendChild(createFood("Catfish", "Deep fried filets in our special batter served with Fries, Hushpuppies, and Salad or Coleslaw", "$13.95"));
    foodWrapper.appendChild(createFood("Soft Shell Crab", "2 Large Soft Shell Crabs served with Fries, Hushpuppies, and Coleslaw or Salad", "$17.95"));
    foodWrapper.appendChild(createFood("Half & Half", "Your choice of two: Shrimp, Catfish, or Soft Shell served with Fries, Hushpuppies, Salad or Coleslaw", "$17.45"));
    foodWrapper.appendChild(createFood("Seafood Dinner", "Shrimp, Catfish, & Stuffed Crab served with Fries, Hushpuppies, Salad, and Coleslaw", "$18.95"));
    foodWrapper.appendChild(createFood("Grilled Mahi Mahi", "served over Angel Hair pasta and topped with Shrimp and spinach cream sauce served with fresh vegetables, Salad, and a Hot Roll", "$16.75"));
    foodWrapper.appendChild(createFood("Crab Cake", "topped with Mango Sauce served with Fresh Vegatables, Salad, and a Hot Roll", "$16.75"));
    seafood.appendChild(foodWrapper);
}

function createSeafoodALC() {
    const seafoodALC = document.getElementById("seafood-alacarte");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["Served with Fries or Coleslaw"]));
    foodWrapper.appendChild(createFood("4 Piece Catfish", "none", "$9.10"));
    foodWrapper.appendChild(createFood("Tempura Fried Shrimp", "none", "$9.10"));
    foodWrapper.appendChild(createFood("Soft Shell Crab (1Large)", "none", "$12.25"));
    foodWrapper.appendChild(createFood("Stuffed Crab (1)", "none", "$6.15"));
    foodWrapper.appendChild(createFood("Shrimp & Catfish Basket", "none", "$13.95"));
    seafoodALC.appendChild(foodWrapper);
}

function createSteakPlatter() {
    const steak = document.getElementById("steak");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createSubFoodTitle(["Served with one Side, Salad, or Hot Roll"]));
    foodWrapper.appendChild(createFood("Steak and Shrimp", "8oz Ribeye and Tempura Fried Shrimp", "$20.45"));
    foodWrapper.appendChild(createFood("12oz. Ribeye", "when available", "Market Price"));
    foodWrapper.appendChild(createFood("8oz. Ribeye", "none", "Market Price"));
    foodWrapper.appendChild(createFood("Weekend Prime Rib", "when available", "Market Price"));
    steak.appendChild(foodWrapper);
}

function createBeverages() {
    const beverages = document.getElementById("beverages");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createFood("Coffee/ Hot Tea", "none", "$2.10"));
    foodWrapper.appendChild(createFood("V8 or Tomato Juice", "none", "$2.10"));
    foodWrapper.appendChild(createFood("Milk", "none", "$1.80 / $2.30"));
    foodWrapper.appendChild(createFood("Chocolate Milk", "none", "$2.15 / $2.75"));
    foodWrapper.appendChild(createFood("Orange or Apple Juice", "none", "$2.10 / $2.35 / $2.85"));
    foodWrapper.appendChild(createFood("Iced Tea", "none", "$2.25"));
    foodWrapper.appendChild(createFood("Coke, Diet Coke, Sprite, Dr.Pepper", "none", "$2.25"));
    foodWrapper.appendChild(createFood("Barq's in a bottle", "none", "$2.25"));
    foodWrapper.appendChild(createFood("Bottled Beer:", "Bud, Bud light, Miller light, Michelob Ultra, Corona, or Mike's Heineken", "$2.95"));
    foodWrapper.appendChild(createFood("Yuenging & Yuenging Lite", "none", "$3.65"));
    beverages.appendChild(foodWrapper);
}

function createDesserts() {
    const desserts = document.getElementById("desserts");
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(createFood("Bread Pudding with Brandy Sauce", "none", "$4.75"));
    foodWrapper.appendChild(createFood("Mississippi Mud Pie", "none", "$4.75"));
    foodWrapper.appendChild(createFood("New York Style Cheese Cake", "with Raspberry Sauce", "$4.75"));
    foodWrapper.appendChild(createFood("Turtle Cheese Cake", "none", "$4.95"));
    desserts.appendChild(foodWrapper);
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

        subItemWrapper.appendChild(foodItem);
        subItemWrapper.appendChild(filler);
        subItemWrapper.appendChild(foodPrice);
        itemWrapper.appendChild(subItemWrapper);
        itemWrapper.append(subFoodItem);
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

function createSplitFood(list) {
    const itemSplitWrapper = document.createElement("div");
    itemSplitWrapper.classList.add('item-split-wrapper');
    for(let i = 0; i < list.length; i++) {
        const foodItem = document.createElement("p");
        foodItem.classList.add("food-item");
        foodItem.textContent = list[i];
        itemSplitWrapper.appendChild(foodItem);
        if(i !== list.length - 1) {
            const filler = document.createElement("span");
            filler.classList.add("filler");
            itemSplitWrapper.appendChild(filler); 
        };
    };
    return itemSplitWrapper;
}

function createImg(source, size) {
    const img = document.createElement("img");
    img.classList.add("food-img");
    img.src = source;
    img.setAttribute("style", `${size}`);
    return img; 
}

export {buildMenu};