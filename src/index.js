module.exports = function towelSort(matrix) {
  const res = []
  const isEven = (n) => n % 2 == 0

  if (matrix && matrix.length) {
    matrix.forEach((el, index) => {

      if (el.length) {

        isEven(index) ? el.sort((a, b) => a - b) : el.sort((a, b) => b - a)

        for (i = 0; i < el.length; i++) {
          res.push(el[i])
        }

      }
    })
  }
  
  return res
}