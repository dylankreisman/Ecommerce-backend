const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await category.findAll();
    {include: [{ model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}]}
  
  res.status(200).json(categoryData)
} catch(err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await category.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    if(!categoryData){
      res.status(404).json({message: 'No match found'})
    };
    res.status(200).json(categoryData)
  } catch (err){
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await category.create(req.body);
      res.status(200).json(categoryData)
    } catch (err) {
      res.status(500).json(err)
    }
  }
);

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await category.update(req.body, {
      include: [{ model: Product}]
    });
    res.status(200).json(categoryData)
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
