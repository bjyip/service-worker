// 接收主文件的信息
this.onmessage = function (e) {
  console.log(e.data)

  // 向主文件发送信息
  this.postMessage('yes! i can')
}
console.log(this)
