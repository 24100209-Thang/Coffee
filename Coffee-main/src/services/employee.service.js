// =============================================
// EMPLOYEE SERVICE - Logic nghiệp vụ
// =============================================
const EmployeeRepository = require('../repositories/employee.repository');

const EmployeeService = {
  // Lấy tất cả nhân viên
  async getAll() {
    return await EmployeeRepository.findAll();
  },

  // Lấy nhân viên theo ID
  async getById(id) {
    const emp = await EmployeeRepository.findById(id);
    if (!emp) throw { status: 404, message: `Không tìm thấy nhân viên với ID: ${id}` };
    return emp;
  },

  // Tạo nhân viên mới
  async create(data) {
    const { EMP_ID, EMP_NAME, DOB, WORK_HOURS } = data;
    if (!EMP_ID || !EMP_NAME || !DOB) {
      throw { status: 400, message: 'EMP_ID, EMP_NAME và DOB là bắt buộc' };
    }
    // Kiểm tra ID đã tồn tại chưa
    const existing = await EmployeeRepository.findById(EMP_ID);
    if (existing) throw { status: 409, message: `EMP_ID "${EMP_ID}" đã tồn tại` };

    await EmployeeRepository.create({ EMP_ID, EMP_NAME, DOB, WORK_HOURS: WORK_HOURS || 0 });
    return await EmployeeRepository.findById(EMP_ID);
  },

  // Cập nhật nhân viên
  async update(id, data) {
    const { EMP_NAME, DOB, WORK_HOURS } = data;
    // Kiểm tra tồn tại
    await EmployeeService.getById(id);
    if (!EMP_NAME || !DOB) {
      throw { status: 400, message: 'EMP_NAME và DOB là bắt buộc' };
    }
    await EmployeeRepository.update(id, { EMP_NAME, DOB, WORK_HOURS });
    return await EmployeeRepository.findById(id);
  },

  // Xóa nhân viên
  async delete(id) {
    await EmployeeService.getById(id);
    const result = await EmployeeRepository.delete(id);
    if (result.affectedRows === 0) throw { status: 404, message: 'Xóa thất bại' };
    return { message: `Đã xóa nhân viên ${id} thành công` };
  },
};

module.exports = EmployeeService;
