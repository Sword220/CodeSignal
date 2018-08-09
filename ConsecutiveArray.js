//Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an 
//non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest 
//to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional 
//statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

consecutiveArray = (statues) => {
  var range = statues.sort((a, b) => { return (a - b) });
  var ordered = 0;
  if (range.length - 1 === 0) {
    return 0;
  } else {
    for (i = 0; i <= range.length - 2; i++) {
      ordered += ( range[i + 1] - range[i] - 1 );
  }
  return ordered;
 }
}