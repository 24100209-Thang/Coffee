// =============================================
// ORDER SERVICE - Logic nghiệp vụ
// =============================================
const OrderRepository = require('../repositories/order.repository');
const CustomerRepository = require('../repositories/customer.repository');
const ItemRepository = require('../repositories/item.repository');

const OrderService = {
  // Lấy tất cả đơn hàng
  async getAll() {
    return await OrderRepository.findAll();
  },

  // Lấy đơn hàng theo ID
  async getById(id) {
    const order = await OrderRepository.findById(id);
    if (!order) throw { status: 404, message: `Không tìm thấy đơn hàng với ID: ${id}` };
    return order;
  },

  // Lấy đơn hàng theo khách hàng
  async getByCustomer(customerId) {
    const customer = await CustomerRepository.findById(customerId);
    if (!customer) throw { status: 404, message: `Không tìm thấy khách hàng ${customerId}` };
    return await OrderRepository.findByCustomer(customerId);
  },

  // Tạo đơn hàng mới
  async create(data) {
    const { CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE } = data;
    if (!CUSTOMER_ID || !ITEM_ID || !QUANTITY) {
      throw { status: 400, message: 'CUSTOMER_ID, ITEM_ID và QUANTITY là bắt buộc' };
    }
    if (QUANTITY <= 0) throw { status: 400, message: 'Số lượng phải lớn hơn 0' };

    // Kiểm tra khách hàng tồn tại
    const customer = await CustomerRepository.findById(CUSTOMER_ID);
    if (!customer) throw { status: 400, message: `Khách hàng "${CUSTOMER_ID}" không tồn tại` };

    // Kiểm tra sản phẩm tồn tại
    const item = await ItemRepository.findById(ITEM_ID);
    if (!item) throw { status: 400, message: `Sản phẩm "${ITEM_ID}" không tồn tại` };

    const result = await OrderRepository.create({
      CUSTOMER_ID,
      ITEM_ID,
      QUANTITY,
      ORDER_DATE: ORDER_DATE || new Date().toISOString().split('T')[0],
    });

    return await OrderRepository.findById(result.insertId);
  },

  // Cập nhật đơn hàng
  async update(id, data) {
    const { CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE } = data;
    // Kiểm tra tồn tại
    await OrderService.getById(id);

    if (!CUSTOMER_ID || !ITEM_ID || !QUANTITY) {
      throw { status: 400, message: 'CUSTOMER_ID, ITEM_ID và QUANTITY là bắt buộc' };
    }
    if (QUANTITY <= 0) throw { status: 400, message: 'Số lượng phải lớn hơn 0' };

    // Kiểm tra khách hàng tồn tại
    const customer = await CustomerRepository.findById(CUSTOMER_ID);
    if (!customer) throw { status: 400, message: `Khách hàng "${CUSTOMER_ID}" không tồn tại` };

    // Kiểm tra sản phẩm tồn tại
    const item = await ItemRepository.findById(ITEM_ID);
    if (!item) throw { status: 400, message: `Sản phẩm "${ITEM_ID}" không tồn tại` };

    await OrderRepository.update(id, { CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE });
    return await OrderRepository.findById(id);
  },

  // Xóa đơn hàng
  async delete(id) {
    await OrderService.getById(id);
    const result = await OrderRepository.delete(id);
    if (result.affectedRows === 0) throw { status: 404, message: 'Xóa thất bại' };
    return { message: `Đã xóa đơn hàng #${id} thành công` };
  },
};

module.exports = OrderService;
