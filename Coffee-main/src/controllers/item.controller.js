// =============================================
// ITEM CONTROLLER - Xử lý HTTP Request/Response
// =============================================
const ItemService = require('../services/item.service');

const ItemController = {
  // GET /api/items?type=...
  async getAll(req, res) {
    try {
      const { type } = req.query; // lọc theo loại sản phẩm (tuỳ chọn)
      const data = await ItemService.getAll(type);
      res.json({ success: true, count: data.length, data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // GET /api/items/:id
  async getById(req, res) {
    try {
      const data = await ItemService.getById(req.params.id);
      res.json({ success: true, data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // POST /api/items
  async create(req, res) {
    try {
      const data = await ItemService.create(req.body);
      res.status(201).json({ success: true, message: 'Tạo sản phẩm thành công', data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // PUT /api/items/:id
  async update(req, res) {
    try {
      const data = await ItemService.update(req.params.id, req.body);
      res.json({ success: true, message: 'Cập nhật sản phẩm thành công', data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // DELETE /api/items/:id
  async delete(req, res) {
    try {
      const result = await ItemService.delete(req.params.id);
      res.json({ success: true, ...result });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },
};

module.exports = ItemController;
