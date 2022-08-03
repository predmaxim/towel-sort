module.exports = function towelSort(matrix) {
  const res = []

  if (matrix) {

    matrix.forEach((el, index) => {
      index % 2 === 0 ? el.sort((a, b) => a - b) : el.sort((a, b) => b - a)

      for (i = 0; i < el.length; i++) {
        res.push(el[i])
      }

    })

  }

  return res
}