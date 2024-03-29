import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Navbar = ({authenticate, setAuthenticate}) => {
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
    const [sidebarOpen, setSidebarOpen] = useState(false);

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

    const toggleLoginBtn = () => {
      if(authenticate){
        console.log("로그인 된 상태-> 로그아웃", authenticate)
        // 로그아웃 상태로 전환
        setAuthenticate(false);
      }else{
        console.log("로그인 안된 상태", authenticate)
        navigate("/login");
      }
    }

    const openSidebar = () => {
      setSidebarOpen(!sidebarOpen)
    }

    const closeSidebar = () => {
      setSidebarOpen(sidebarOpen === false)
    }

    const sideListStyle = {
      width: sidebarOpen ? "250px" : "0"
    }

  return (
    <div>
      <div className="top-nav">
        <div className="mobile-toggle">
          <FontAwesomeIcon icon={faBars} onClick={openSidebar}/>
        </div>
        <div className="login-btn btn" onClick={toggleLoginBtn}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? '로그아웃' : '로그인'}</div>
      </div>
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


        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <ul className="side-list" style={sideListStyle}>
            <div className='close-btn'>
              <FontAwesomeIcon icon={faXmark} onClick={closeSidebar}/>
            </div>
            <li>여성</li>
            <li>Divided</li>
            <li>신생아/유아</li>
            <li>H&M Home</li>
            <li>Sale</li>
            <li>지속가능성</li>
          </ul>
        </div>


        
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
