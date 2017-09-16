var Term = function(data) {

  this.name = data.name; 
  this.description = data.description;
  this.keywords = data.keywords;
  this.image = data.image;
  this.tags = data.tags;
  this.add_info = data.add_info;
  this.webpages = data.webpages;

}

module.exports = Term;