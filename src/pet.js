//Initialising limit values
const MIN_AGE = 0;
const MIN_HUNGER = 0;
const MAX_FITNESS = 10;

//Growing up increments and decrements 
const GROWUP_AGE_INCREMENT = 1;
const GROWUP_HUNGER_INCREMENT = 5;
const GROWUP_FITNESS_DECREMENT = 3;

//Replenishment increments and decrements walk and feed
const WALK_FITNESS_INCREMENT = 4;
const FEED_HUNGER_DECREMENT = 3;

//Threshold values for the pet needing care
const NEED_WALK_FITNESS = 3;
const NEED_FEED_HUNGER = 5;

// Limit values for the pet being alive
const MAX_AGE = 30;
const MAX_HUNGER = 10;
const MIN_FITNESS = 0;


function Pet(name) {
    this.name = name;
    this.age = MIN_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
    this.children = [];
}

Pet.prototype = {
    get isAlive() {
        return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MIN_FITNESS; 
    }
}; 

Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error ("I can\'t grow up, I\'m dead :(");
    } else {
    this.age += GROWUP_AGE_INCREMENT;
    this.hunger += GROWUP_HUNGER_INCREMENT;
    this.fitness -= GROWUP_FITNESS_DECREMENT;
    };
};

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error ("I can\'t walk, I\'m dead :(");
    }
    if ((this.fitness + WALK_FITNESS_INCREMENT) <= MAX_FITNESS) {
        this.fitness += WALK_FITNESS_INCREMENT;
    } else {
    this.fitness = MAX_FITNESS;}
};

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error ("I can\'t eat, I\'m dead :(");
    }
    if ((this.hunger - FEED_HUNGER_DECREMENT) > MIN_HUNGER) {
        this.hunger -= FEED_HUNGER_DECREMENT;
    } else {
    this.hunger = MIN_HUNGER;}
};

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw new Error ("I\'m not doing great, I\'m dead :(");
    }
    if (this.fitness <= NEED_WALK_FITNESS && this.hunger >= NEED_FEED_HUNGER) {
        return "I want FOOD and walkies!";
    }
    if (this.fitness <= NEED_WALK_FITNESS ) {
        return "I want walkies";
    }
    if (this.hunger >= NEED_FEED_HUNGER ) {
        return "Feed me now!";
    } else {
        return "I feel great!";
    }
};


Pet.prototype.resurrect = function () {
    if (!this.isAlive) {
        this.age = MAX_AGE / 2;
        this.hunger = NEED_FEED_HUNGER - (FEED_HUNGER_DECREMENT- 1);
        this.fitness = NEED_WALK_FITNESS + (WALK_FITNESS_INCREMENT - 1); 
        return "whoooooooosh....  I\'m back! ʕ•ᴥ•ʔ";
    }

    throw new Error ("I\'m alive!! You can\'t resurrect me.");
    
};

// Adopting a child: dependency injection
Pet.prototype.adoptChild = function (child) {
    this.children.unshift(child);
};

// Having a baby: creating a new child object of the same instance as the parent
Pet.prototype.haveBaby = function (childName) {
    let child = new Pet(childName);
    this.children.unshift(child);
};

module.exports = Pet;