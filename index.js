const dodger = document.queryselector('#doger');

dodger.style.backgroundColor = 'pink'

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    dodger.style.left = `${left -1}px`
  }
}

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left +1}px`
  }
}

function moveDodgerRight() {
  if (left <=)
  const rightNumbers = doger.style.right.replace
}