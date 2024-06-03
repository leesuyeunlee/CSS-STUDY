const bg = document.querySelectorAll('.bg')
const nav_a = document.querySelectorAll('nav a')
console.log(bg, nav_a)
nav_a.forEach((target, index)=>{
    console.log(target, index)
    target.addEventListener('click',(e)=>{
        e.preventDefault();
        window.scrollTo(0,bg[index].offsetTop)
    })
})
//nav_a[0] 클릭 시 bg[0] 위치로 스크롤 이동
//nav_a[0].addEventListener('click',()=>{
//window.scrollTo(0,bg[0].offsetTop)
//})
//nav_a[1].addEventListener('click',(e)=>{
//e.preventDefault()//a의 고유이벤트 막아줌
//window.scrollTo(0,bg[1].offsetTop)
//})
// a 태그에 javascript event 적용 시 주의사항
// a 태그는 고유의 href 속성으로 특정 주소로 이동한다는 특징이 있어서 js click 이벤트 연결을 하려고 하면  click 처리를 먼저 해야하는지 ? href속성 처리를 먼저 해야하는지? 구분을 못해서 스크롤이 위로 올라가는 문제가 생긴다
//a 태그에 js click 이벤트를 줄때 href속성의 기능을 막아야 정상 작동한다. 