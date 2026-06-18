// =============================================
// ITEM REPOSITORY - Truy vấn trực tiếp DB
// Bảng: ITEM (ITEM_ID, ITEM_NAME, PRICE, ITEM_TYPE, EMP_ID)
// =============================================
const { pool } = require('../config/database');

const ItemRepository = {
  // [READ] Lấy tất cả sản phẩm (kèm tên nhân viên quản lý)
  async findAll() {
    const [rows] = await pool.query(`
      SELECT i.*, e.EMP_NAME
      FROM ITEM i
      LEFT JOIN EMPLOYEE e ON i.EMP_ID = e.EMP_ID
      ORDER BY i.ITEM_ID
    `);
    return rows;
  },

  // [READ] Lấy sản phẩm theo ID
  async findById(id) {
    const [rows] = await pool.query(`
      SELECT i.*, e.EMP_NAME
      FROM ITEM i
      LEFT JOIN EMPLOYEE e ON i.EMP_ID = e.EMP_ID
      WHERE i.ITEM_ID = ?
    `, [id]);
    return rows[0] || null;
  },

  // [READ] Lọc sản phẩm theo loại
  async findByType(type) {
    const [rows] = await pool.query(
      'SELECT * FROM ITEM WHERE ITEM_TYPE = ? ORDER BY ITEM_ID',
      [type]
    );
    return rows;
  },

  // [CREATE] Thêm sản phẩm mới
  async create({ ITEM_ID, ITEM_NAME, PRICE, ITEM_TYPE, EMP_ID }) {
    const [result] = await pool.query(
      'INSERT INTO ITEM (ITEM_ID, ITEM_NAME, PRICE, ITEM_TYPE, EMP_ID) VALUES (?, ?, ?, ?, ?)',
      [ITEM_ID, ITEM_NAME, PRICE, ITEM_TYPE, EMP_ID || null]
    );
    return result;
  },

  // [UPDATE] Cập nhật thông tin sản phẩm
  async update(id, { ITEM_NAME, PRICE, ITEM_TYPE, EMP_ID }) {
    const [result] = await pool.query(
      'UPDATE ITEM SET ITEM_NAME = ?, PRICE = ?, ITEM_TYPE = ?, EMP_ID = ? WHERE ITEM_ID = ?',
      [ITEM_NAME, PRICE, ITEM_TYPE, EMP_ID || null, id]
    );
    return result;
  },

  // [DELETE] Xóa sản phẩm
  async delete(id) {
    const [result] = await pool.query('DELETE FROM ITEM WHERE ITEM_ID = ?', [id]);
    return result;
  },
};

module.exports = ItemRepository;
