var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js')

describe("Park", function(){
  var dino1 = new Dinosaur("Dravidosaurus", 2);
  var dino2 = new Dinosaur("Tyrannosaurus", 2);
  var dino3 = new Dinosaur("Velociraptor", 5);
  var dino4 = new Dinosaur("Triceratops", 4);
  var dinosaur;


  beforeEach(function(){
    park = new Park();
    park.addADino(dino1);
    park.addADino(dino2);
    park.addADino(dino3);
    park.addADino(dino4);
  });

  it('shold be able to count dinos in the enclosure', function(){
    assert.strictEqual(park.dinoCount(), 4);
  })

  it('should be able to add dinosaur', function(){
    park.addADino(new Dinosaur("Diplodocus", 2));
    assert.strictEqual(park.dinoCount(), 5);
  })

  it('should be able to get index of a dino', function(){
    assert.strictEqual(park.getIndexOfDino(dino1), 0);
  })

  it('should be able to empty the enclosure', function(){
    park.removeAllDinos();
    assert.strictEqual(park.dinoCount(), 0);
  })

  it('should be able to find dino by type', function(){
      dinosaur.findByType("Dravidosaurus");
      assert.strictEqual(dinosaur.type, "Dravidosaurus");
  });








  }); // END END END END 




