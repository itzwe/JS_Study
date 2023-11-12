
// 객체 선언
const ob = {
  a : 1,
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  obj : {
    first : 'bob',
    last : 'smith'
  },
  bio : ()=>{
    alert('객체 안 함수')
  }
};

// 객체 불러오기 (점 표기법)
  // console.log(ob.gender);
  // console.log(ob.name);
  // console.log(ob.obj.first)
  //
// (괄호 표기법)
  // console.log(ob['gender']);
  // console.log(ob['name']);
  // console.log(ob['obj']['first'])

// 값 수정하기
  // ob.a = 2;
  // ob['age']= 88;
  // ob.bio = ()=>{alert('수정완료')}

// 속성 추가하기
  // ob.new = 'property'

// 속성 제거하기
// delete 사용해서 제거하기.
// delete ob.a

// for 문으로 열거하기
for(let a in ob){
  console.log(a) // key 출력
  console.log(ob[a]) //value 출력
  // ob.a 로 열거시 ob 객체 안 a라는 속성의 값만 출력해줌 즉 1만 출력 됨.
}


