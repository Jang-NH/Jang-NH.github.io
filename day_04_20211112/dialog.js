// id2가 적용된 요소(body 영역에 작성된 태그)를 가져옴.
const btn1 = document.getElementById("id2");
console.log("btn1값", btn1);
// id3가 적용된 요소를 가져옴.
const btn2 = document.getElementById("id3");
console.log("btn2값", btn2);

// addEventListener 를 이용해
// id2가 적용된 버튼을 클릭했을 때 익명함수 호출
btn1.addEventListener ("click", function () {
    console.log("id2 버튼 클릭함.");
    const result = confirm("컨펌함수입니다.");
    if(result) {
        console.log("확인을 누르셨네요.");
    } else {
        console.log("취소를 누르셨네요.");
    }
});

// addEventListener 를 이용해
// id3가 적용된 버튼을 클릭했을 때 익명함수 호출
// promptFunction 함수 호출
btn2.addEventListener ("click", promptFunction);

function promptFunction() {
    console.log("promptFunction 호출됨");
}

function alertFunction() {
    console.log("alertFunction 호출됨");
    alert("안녕하세요!");
}