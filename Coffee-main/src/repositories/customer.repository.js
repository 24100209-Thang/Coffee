// =============================================
// CUSTOMER REPOSITORY - Truy vấn trực tiếp DB
// Bảng: CUSTOMER (CUSTOMER_ID, CUSTOMER_NAME, PHONE, EMP_ID)
// =============================================
const { pool } = require('../config/database');

const CustomerRepository = {
  // [READ] Lấy tất cả khách hàng (kèm tên nhân viên phụ trách)
  async findAll() {
    const [rows] = await pool.query(`
      SELECT c.*, e.EMP_NAME 
      FROM CUSTOMER c
      LEFT JOIN EMPLOYEE e ON c.EMP_ID = e.EMP_ID
      ORDER BY c.CUSTOMER_ID
    `);
    return rows;
  },

  // [READ] Lấy khách hàng theo ID
  async findById(id) {
    const [rows] = await pool.query(`
      SELECT c.*, e.EMP_NAME
      FROM CUSTOMER c
      LEFT JOIN EMPLOYEE e ON c.EMP_ID = e.EMP_ID
      WHERE c.CUSTOMER_ID = ?
    `, [id]);
    return rows[0] || null;
  },

  // [CREATE] Thêm khách hàng mới
  async create({ CUSTOMER_ID, CUSTOMER_NAME, PHONE, EMP_ID, STATUS }) {
    const [result] = await pool.query(
      'INSERT INTO CUSTOMER (CUSTOMER_ID, CUSTOMER_NAME, PHONE, EMP_ID, STATUS) VALUES (?, ?, ?, ?,?)',
      [CUSTOMER_ID, CUSTOMER_NAME, PHONE, EMP_ID || null, STATUS || 'ACTIVE']
    );
    return result;
  },

  // [UPDATE] Cập nhật thông tin khách hàng
  async update(id, { CUSTOMER_NAME, PHONE, EMP_ID, STATUS }) {
    const [result] = await pool.query(
      'UPDATE CUSTOMER SET CUSTOMER_NAME = ?, PHONE = ?, EMP_ID = ?, STATUS = ? WHERE CUSTOMER_ID = ?',
      [CUSTOMER_NAME, PHONE, EMP_ID || null, STATUS || 'ACTIVE', id]
    );
    return result;
  },

  // [DELETE] Xóa khách hàng
  async delete(id) {
    const [result] = await pool.query('DELETE FROM CUSTOMER WHERE CUSTOMER_ID = ?', [id]);
    return result;
  },
};

module.exports = CustomerRepository;
