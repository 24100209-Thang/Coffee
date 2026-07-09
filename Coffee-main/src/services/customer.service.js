// =============================================
// CUSTOMER SERVICE - Logic nghiệp vụ
// =============================================
const CustomerRepository = require('../repositories/customer.repository');
const EmployeeRepository = require('../repositories/employee.repository');

const CustomerService = {
  // Lấy tất cả khách hàng
  async getAll() {
    return await CustomerRepository.findAll();
  },

  // Lấy khách hàng theo ID
  async getById(id) {
    const customer = await CustomerRepository.findById(id);
    if (!customer) throw { status: 404, message: `Không tìm thấy khách hàng với ID: ${id}` };
    return customer;
  },

  // Tạo khách hàng mới
  async create(data) {
    const { CUSTOMER_ID, CUSTOMER_NAME, PHONE, EMP_ID } = data;
    if (!CUSTOMER_ID) throw { status: 400, message: 'CUSTOMER_ID là bắt buộc' };

    // Kiểm tra ID đã tồn tại chưa
    const existing = await CustomerRepository.findById(CUSTOMER_ID);
    if (existing) throw { status: 409, message: `CUSTOMER_ID "${CUSTOMER_ID}" đã tồn tại` };

    // Kiểm tra EMP_ID hợp lệ nếu có
    if (EMP_ID) {
      const emp = await EmployeeRepository.findById(EMP_ID);
      if (!emp) throw { status: 400, message: `EMP_ID "${EMP_ID}" không tồn tại` };
    }

    await CustomerRepository.create({ CUSTOMER_ID, CUSTOMER_NAME, PHONE, EMP_ID });
    return await CustomerRepository.findById(CUSTOMER_ID);
  },

  // Cập nhật khách hàng
  async update(id, data) {
    const { CUSTOMER_NAME, PHONE, EMP_ID, STATUS } = data;
    // Kiểm tra tồn tại
    await CustomerService.getById(id);

    // Kiểm tra EMP_ID hợp lệ nếu có
    if (EMP_ID) {
      const emp = await EmployeeRepository.findById(EMP_ID);
      if (!emp) throw { status: 400, message: `EMP_ID "${EMP_ID}" không tồn tại` };
    }
    if (STATUS && !['ACTIVE', 'INACTIVE'].includes(STATUS)) {
      throw { status: 400, message: `STATUS phải là 'ACTIVE' hoặc 'INACTIVE'` };
    }
    await CustomerRepository.update(id, { CUSTOMER_NAME, PHONE, EMP_ID, STATUS });
    return await CustomerRepository.findById(id);
  },

  // Xóa khách hàng
  async delete(id) {
    await CustomerService.getById(id);
    const result = await CustomerRepository.delete(id);
    if (result.affectedRows === 0) throw { status: 404, message: 'Xóa thất bại' };
    return { message: `Đã xóa khách hàng ${id} thành công` };
  },
};

module.exports = CustomerService;
