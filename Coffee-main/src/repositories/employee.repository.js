// =============================================
// EMPLOYEE REPOSITORY - Truy vấn trực tiếp DB
// Bảng: EMPLOYEE (EMP_ID, EMP_NAME, DOB, WORK_HOURS)
// =============================================
const { pool } = require('../config/database');

const EmployeeRepository = {
  // [READ] Lấy tất cả nhân viên
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM EMPLOYEE ORDER BY EMP_ID');
    return rows;
  },

  // [READ] Lấy nhân viên theo ID
  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM EMPLOYEE WHERE EMP_ID = ?', [id]);
    return rows[0] || null;
  },

  // [CREATE] Thêm nhân viên mới
  async create({ EMP_ID, EMP_NAME, DOB, WORK_HOURS }) {
    const [result] = await pool.query(
      'INSERT INTO EMPLOYEE (EMP_ID, EMP_NAME, DOB, WORK_HOURS) VALUES (?, ?, ?, ?)',
      [EMP_ID, EMP_NAME, DOB, WORK_HOURS]
    );
    return result;
  },

  // [UPDATE] Cập nhật thông tin nhân viên
  async update(id, { EMP_NAME, DOB, WORK_HOURS }) {
    const [result] = await pool.query(
      'UPDATE EMPLOYEE SET EMP_NAME = ?, DOB = ?, WORK_HOURS = ? WHERE EMP_ID = ?',
      [EMP_NAME, DOB, WORK_HOURS, id]
    );
    return result;
  },

  // [DELETE] Xóa nhân viên
  async delete(id) {
    const [result] = await pool.query('DELETE FROM EMPLOYEE WHERE EMP_ID = ?', [id]);
    return result;
  },
};

module.exports = EmployeeRepository;
