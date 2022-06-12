//Initialising limit values
const MIN_AGE = 0;
const MIN_HUNGER = 0;
const MAX_FITNESS = 10;

//Threshold values for needing care
const NEED_WALK_FITNESS = 3;
const NEED_FEED_HUNGER = 5;

//Threshold values for being alive
const MAX_AGE = 30;
const MAX_HUNGER = 10;
const MIN_FITNESS = 0;


function Pet(name) {
    this.name = name;
    this.age = MIN_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
}

Pet.prototype = {
    get isAlive() {
        return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MIN_FITNESS; 
    }
}; 

Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw "I can\'t grow up, I\'m dead :(";
    } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    };
};

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw "I can\'t walk, I\'m dead :(";
    }
    if ((this.fitness + 4) <= MAX_FITNESS) {
        this.fitness += 4;
    } else {
    this.fitness = MAX_FITNESS;}
};

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw "I can\'t eat, I\'m dead :(";
    }
    if ((this.hunger - 3) > MIN_HUNGER) {
        this.hunger -= 3;
    } else {
    this.hunger = MIN_HUNGER;}
};

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw "I\m not doing great, I\'m dead :(";
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


module.exports = Pet;