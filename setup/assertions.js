//Chai là 1 thư viện assertion đóng vai trò như một công cụ để thực hiện các so sánh hoặc xác minh kết quả trong các bước kiểm thử
async function setupChai() {
  const chai = await import('chai')
  global.expect = chai.expect
  global.assert = chai.assert
  global.should = chai.should
}

setupChai()
