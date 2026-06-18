// =============================================
// EMPLOYEE CONTROLLER - Xử lý HTTP Request/Response
// =============================================
const EmployeeService = require('../services/employee.service');

const EmployeeController = {
  // GET /api/employees
  async getAll(req, res) {
    try {
      const data = await EmployeeService.getAll();
      res.json({ success: true, count: data.length, data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // GET /api/employees/:id
  async getById(req, res) {
    try {
      const data = await EmployeeService.getById(req.params.id);
      res.json({ success: true, data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // POST /api/employees
  async create(req, res) {
    try {
      const data = await EmployeeService.create(req.body);
      res.status(201).json({ success: true, message: 'Tạo nhân viên thành công', data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // PUT /api/employees/:id
  async update(req, res) {
    try {
      const data = await EmployeeService.update(req.params.id, req.body);
      res.json({ success: true, message: 'Cập nhật nhân viên thành công', data });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },

  // DELETE /api/employees/:id
  async delete(req, res) {
    try {
      const result = await EmployeeService.delete(req.params.id);
      res.json({ success: true, ...result });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message });
    }
  },
};

module.exports = EmployeeController;
