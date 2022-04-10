const chai = require('chai');
const { it } = require('mocha');
const assert = chai.assert;
const burgers = require('../controllers/burgers');
const ingredients = require('../controllers/ingredients');
const reviews = require('../controllers/reviews');

// burgers controller

describe("the index function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(burgers.index, "index exists");
        assert.isFunction(burgers.index, "index is a function");
    });
    it("should return existing burger(s)", ()=>{
        assert.isDefined(burgers.index, 'Burger Exists');
    })
});

describe("the show function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(burgers.show, "show exists");
        assert.isFunction(burgers.show, "show is a function");
    });
});
describe("the newBurger function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(burgers.new, "newBurger exists");
        assert.isFunction(burgers.new, "newBurger is a function");
    });
});
describe("the create function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(burgers.create, "create exists");
        assert.isFunction(burgers.create, "create is a function");
    });
});
describe("the delete function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(burgers.delete, "delete exists");
        assert.isFunction(burgers.delete, "delete is a function");
    });
});

// ingredients Controller

describe("the newIngredient function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(ingredients.new, "newIngredient exists");
        assert.isFunction(ingredients.new, "newIngredient is a function");
    });
});
describe("the create function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(ingredients.create, "create exists");
        assert.isFunction(ingredients.create, "create is a function");
    });
});
describe("the delete function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(ingredients.delete, "delete exists");
        assert.isFunction(ingredients.delete, "delete is a function");
    });
});

// reviews controller 

describe("the create function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(reviews.create, "create exists");
        assert.isFunction(reviews.create, "create is a function");
    });
});
describe("the delete function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(reviews.delete, "delete exists");
        assert.isFunction(reviews.delete, "delete is a function");
    });
});

describe("the edit function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(reviews.edit, "edit exists");
        assert.isFunction(reviews.edit, "edit is a function");
    });
});
describe("the update function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(reviews.update, "update exists");
        assert.isFunction(reviews.update, "update is a function");
    });
});