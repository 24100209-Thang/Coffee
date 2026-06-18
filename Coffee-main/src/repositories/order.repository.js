// =============================================
// ORDER REPOSITORY - Truy vấn trực tiếp DB
// Bảng: CUSTOMER_ORDER (ORDER_ID, CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE)
// =============================================
const { pool } = require('../config/database');

const OrderRepository = {
  // [READ] Lấy tất cả đơn hàng (kèm tên khách hàng và tên sản phẩm)
  async findAll() {
    const [rows] = await pool.query(`
      SELECT o.*, c.CUSTOMER_NAME, i.ITEM_NAME, i.PRICE,
             (o.QUANTITY * i.PRICE) AS TOTAL_AMOUNT
      FROM CUSTOMER_ORDER o
      LEFT JOIN CUSTOMER c ON o.CUSTOMER_ID = c.CUSTOMER_ID
      LEFT JOIN ITEM i ON o.ITEM_ID = i.ITEM_ID
      ORDER BY o.ORDER_ID
    `);
    return rows;
  },

  // [READ] Lấy đơn hàng theo ORDER_ID
  async findById(id) {
    const [rows] = await pool.query(`
      SELECT o.*, c.CUSTOMER_NAME, i.ITEM_NAME, i.PRICE,
             (o.QUANTITY * i.PRICE) AS TOTAL_AMOUNT
      FROM CUSTOMER_ORDER o
      LEFT JOIN CUSTOMER c ON o.CUSTOMER_ID = c.CUSTOMER_ID
      LEFT JOIN ITEM i ON o.ITEM_ID = i.ITEM_ID
      WHERE o.ORDER_ID = ?
    `, [id]);
    return rows[0] || null;
  },

  // [READ] Lấy đơn hàng theo CUSTOMER_ID
  async findByCustomer(customerId) {
    const [rows] = await pool.query(`
      SELECT o.*, c.CUSTOMER_NAME, i.ITEM_NAME, i.PRICE,
             (o.QUANTITY * i.PRICE) AS TOTAL_AMOUNT
      FROM CUSTOMER_ORDER o
      LEFT JOIN CUSTOMER c ON o.CUSTOMER_ID = c.CUSTOMER_ID
      LEFT JOIN ITEM i ON o.ITEM_ID = i.ITEM_ID
      WHERE o.CUSTOMER_ID = ?
      ORDER BY o.ORDER_DATE DESC
    `, [customerId]);
    return rows;
  },

  // [CREATE] Tạo đơn hàng mới (ORDER_ID tự động tăng)
  async create({ CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE }) {
    const [result] = await pool.query(
      'INSERT INTO CUSTOMER_ORDER (CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE) VALUES (?, ?, ?, ?)',
      [CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE || new Date()]
    );
    return result;
  },

  // [UPDATE] Cập nhật đơn hàng
  async update(id, { CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE }) {
    const [result] = await pool.query(
      'UPDATE CUSTOMER_ORDER SET CUSTOMER_ID = ?, ITEM_ID = ?, QUANTITY = ?, ORDER_DATE = ? WHERE ORDER_ID = ?',
      [CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE, id]
    );
    return result;
  },

  // [DELETE] Xóa đơn hàng
  async delete(id) {
    const [result] = await pool.query('DELETE FROM CUSTOMER_ORDER WHERE ORDER_ID = ?', [id]);
    return result;
  },
};

module.exports = OrderRepository;
