window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d"); 
    const canvasWidth = document.querySelector('#canvas').width
    const canvasHeight = document.querySelector('#canvas').height
    const widthInBlocks = canvasWidth/blockSize
    const heightInBlocks = canvasHeight/blockSize
    const blockSize = 25; 
    startGame();
  };
// i start code
  function startGame() {
    this.car = new Car([10,10]);
    clearCanvas()
  }
  let clearCanvas = () =>{
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    car.draw()

  }

  class Car {
    constructor(){
      ctx.filleStyle = 'black'
      ctx.fillRect(234, 660, 30, 30)
      ctx.src = "../images/car.png"
    }
  }

  // function Car(position){
  //   this.position = position
  //   this.draw = function (){
  //     ctx.save()
  //     ctx.filleStyle = 'black'
  //     ctx.beginPath()
  //     const x = this.position[0] * blockSize;
  //     const y = this.position[1] * blockSize;
  //     ctx.fillRect(x, y, blockSize, blockSize)

  //   }
  // } 

};
