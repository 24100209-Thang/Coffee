// =============================================
// CUSTOMER CONTROLLER - Xử lý HTTP Request/Response
// =============================================
const CustomerService = require('../services/customer.service');

const CustomerController = {
  // GET /api/customers
  async getAll(req, res) {
    try {
      const data = await CustomerService.getAll();
      res.json({ success: true, count: data.length, data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // GET /api/customers/:id
  async getById(req, res) {
    try {
      const data = await CustomerService.getById(req.params.id);
      res.json({ success: true, data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // POST /api/customers
  async create(req, res) {
    try {
      const data = await CustomerService.create(req.body);
      res.status(201).json({ success: true, message: 'Tạo khách hàng thành công', data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // PUT /api/customers/:id
  async update(req, res) {
    try {
      const data = await CustomerService.update(req.params.id, req.body);
      res.json({ success: true, message: 'Cập nhật khách hàng thành công', data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // DELETE /api/customers/:id
  async delete(req, res) {
    try {
      const result = await CustomerService.delete(req.params.id);
      res.json({ success: true, ...result });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },
};

module.exports = CustomerController;
