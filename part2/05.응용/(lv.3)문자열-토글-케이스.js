/**
 * [(lv.3)문자열 토글 케이스.js]
 *
 * 1) 문자열의 각 문자가 대문자면 소문자로, 소문자면 대문자로 바꿔 반환하세요.
 * 2) 알파벳 이외의 문자는 그대로 둡니다.
 * 3) 예: toggleCase('Abc123') -> 'aBC123'
 *
 * @param {string} str
 * @returns {string}
 */

// TODO: 함수를 작성하세요 (예: toggleCase)
function toggleCase(str) {
  // TODO
  let toggleStr = "";
  for (let string of str) {
    string.toLocaleUpperCase() === string
      ? (toggleStr += string.toLocaleLowerCase())
      : (toggleStr += string.toLocaleUpperCase());
  }
  return toggleStr;
}

// export 를 수정하지 마세요.
export { toggleCase };
