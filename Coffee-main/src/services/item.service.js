// =============================================
// ITEM SERVICE - Logic nghiệp vụ
// =============================================
const ItemRepository = require('../repositories/item.repository');
const EmployeeRepository = require('../repositories/employee.repository');

const ItemService = {
  // Lấy tất cả sản phẩm
  async getAll(type) {
    if (type) return await ItemRepository.findByType(type);
    return await ItemRepository.findAll();
  },

  // Lấy sản phẩm theo ID
  async getById(id) {
    const item = await ItemRepository.findById(id);
    if (!item) throw { status: 404, message: `Không tìm thấy sản phẩm với ID: ${id}` };
    return item;
  },

  // Tạo sản phẩm mới
  async create(data) {
    const { ITEM_ID, ITEM_NAME, PRICE, ITEM_TYPE, EMP_ID } = data;
    if (!ITEM_ID || !ITEM_NAME) {
      throw { status: 400, message: 'ITEM_ID và ITEM_NAME là bắt buộc' };
    }
    if (PRICE !== undefined && PRICE < 0) {
      throw { status: 400, message: 'Giá không được âm' };
    }

    // Kiểm tra ID đã tồn tại chưa
    const existing = await ItemRepository.findById(ITEM_ID);
    if (existing) throw { status: 409, message: `ITEM_ID "${ITEM_ID}" đã tồn tại` };

    // Kiểm tra EMP_ID hợp lệ nếu có
    if (EMP_ID) {
      const emp = await EmployeeRepository.findById(EMP_ID);
      if (!emp) throw { status: 400, message: `EMP_ID "${EMP_ID}" không tồn tại` };
    }

    await ItemRepository.create({ ITEM_ID, ITEM_NAME, PRICE: PRICE || 0, ITEM_TYPE, EMP_ID });
    return await ItemRepository.findById(ITEM_ID);
  },

  // Cập nhật sản phẩm
  async update(id, data) {
    const { ITEM_NAME, PRICE, ITEM_TYPE, EMP_ID } = data;
    // Kiểm tra tồn tại
    await ItemService.getById(id);

    if (!ITEM_NAME) throw { status: 400, message: 'ITEM_NAME là bắt buộc' };
    if (PRICE !== undefined && PRICE < 0) throw { status: 400, message: 'Giá không được âm' };

    // Kiểm tra EMP_ID hợp lệ nếu có
    if (EMP_ID) {
      const emp = await EmployeeRepository.findById(EMP_ID);
      if (!emp) throw { status: 400, message: `EMP_ID "${EMP_ID}" không tồn tại` };
    }

    await ItemRepository.update(id, { ITEM_NAME, PRICE, ITEM_TYPE, EMP_ID });
    return await ItemRepository.findById(id);
  },

  // Xóa sản phẩm
  async delete(id) {
    await ItemService.getById(id);
    const result = await ItemRepository.delete(id);
    if (result.affectedRows === 0) throw { status: 404, message: 'Xóa thất bại' };
    return { message: `Đã xóa sản phẩm ${id} thành công` };
  },
};

module.exports = ItemService;
