//1. like(a) 클릭 시 like_off.png ->like_on.png 변경
const like = document.querySelector('.like')
console.log(like)
console.log(like.children)
console.log(like.children[0])
console.log(like.children[0])
//like.addEventListener('click',function(){})
// like.children[0].src="./images/icons/like_on.png"


const like_func = () => {
    like.children[0].src = "./images/icons/like_on.png"
}
like.addEventListener('click',like_func)