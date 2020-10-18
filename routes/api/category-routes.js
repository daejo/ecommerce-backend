const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', (req, res) => {
  // find all by categories
  Category.findAll({
    include: [
      {
        model: Product,
        attribute: ['id', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(categoryResponse => {
      if (!categoryResponse) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(categoryResponse);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  // find a category by its id
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attribute: ['id', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(categoryResponse => {
      if (!categoryResponse) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(categoryResponse);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(
    {
      category_name: req.body.category_name
    }
  )
    .then(categoryResponse => {
      if (!categoryResponse) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(categoryResponse);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});


router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(categoryResponse => {
      if (!categoryResponse) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(categoryResponse);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryResponse => {
      if (!categoryResponse) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(categoryResponse);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

module.exports = router;
