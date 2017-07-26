
var Park = function(){
this.enclosure = [];
};

Park.prototype = {
  dinoCount: function(){
    return this.enclosure.length;
  },

  addADino: function(dinosaur){
    this.enclosure.push(dinosaur);
  },

  getIndexOfDino: function(dinosaur){
    return this.enclosure.indexOf(dinosaur);
  },

  removeAllDinos: function(dinosaur){
    for(var i = 0; i < dinoCount(); i++){
      this.enclosure.splice(getIndexOfDino,1);
    }
  },


  findByType: function(dinosaur){
    for (dinosaur of this.enclosure){
      if(type === dinosaur.type){
        return dinosaur;
      }
    }
    return null;
  },






}











module.exports = Park;