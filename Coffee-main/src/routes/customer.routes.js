// =============================================
// CUSTOMER ROUTES
// Base: /api/customers
// =============================================
const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customer.controller');

// GET    /api/customers        - Lấy tất cả khách hàng
// POST   /api/customers        - Tạo khách hàng mới
// GET    /api/customers/:id    - Lấy khách hàng theo ID
// PUT    /api/customers/:id    - Cập nhật khách hàng
// DELETE /api/customers/:id    - Xóa khách hàng

router.get('/', CustomerController.getAll);
router.post('/', CustomerController.create);
router.get('/:id', CustomerController.getById);
router.put('/:id', CustomerController.update);
router.delete('/:id', CustomerController.delete);

module.exports = router;
