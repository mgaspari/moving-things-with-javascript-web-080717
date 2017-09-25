const app = "I don't do much."
var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'
dodger.style.left // "180px"
dodger.style.bottom = '10px'
var pxMove = 8

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - pxMove}px`
  }
}

function moveDodgerRight(){
  var rightNumber = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumber, 10)
  if (right < 360){
    dodger.style.left = `${right + pxMove}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  else if (e.which === 39) {
    moveDodgerRight()
  }
})
