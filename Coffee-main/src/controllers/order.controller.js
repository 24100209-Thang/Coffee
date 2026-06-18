// =============================================
// ORDER CONTROLLER - Xử lý HTTP Request/Response
// =============================================
const OrderService = require('../services/order.service');

const OrderController = {
  // GET /api/orders
  async getAll(req, res) {
    try {
      const data = await OrderService.getAll();
      res.json({ success: true, count: data.length, data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // GET /api/orders/:id
  async getById(req, res) {
    try {
      const data = await OrderService.getById(req.params.id);
      res.json({ success: true, data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // GET /api/orders/customer/:customerId
  async getByCustomer(req, res) {
    try {
      const data = await OrderService.getByCustomer(req.params.customerId);
      res.json({ success: true, count: data.length, data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // POST /api/orders
  async create(req, res) {
    try {
      const data = await OrderService.create(req.body);
      res.status(201).json({ success: true, message: 'Tạo đơn hàng thành công', data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // PUT /api/orders/:id
  async update(req, res) {
    try {
      const data = await OrderService.update(req.params.id, req.body);
      res.json({ success: true, message: 'Cập nhật đơn hàng thành công', data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // DELETE /api/orders/:id
  async delete(req, res) {
    try {
      const result = await OrderService.delete(req.params.id);
      res.json({ success: true, ...result });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },
};

module.exports = OrderController;
