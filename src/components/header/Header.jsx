import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SHeader,
  LoginButton,
  HeaderLogo,
  HeaderUl,
  HeaderLi,
  HeaderMenu,
  AddButton
} from './HeaderStyle';


const Header = () => {
  const native = useNavigate();
  const CategoryList = ['서울', '경기도', '강원도', '충청도', '전라도', '경상도', '제주도'];
  return (
    <SHeader>
      <LoginButton onClick={() => native('/login')}>
        <div><i className='fa-solid fa-user'></i></div>
        <div>로그인</div>
      </LoginButton>
      <HeaderLogo>
        <h3>여행 어디로가지?</h3>
      </HeaderLogo>
      <AddButton>
        <button onClick={()=> native('/addpost')}>작성하기</button>
      </AddButton>
      <HeaderMenu>
        <HeaderUl>
          {CategoryList.map(menu => <HeaderLi key={menu}>{menu}</HeaderLi>)}
        </HeaderUl>
        {/* <div>
          <input type='text' />
        </div> */}
      </HeaderMenu>

    </SHeader>
  )
}
export default Header