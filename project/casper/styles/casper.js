//변수
const sub = document.querySelectorAll('.sub')
const sub_bg = document.querySelector('.sub_bg')
const nav = document.querySelector('nav')
const nav_clone = nav.cloneNode(true)//nav복제 변수
const m_nav = document.querySelector('.m_nav')//복제 붙여넣기 부모 

console.log(sub, sub_bg, nav, nav_clone, m_nav)


//모든 서브 숨기기, 서브배경 숨기기
sub_bg.style.display = 'none'
for(let i of sub){i.style.display = 'none'}

//m_nav 모바일 전용 메뉴의 기존 네비게이션 태그를 마지막자식으로 복붙
m_nav.appendChild(nav_clone)