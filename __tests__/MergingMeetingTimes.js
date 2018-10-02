const { mergeRanges } = require('../MergingMeetingTimes');

const meetings1 = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];
const merged1 = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
];

const meetings2 = [
  { startTime: 10, endTime: 12 },
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
];
const merged2 = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 10, endTime: 12 },
];

const meetings3 = [
  { startTime: 0, endTime: 12 },
  { startTime: 0, endTime: 1 },
];
const merged3 = [
  { startTime: 0, endTime: 12 },
];

const meetings4 = [
  { startTime: 0, endTime: 1 },
  { startTime: 1, endTime: 3 },
];
const merged4 = [
  { startTime: 0, endTime: 3 },
];
test('should merge correctly', () => {
  expect(mergeRanges(meetings1)).toEqual(merged1);
});

test('should have the same meetings when no intersections', () => {
  expect(mergeRanges(meetings2)).toEqual(merged2);
});

test('should return the longer one when one is entirely contained by the other', () => {
  expect(mergeRanges(meetings3)).toEqual(merged3);
});

test('should merge when meetings have no intersection but touch each other on their boundary', () => {
  expect(mergeRanges(meetings4)).toEqual(merged4);
});
