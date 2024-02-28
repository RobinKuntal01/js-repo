let body = document.querySelector('body')

let p = document.createElement('div')

body.addEventListener('click', function(e){
  let Xaxis = e.clientX
 let Yaxis = e.clientY

 console.log(Xaxis, Yaxis);
//  p.setAttribute('style', `height: 100px; width: 100px; background-color: red; border-radius:50%; left:${Xaxis-10}px; top:${Yaxis-10}px; position:relative;`)

p.style.height = "100px"
p.style.width = "100px"
p.style.backgroundColor = "Red"
p.style.top = `${Yaxis-10}px`
p.style.left = `${Xaxis-10}px`
p.style.position = 'relative'

 body.appendChild(p)
})