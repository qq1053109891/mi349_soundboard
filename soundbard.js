var pa1 = document.getElementById('pa1')
var p1 = document.getElementById('p1')

// 第二种 监听点击事件
pa1.addEventListener('click', function(){
  p1.play()
  p2.pause()
  p3.pause()
})


p1.addEventListener('ended', function(){
  pa1.innerHTML='play'
})


var pa2 = document.getElementById('pa2')
var p2 = document.getElementById('p2')

// 第二种 监听点击事件
pa2.addEventListener('click', function(){
  p2.play()
  p1.pause()
  p3.pause()
})



p2.addEventListener('ended', function(){
  pa2.innerHTML='play'
})


var pa3 = document.getElementById('pa3')
var p3 = document.getElementById('p3')

// 第二种 监听点击事件
pa3.addEventListener('click', function(){
  p3.play()
  p2.pause()
  p1.pause()
})

p3.addEventListener('ended', function(){
  pa3.innerHTML='play'
})






var pa4 = document.getElementById('pa4')
var p4 = document.getElementById('p4')

// 第二种 监听点击事件
pa4.addEventListener('click', function(){
  p4.play()
  p2.pause()
  p1.pause()
  p3.pause()
})

p4.addEventListener('ended', function(){
  pa4.innerHTML='play'
})


