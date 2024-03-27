import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    // 메뉴 리스트 배열 함수로 나타내기
    const menuList = [
        "여성",
        "Divided",
        "신생아/유아",
        "H&M Home",
        "Sale",
        "지속가능성"
    ];

  return (
    <div>
      <div className="login-btn">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
      </div>
      <div className="nav-section">
          <img
            alt=''
            width={100} 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"/>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
            {menuList.map((menu) => (
                <li>{menu}</li>
            ))}
        </ul>
        <div className="search-area">
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch} />
                <input type="search" placeholder='제품 검색'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
