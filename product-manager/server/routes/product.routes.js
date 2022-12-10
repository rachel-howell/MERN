const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/products', ProductController.createProduct)
    app.get('/api/products', ProductController.getProducts)
    app.get('/api/products/:id', ProductController.getProductById)
    app.put('/api/products/:id', ProductController.updateProduct)
    app.delete('/api/products/:id', ProductController.deleteProduct)
}