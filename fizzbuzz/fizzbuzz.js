console.log(5555)

let edd = document.createElement("BUTTON")
//var lst=document.createElement("li")
let txt;



let n = 100
let m3, m5
for (let i = 0; i <= n; i++) {
  m3 = i % 3;
  m5 = i % 5;
  
  if (m3==0 && m5==0) {

  //console.log(i+' FizzBuzz')
  //txt =lst.innerText('FizzBuzz')
  //lst.appendList=e.appendChild(txt)
  //document.querySelector('body').appendChild(lst);

  }


  if (m3 == 0)
  console.log(i + 'fizz')

  if (m5 == 0)
  console.log(i + 'buzz')
  
}
