import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


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

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }

    const goToProducts = () => {
      navigate("/");
    }

    const search = (event) =>{
      if(event.key === "Enter"){
        // 입력한 검색어를 읽어와서
        let keyword = event.target.value;

        // url을 바꿔준다
        navigate(`/?q=${keyword}`)
      }
    }

  return (
    <div>
      <div className="login-btn btn" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
      </div>
      <div className="nav-section btn" onClick={goToProducts}>
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
                <FontAwesomeIcon icon={faSearch} className="btn"/>
                <input type="search" placeholder='제품 검색' onKeyPress={(event)=>search(event)}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
