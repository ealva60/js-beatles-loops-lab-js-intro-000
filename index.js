function theBeatlesPlay(musicians, instruments) {
  var instPlayed = []
  for (var i = 0; i < musicians.length; i++) {
    instPlayed.push(musicians[i] + " plays " + instruments[i])
  }
  return instPlayed
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}// add solution here
