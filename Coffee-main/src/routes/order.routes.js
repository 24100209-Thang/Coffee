// =============================================
// ORDER ROUTES
// Base: /api/orders
// =============================================
const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');

// GET    /api/orders                        - Lấy tất cả đơn hàng
// POST   /api/orders                        - Tạo đơn hàng mới
// GET    /api/orders/customer/:customerId   - Đơn hàng theo khách hàng
// GET    /api/orders/:id                    - Lấy đơn hàng theo ORDER_ID
// PUT    /api/orders/:id                    - Cập nhật đơn hàng
// DELETE /api/orders/:id                    - Xóa đơn hàng

// Đặt route cụ thể trước route param để tránh xung đột
router.get('/customer/:customerId', OrderController.getByCustomer);

router.get('/', OrderController.getAll);
router.post('/', OrderController.create);
router.get('/:id', OrderController.getById);
router.put('/:id', OrderController.update);
router.delete('/:id', OrderController.delete);

module.exports = router;
