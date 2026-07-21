import React, { useState, useEffect } from 'react';

// ----- Component hiển thị danh sách sản phẩm (ITEM) từ database -----
function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/items')
      .then((res) => {
        if (!res.ok) throw new Error(`Lỗi HTTP: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setItems(json.data || []); // backend trả { success, count, data: [...] }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Đang tải dữ liệu sản phẩm...</p>;
  if (error) return <p style={{ color: 'red' }}>Lỗi: {error}</p>;

  return (
    <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#f5f5f5', textAlign: 'left' }}>
          <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>ID</th>
          <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Tên sản phẩm</th>
          <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Giá</th>
          <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Loại</th>
          <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Nhân viên</th>
        </tr>
      </thead>
      <tbody>
        {items.map((i) => (
          <tr key={i.ITEM_ID} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px' }}>{i.ITEM_ID}</td>
            <td style={{ padding: '10px' }}>{i.ITEM_NAME}</td>
            <td style={{ padding: '10px' }}>
              {Number(i.PRICE).toLocaleString('vi-VN')} đ
            </td>
            <td style={{ padding: '10px' }}>{i.ITEM_TYPE}</td>
            <td style={{ padding: '10px' }}>{i.EMP_NAME}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;

