var quotes = [
  'Andrew Napier Makes Films So You Don’t Have To',
  'Andrew Napier Is A Proud Sponsor Of Andrew Napier',
  'Andrew Napier… Batteries Not Included',
  'Andrew Napier… Now With Improved Filmmaking Skilz!',
  'Andrew Napier: Soon To Be A Major Motion Andrew Napier!',
  'Andrew Napier… Or is it?',
  'Andrew Napier… Now in Color!',
  'Andrew Napier… As Not Seen On TV',
  'Andrew Napier Is Still Loading....',
  'Andrew Napier Can See You',
  'Andrew Napier Is Fun For The Whole Family. Except Babies.',
  'Andrew Napier Is Now Available Without A Prescription!',
  'Andrew Napier Is Now Interactive!',
  'Andrew Napier Just Won’t Stay Dead',
  'Ask Your Doctor if Andrew Napier Is Right For You',
  'Andrew Napier: Recommended By Andrew Napier',
  'Andrew Napier, Formerly Known As Andrew Napier',
  'Andrew Napier: Now Available With A Low, Low, 5.8% A.P.R. Financing!',
  'Andrew Napier: Now In 3D',
  'Andrew Napier Is Following You… But Not On Instagram',
  'Andrew Napier Brought To You By Andrew Napier’s Mom & Dad',
  'Andrew Napier Is Based On A Film That Was Loosely Based On A Novel That Was Inspired By A Trueish Story',
  'Andrew Napier: Based On The Novel By Andrew Napier',
  'Andrew Napier Is Coming Soon To A Theater Near You! Or A Computer... Probably A Computer…',
  'Andrew Napier Is 60% H2O, 30% Awesome, & 10% Unsure',
  'Andrew Napier Wonders Why Oh Why Didn\'t He Take The BLUE Pill?',
  'Andrew Napier Is Made With Love... And Other Gross Stuff',
  'Andrew Napier Is Your Imaginary Friend',
  'Andrew Napier Is Not A Substitute For Good Wholesome ________ (Fill In The Blank)',
  'Andrew Napier: Now With 10% More Andrew Napier!',
  'Andrew Napier: Assembly Required',
  'No Andrew Napiers Were Harmed In The Making Of This Website',
  'Andrew Napier: Cheesehead',
  'Andrew Napier: As Seen On This Website',
  '"Andrew Napier Is A Nice Guy! He’s A Nice Guy! But That Doesnt Cut It When He’s Bullshiting Around Like This!" ~ Christian Bale',
  'Andrew Napier Feels Bad For J.F. Sebastian',
  'Andrew\'s Last Name Is Napier',
  'Andrew Napier Is Your Mom',
  'Andrew Napier Is Standing Right Behind You',
  'Andrew Napier Drinks Film Like Wine',
  'Andrew Napier Eats Film For Breakfast & Watches Breakfast Like Films',
  'Andrew Napier Is Ugly And His Mother Dresses Him Funny',
  'Andrew Napier Makes Films For People Who Hate Films',
  'Andrew Napier Wishes We Were Better Strangers',
  'Andrew Napier Eats Films For Breakfast, Pictures For Lunch, And Pizza For Dinner. Who Doesn\'t LOVE Pizza?',
  'Andrew Napier Does Not Google Himself. Andrew Napier IS Google.',
  'Andrew Napier Does More Than Just Documentaries You Nurf Hearders',
  'Andrew Napier Does More Than Just Documentaries You Butt-Munchers',
  'Andrew Napier Does More Than Just Documentaries You Mouth-Breathers',
  'Andrew Napier Seems Taller In Japan',
  'Andrew Napier Is One Fry Short Of A Happy Meal',
  'Andrew Napier Is As Much Use As A One-legged Man At An Ass Kicking Party',
  'Andrew Napier Is Not A Toaster',
  'Andrew Napier Has A Strict Curfew',
  'Andrew Napier\'s Past Is A Grotesque Animal',
  'Andrew Napier Is Mad As Heck Gosh Darnit!!',
  'Andrew Napier\'s Balls Taught The World To Play',
  'Andrew Napier Disappeared',
  'Andrew Napier Has Sharp Dog-Teeth'
];
var visitedQuotes = [];
function getRandomQuote() {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  if (visitedQuotes.indexOf(quote) == -1) {
    visitedQuotes.push(quote);
    return quote;
  } else {
    if (visitedQuotes.length == quotes.length) {
      var quote = "Wow... you saw all of the quotes... I'm impressed!";
      return quote;
    } else {
      return getRandomQuote();
    }

  }
}
