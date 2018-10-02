// I: array of meeting
// O: array of merged meeting
// C: O(nlogn + n)
// E: one meeting is entirely contained by another
const mergeRanges = (meetings) => {
  // sort the meetings by startTime
  // iterate over meetings
  //   compare current meeting and the previous meeting
  //     if they intersect
  //       merge them into a new one

  meetings.sort((meetingA, meetingB) => meetingA.startTime - meetingB.startTime);

  const mergedMeetings = [meetings[0]];
  for (let i = 1; i <= meetings.length - 1; i += 1) {
    console.log(mergedMeetings);
    const currentMeeting = meetings[i];
    const lastIndex = mergedMeetings.length - 1;
    if (currentMeeting.startTime <= mergedMeetings[lastIndex].endTime) {
      mergedMeetings[lastIndex] = {
        startTime: mergedMeetings[lastIndex].startTime,
        endTime: Math.max(currentMeeting.endTime, mergedMeetings[lastIndex].endTime),
      };
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
};

module.exports = { mergeRanges };
