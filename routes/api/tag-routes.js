const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    Tag.findAll({
      include: {
        model: Product,
        attributes: ["product_name", "price", "stock", "category_id"]
      }
    })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      res.status(500).json(err)
    })
  });

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes:["product_name", "price", "stock", "category_id"]
    }
  })
  .then((tagData) => res.json(tagData))
  .catch((err) => {
    res.status(500).json(err)
  })
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
  .then(tagData => res.json(tagData))
  .catch((err) => {
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
    tag_id: req.body.tag_id
  }
  })
  .then((tagData) => {
    if (!tagData) {
      res.status(404).json({ message: "No tag found with this ID"})
    }
    else{
      res.json(tagData)
    }
  })
    .catch((err) => {
      res.status(500).json(err)
    })
  })

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:{
      tag_id: req.body.tag_id
    }
  })
  .then((tagData) => {
    if(!tagData){
      res.status(404).json({ message: "No tag found with this ID"})
    }
    else{
      res.json(tagData)
    }
  })
    .catch ((err) => {
      res.status(500).json(err)
    })
  // delete on tag by its `id` value
});

module.exports = router;
