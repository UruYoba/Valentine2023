// let fs = require('fs');

console.log('hi')

function setElementValue(id, newValue){
    const element = document.getElementById(id)
    console.log(element.textContent)
    element.textContent = newValue
}

function clearMain(){
    setElementValue('main', '')
}

const loaderCss = `
body{
    background-color: #af2829;
    padding: 0;
    margin: 0;
  }
  .container{
    height: 330px;
    width: 330px;
    background-color: #af2829;
    -webkit-box-shadow: 0 0 25px 5px rgba(0,0,0,0.05)
    ;
            box-shadow: 0 0 25px 5px rgba(0,0,0,0.05)
    ;
    border-radius: 8px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0; 
    right: 0;
  }
  svg{
    position: absolute;
    border-radius: 8px;
  }
  .heart{
    -webkit-animation: heartBeat 1s infinite;
            animation: heartBeat 1s infinite;
    -webkit-transform-origin: center;
        -ms-transform-origin: center;
            transform-origin: center;
  }
  @-webkit-keyframes heartBeat{
    50%{
      -webkit-transform: scale(0.7);
              transform: scale(0.7);
    }
  }
  @keyframes heartBeat{
    50%{
      -webkit-transform: scale(0.7);
              transform: scale(0.7);
    }
  }
  .heart1{
    -webkit-animation: sizeUp 2s 0.5s infinite forwards;
            animation: sizeUp 2s 0.5s infinite forwards;
    -webkit-transform-origin: center;
        -ms-transform-origin: center;
            transform-origin: center;
  }
  .heart2{
    -webkit-animation: sizeUp 2s 1s infinite forwards;
            animation: sizeUp 2s 1s infinite forwards;
    -webkit-transform-origin: center;
        -ms-transform-origin: center;
            transform-origin: center;
  }
  .heart3{
    -webkit-animation: sizeUp 2s 1.5s infinite forwards;
            animation: sizeUp 2s 1.5s infinite forwards;
    -webkit-transform-origin: center;
        -ms-transform-origin: center;
            transform-origin: center;
  }
  @-webkit-keyframes sizeUp{
    60%{
      -webkit-transform: scale(13);
              transform: scale(13);
    }
    61%{
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
  @keyframes sizeUp{
    60%{
      -webkit-transform: scale(13);
              transform: scale(13);
    }
    61%{
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
  
  a{
      color: white;
      font-family: "Rubik",sans-serif;
      position:absolute;
      right:20px ;
      top:20px;
      border:2px solid white;
      text-decoration:none;
  }
  @media screen and (min-width: 451px) {
    a{
      font-size: 20px;
       padding:8px 12px 8px 12px;
    }
  }
  
  @media screen and (max-width: 450px) {
    a{
      font-size: 16px;
       padding:5px 8px 5px 8px;
    }
  }
  
  
`
const valentineCss = `@import url(https://fonts.googleapis.com/css?family=Almendra+Display);
@import url(https://fonts.googleapis.com/css?family=Exo+2:900);
* {
  box-sizing: border-box;
}

body {
  background-color: #af2829;
  font-family: "Cardo", serif;
}

.wrapper {
  position: relative;
  height: 100vh;
}

.card, .card-bg {
  margin: 80px auto;
  width: 700px;
  height: 290px;
  background-color: #F0F0F0;
  position: relative;
  text-align: center;
}
.card:before, .card-bg:before {
  content: "";
  z-index: -1;
  position: absolute;
  width: 750px;
  height: 340px;
  top: -25px;
  left: -25px;
  background-image: repeating-linear-gradient(-45deg, #F0F0F0, #F0F0F0 30px, #212121 30px, #212121 55px, #F0F0F0 55px);
}

.stamp {
  top: 15px;
  right: 15px;
  height: 60px;
  width: 60px;
  display: inline-block;
  padding: 10px;
  background: #F65042;
  position: absolute;
  background: radial-gradient(transparent 0px, transparent 4px, #F65042 4px, #F65042);
  background-size: 20px 20px;
  background-position: -10px -10px;
}
.stamp:after {
  content: "";
  height: 45px;
  width: 45px;
  background: #F65042;
  display: inline-block;
}

.happy {
  font-size: 80px;
  text-transform: capitalize;
  font-family: "Almendra Display", cursive;
  width: 70%;
  line-height: 95px;
  margin: 0 auto;
  color: #2F131E;
}

.card-bg {
  text-transform: uppercase;
  text-align: center;
  background: #2F131E;
}

.animated-fill {
  font: 800 145px "Exo 2", sans-serif;
  line-height: 125px;
  display: block;
  background: url(https://c1.staticflickr.com/3/2476/4562937688_65076603db_o.png) repeat-y;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: anim-bg 15s linear infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -webkit-text-stroke: 1px white;
}

@-webkit-keyframes anim-bg {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
.card-front, .card-back {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.card-back {
  opacity: 0;
  transition: opacity 0.2s ease-in;
}

.card-container:hover .card-back {
  opacity: 1;
  transition: opacity 0.3s ease-out;
}`

const valentineHtml = `<div class="wrapper">
<div class="card-container">
  <div class="card-front">
    <div class="card">
      <span class="stamp"></span><p class="happy">Ради тебя я...</p>
    </div>
  </div>
  <div class="card-back" id="eren">
    <p class="card-bg">
      <span class="animated-fill">совершу<br>геноцид</span>
    </p>
  </div>
</div>
</div>`
setElementValue('style', loaderCss)
// document.getElementsByTagName('body')[0].onclick = () => {alert('fuck u')}

function setValentine(){
  clearMain()
  setElementValue('style', valentineCss)
  document.getElementById('main').innerHTML = valentineHtml;
  const eren = new Audio('eren.mp3')
  document.getElementById('eren').addEventListener('mouseover', () => eren.play())
}

setTimeout(setValentine, 4000)
