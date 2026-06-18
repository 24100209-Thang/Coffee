// =============================================
// ITEM ROUTES
// Base: /api/items
// =============================================
const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/item.controller');

// GET    /api/items           - Lấy tất cả sản phẩm (hỗ trợ ?type=... để lọc)
// POST   /api/items           - Tạo sản phẩm mới
// GET    /api/items/:id       - Lấy sản phẩm theo ID
// PUT    /api/items/:id       - Cập nhật sản phẩm
// DELETE /api/items/:id       - Xóa sản phẩm

router.get('/', ItemController.getAll);
router.post('/', ItemController.create);
router.get('/:id', ItemController.getById);
router.put('/:id', ItemController.update);
router.delete('/:id', ItemController.delete);

module.exports = router;
