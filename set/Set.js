
const set = new Set(); // 빈 set 생성
const numSet = new Set([1,2,3]) // set(3) {1,2,3} 

// 값 추가하기
set.add(1); set.add('hi'); set.add(true); //Set(3) {1,'hi', true};

// 값 삭제
set.delete(1); set.delete(true); //Set(1) {'hi'}

// set 안 값 존재 여부 확인하기

if(set.has('hi')){
  console.log('hi는 set 안에 존재합니다.');
}

// set 값 개수 확인
console.log(set.size); // 1

// 모든 값 제거하기
set.clear(); // Set(0)

// 배열 => set 변환
// 배열을 set으로 변환 시 중복 값 제거
let a = [1,1,3,3,5,5];
const arrSet = new Set(a); // arrSet => set(3) {1,3,5}

// set => 배열
const setArr = [...arrSet]; // setArr => [1,3,5]

// 바로 중복 값 제거하기
let uniqueNum  = [... new Set(a)];


//  집합 연산 

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

//  합집합
const union = new Set([...set1, ...set2]);
console.log([...union]);//  [1, 2, 3, 4, 5, 6, 7, 8] => 중복된 값들은 제거됨.

// 교집합