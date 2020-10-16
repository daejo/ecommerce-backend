// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { 
  as: 'Products', 
  foreignKey: 'category_id',
  constraints: false 
})

// Categories have many Products
Category.hasMany(Product, {
  as: 'Categories',
  foreignKey: 'category_id',
  constraints: false 
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  as: 'ProductTags',
  through: ProductTag,
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  as: 'Tags',
  through: ProductTag,
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
