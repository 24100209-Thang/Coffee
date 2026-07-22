import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Cảm ơn bạn đã đăng ký: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <h3 className="footer__brand">Cà phê</h3>
          <p className="footer__desc">
            Có những người không thể bắt đầu ngày mới mà không có một tách
            cà phê mới pha và chúng tôi hiểu họ.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Liên hệ với chúng tôi</h4>
          <p className="footer__line">555 Arabica Springs Rd, Crawford, TN 38554</p>
          <p className="footer__line">Gọi cho chúng tôi: <strong>800.275.8777</strong></p>
          <p className="footer__line">coffo@company.com</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Đăng ký nhận bản tin</h4>
          <form className="footer__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              placeholder="Địa chỉ email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer__input"
            />
            <button type="submit" className="btn">Đăng ký</button>
          </form>
          <p className="footer__note">
            Đăng ký bằng địa chỉ email của bạn để nhận tin tức và cập nhật.
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          Bản quyền ©2026 Coffo. Đã đăng ký Bản quyền.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
