function TempTracker() {
  this.temps = {};
  this.max = Number.NEGATIVE_INFINITY;
  this.min = Number.POSITIVE_INFINITY;
  this.sum = 0;
  this.numOfTemps = 0;
  this.mode = undefined;
  this.maxOccurences = 0;
}

TempTracker.prototype.insert = function(num) {
  this.max = Math.max(this.max, num);
  this.min = Math.min(this.min, num);
  this.sum += num;
  this.numOfTemps += 1;

  this.temps[num] = this.temps[num] === undefined ? 1 : this.temps[num] + 1;
  if (this.temps[num] > this.maxOccurences) {
    this.mode = num;
    this.maxOccurences = this.temps[num];
  }
};

TempTracker.prototype.getMax = function() {
  return this.max;
};

TempTracker.prototype.getMin = function() {
  return this.min;
};

TempTracker.prototype.getMean = function() {
  return this.sum / this.numOfTemps;
};

TempTracker.prototype.getMode = function() {
  return this.mode;
};

TempTracker.prototype.constructor = TempTracker;
