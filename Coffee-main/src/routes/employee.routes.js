// =============================================
// EMPLOYEE ROUTES
// Base: /api/employees
// =============================================
const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employee.controller');

// GET    /api/employees        - Lấy tất cả nhân viên
// POST   /api/employees        - Tạo nhân viên mới
// GET    /api/employees/:id    - Lấy nhân viên theo ID
// PUT    /api/employees/:id    - Cập nhật nhân viên
// DELETE /api/employees/:id    - Xóa nhân viên

router.get('/', EmployeeController.getAll);
router.post('/', EmployeeController.create);
router.get('/:id', EmployeeController.getById);
router.put('/:id', EmployeeController.update);
router.delete('/:id', EmployeeController.delete);

module.exports = router;
