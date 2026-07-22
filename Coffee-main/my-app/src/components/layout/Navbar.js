import React from 'react';
import './Navbar.css';

function BeanLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 8c-6 4-14 6-14 16 0 8 6 14 14 16 8-2 14-8 14-16 0-10-8-12-14-16Z" fill="#7B5E48" />
      <path d="M24 12c-3 3-3 6 0 9s3 6 0 9" stroke="#FBF3EA" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const MENU = [
  { label: 'Trang chủ',              key: 'home',    hasCaret: true  },
  { label: 'Về chúng tôi',           key: 'about',   hasCaret: false },
  { label: 'Đội ngũ của chúng tôi',  key: 'team',    hasCaret: false },
  { label: 'Cửa hàng',               key: 'shop',    hasCaret: true  },
  { label: 'Bài viết',               key: 'blog',    hasCaret: true  },
  { label: 'Liên hệ với chúng tôi',  key: 'contact', hasCaret: true  },
];

function Navbar({ current, onNavigate }) {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <button className="nav__brand" onClick={() => onNavigate('home')}>
          <BeanLogo />
          <span className="nav__brand-name">Coffo</span>
        </button>

        <nav className="nav__menu">
          {MENU.map((item) => (
            <button
              key={item.label}
              className={'nav__link' + (current === item.key ? ' nav__link--active' : '')}
              onClick={() => onNavigate(item.key)}
            >
              {item.label}
              {item.hasCaret && <span className="nav__caret">⌄</span>}
            </button>
          ))}
        </nav>

        <button className="btn btn--dark nav__cta" onClick={() => onNavigate('shop')}>
          Mua ngay
        </button>
      </div>
    </header>
  );
}

export default Navbar;
