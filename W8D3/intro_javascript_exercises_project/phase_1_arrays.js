Array.prototype.uniq = function() {
  // console.log(this);
  let unique = [];
  for (i = 0; i < this.length; i++) {
    if (!unique.includes(this[i])) {
      unique.push(this[i]);
    }
  }
  return unique;
};

// console.log([1,2,2,3,4,5,5].uniq());

Array.prototype.twoSum = function() {
    let summers = [];
    for(i = 0; i < this.length; i++) {
      for (j = i; j < this.length; j++) {
        if (this[i] + this[j] === 0) {
          summers.push([i, j]);
        }
      }
    }
    return summers;
};

Array.prototype.transpose = function() {
  let matrix = new Array(this.length).fill(0).map(() => new Array(this.length));
  for(let i = 0; i < matrix.length; i++) {  
    for (let j = 0; j < matrix.length; j++) {
        matrix[i][j] = this[j][i];
    }
  }
  return matrix;
};

// console.log([[1,2],[3,4]].transpose());