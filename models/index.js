const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Multiple Products belongs to a Category
Product.belongsTo(Category, {  
  foreignKey: 'category_id'
})

// Categories includes multiple Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Multiple Products belongs to Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
})

// Tags belongs to multiple Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
