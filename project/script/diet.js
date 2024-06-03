/*
계산식) 적정체중 = (본인신장-100)*0.9
- 현재 키와 몸무게를 자유롭게 입력하고
- 버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기
결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.
*/
const cm = document.querySelector('#height')
const kg = document.querySelector('#weight')
const btn = document.querySelector('#diet')
const result = document.querySelector("#goals")
console.log(cm.value)
btn.addEventListener('click',function(){
    console.log(cm.value)
    console.log(kg.value)
    let total1 = (Number(cm.value) - Number(kg.value)) * 0.9
    console.log(total1)
    let total2 = Number(total1) - Number(kg.value)
    console.log(total2)
    result.value = `적정체중은 ${total1}kg이며 ${total2}kg 초과되셨습니다.`
})