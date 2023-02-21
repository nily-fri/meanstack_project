const express = require('express');
const productsBLL = require('../models/productsBLL');

const router = express.Router();

router.get('/', async (req, res) => {
    const prods = await productsBLL.getAllProducts();
  
  res.json(prods);
});

router.get('/:name', async (req, res) => {
    let name = req.params.name
    const prod = await productsBLL.getProdcutByName(name);
  
  res.json(prod);
});

router.post('/', async (req, res) => {
    let product = req.body
    await productsBLL.addProduct(product);
  
  res.json("created");
});

router.patch('/:id', async (req, res) => {
        let id = req.params.id

    let product = req.body
    await productsBLL.updateProduct(id, product);
  
  res.json("updated");
});



module.exports = router;