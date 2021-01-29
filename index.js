function theBeatlesPlay(musicians, instruments) {
  var instPlayed = []
  for (var i = 0; i < musicians.length; i++) {
    instPlayed.push(musicians[i] + instruments[i])
  }
  return instPlayed
}// add solution here
