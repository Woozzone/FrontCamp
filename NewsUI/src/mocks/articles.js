export const Article = {
  source: {
    id: String,
    name: String
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String
}

export const articles = [
  {
    source: {
      id: 'engadget',
      name: 'Engadget'
    },
    author: 'Richard Lawler',
    title:
      "Apple's new augmented reality exec shows how important the tech is - Engadget",
    description:
      "Apple's plans for augmented reality will move beyond simple iPhone or iPad apps.",
    url: 'https://www.engadget.com/2019/02/12/apple-ar-marketing/',
    urlToImage:
      'https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1632%252C920%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C902%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-02%252F1f0b9430-2e98-11e9-b59f-24416b36ac5d%26client%3Da1acac3e1b3290917d92%26signature%3D6aeb8e5825c2cac6d48ad6535df219c86e6a2c5c&client=amp-blogside-v2&signature=6b2db14e285ee1fe383b55c0335f38c87c46948b',
    publishedAt: '2019-02-12T08:10:48Z'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: 'Reuters Editorial',
    title:
      "We must 'hold our nerve' on Brexit, May to tell UK lawmakers - Reuters",
    description:
      'Prime Minister Theresa May will tell British lawmakers on Tuesday they must hold their nerve over Brexit to force the European Union to accept changes to the divorce deal that would pave the way for an orderly exit.',
    url:
      'https://www.reuters.com/article/uk-britain-eu/hold-your-nerve-on-brexit-may-to-tell-mps-idUSKCN1Q10NH',
    urlToImage:
      'https://s1.reutersmedia.net/resources/r/?m=02&d=20190212&t=2&i=1355688077&w=1200&r=LYNXNPEF1B0E2',
    publishedAt: '2019-02-12T07:21:00Z'
  },
  {
    source: {
      id: null,
      name: 'Washingtonexaminer.com'
    },
    author: 'https://www.washingtonexaminer.com/author/tom-rogan',
    title:
      "Why Tuesday will be a big day for Venezuela's future - Washington Examiner",
    description:
      "This week will be pivotal in the revolt against despotic ruler Nicolas Maduro. That's because on Tuesday, Venezuelans will gather to demand Maduro's resignation, and will also attempt to bring U.S. aid across the Colombian border.",
    url:
      'https://www.washingtonexaminer.com/opinion/why-tuesday-will-be-a-big-day-for-venezuelas-future',
    urlToImage:
      'https://mediadc.brightspotcdn.com/dims4/default/5103b56/2147483647/strip/true/crop/2290x1202+0+60/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F22%2F02%2F3fe09834d468bbf5553f42aab888%2F99f8e5da8a1eee6ba37b922ab243f5f8.jpg',
    publishedAt: '2019-02-12T06:14:00Z'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: 'Reuters Editorial',
    title:
      "Pentagon to review certification of Elon Musk's SpaceX launch vehicles - Reuters",
    description:
      "The Pentagon will evaluate the certification for Elon Musk's SpaceX launch vehicles to determine whether the U.S. Air Force complied with certain guidelines, according to a memo https://media.defense.gov/2019/Feb/11/2002088764/-1/-1/1/D2019-D000PT-0059.000.PD…",
    url:
      'https://www.reuters.com/article/us-space-spacex-pentagon/pentagon-to-review-certification-of-elon-musks-spacex-launch-vehicles-idUSKCN1Q10FC',
    urlToImage:
      'https://s3.reutersmedia.net/resources/r/?m=02&d=20190212&t=2&i=1355661619&w=1200&r=LYNXNPEF1B08Q',
    publishedAt: '2019-02-12T05:34:00Z',
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com'
    },
    author: 'Tom McKay',
    title: 'LinkedIn Is Pivoting Harder Into Video - Gizmodo',
    description:
      'If you’re like me, you think of LinkedIn as the last place you want to spend time online. It’s chock full of spam, vaguely business-themed blog posts that range from the utterly interminable and insights no one asked for to bizarre rants, and UI decisions tha…',
    url:
      'https://gizmodo.com/linkedin-is-pivoting-harder-into-video-1832549450',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/s--cXic1RUF--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/zla5wbvnonqwhs26z3j6.jpg',
    publishedAt: '2019-02-12T05:00:00Z'
  },
  {
    source: {
      id: null,
      name: 'Latimes.com'
    },
    author: "Jennifer Haberkorn, Molly O'Toole",
    title:
      'Lawmakers announce a deal to prevent another government shutdown, but prospects remain uncertain - Los Angeles Times',
    description:
      'Key lawmakers reached a deal late Monday to avoid another government shutdown. It would provide less money than President Trump had wanted for border fencing, but would drop some Democratic demands.',
    url:
      'https://www.latimes.com/politics/la-na-pol-government-shutdown-deal-20190211-story.html',
    urlToImage:
      'https://www.latimes.com/resizer/4JlablmisuUlmG4LZ4XjV0CdAPA=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/5BL4XNAFVFAILGEVRKST5XJWH4.jpg',
    publishedAt: '2019-02-12T04:05:00Z'
  },
  {
    source: {
      id: 'fox-news',
      name: 'Fox News'
    },
    author: 'Frank Miles',
    title:
      'US Navy warships sail in South China Sea near contested manmade island - Fox News',
    description:
      'Two U.S. guided-missile destroyers on Monday sailed near the Chinese manmade island of Mischief Reef in the South China Sea, the location of several territorial conflicts that have raised tensions in the region.',
    url:
      'https://www.foxnews.com/world/navy-sends-2-destroyers-near-contested-manmade-island-in-south-china-sea',
    urlToImage:
      'https://static.foxnews.com/foxnews.com/content/uploads/2019/02/57db7d20-USS-Preble-USS-Spruance.jpg',
    publishedAt: '2019-02-12T03:47:06Z'
  },
  {
    source: {
      id: null,
      name: 'Youtube.com'
    },
    author: null,
    title:
      "MAVERICKS vs ROCKETS | Harden's 30th Consecutive Game With 30+ Points | February 11, 2019 - NBA",
    description:
      'James Harden recorded 31 points (9-23 FG), to go with 8 rebounds, 7 assists and 5 steals for his 30th consecutive game with 30+ points as the Rockets defeate...',
    url: 'https://www.youtube.com/watch?v=0zf9g51djt0',
    urlToImage: 'https://i.ytimg.com/vi/0zf9g51djt0/maxresdefault.jpg',
    publishedAt: '2019-02-12T03:39:34Z'
  },
  {
    source: {
      id: null,
      name: 'Investors.com'
    },
    author: 'ED CARSON',
    title:
      "Dow Jones Futures: Tentative Deal To Avoid Government Shutdown Reached; Current Stock Market Rally, Apple Stock Pause - Investor's Business Daily",
    description:
      'Dow Jones futures: Congressional negotiators hailed a tentative deal to avoid a new government shutdown. The current stock market rally is split as indexes pause and top stocks lead.',
    url:
      'https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-government-shutdown-deal-current-stock-market-rally-apple-stock/',
    urlToImage:
      'https://www.investors.com/wp-content/uploads/2017/07/Capitol_at_Dusk_2-1024x514.jpg',
    publishedAt: '2019-02-12T03:39:26Z'
  },
  {
    source: {
      id: null,
      name: 'Washingtonexaminer.com'
    },
    author: 'https://www.washingtonexaminer.com/author/becket-adams',
    title:
      "Ocasio-Cortez spent the weekend lying about the 'Green New Deal' and the Washington Post is too scared to say so - Washington Examiner",
    description:
      'Rep. Alexandria Ocasio-Cortez, D-N.Y., spent the weekend lying about the disastrous rollout of her preposterous "Green New Deal." The Washington Post\'s Fact Checker doesn\'t dispute that. But it refused to give her any "Pinocchios" anyway because Trump.',
    url:
      'https://www.washingtonexaminer.com/opinion/ocasio-cortez-spent-the-weekend-lying-about-the-green-new-deal-and-the-washington-post-is-too-scared-to-say-so',
    urlToImage:
      'https://mediadc.brightspotcdn.com/dims4/default/45420b6/2147483647/strip/true/crop/3000x1575+0+213/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F55%2Ff4%2Fd51290884ad884404a1fbf216472%2F020719-wex-alexandria-ocasio-cortez-40.JPG',
    publishedAt: '2019-02-12T03:23:00Z'
  },
  {
    source: {
      id: null,
      name: 'Radio.com'
    },
    author: 'https://facebook.com/923thefan',
    title:
      'John Dorsey believes Kareem Hunt signing will create competition - 92.3 The Fan',
    description:
      'Whatever penalty the NFL office hands down to Hunt, once he becomes officially eligible to step back onto the field this fall, he’ll provide head coach Freddie Kitchens and offensive coordinator Todd Monken with another weapon out of the backfield that alread…',
    url:
      'https://923thefan.radio.com/articles/john-dorsey-believes-kareem-hunt-signing-will-create-competition',
    urlToImage:
      'https://s3.us-east-2.amazonaws.com/s3.wkrkfm.radio.com/USATSI_11700672_168385446_lowres.jpg',
    publishedAt: '2019-02-12T03:17:21Z'
  },
  {
    source: {
      id: null,
      name: 'Washingtonexaminer.com'
    },
    author: 'https://www.washingtonexaminer.com/author/anna-giaritelli',
    title:
      'Man attacks reporters, knocks over cameras during Trump rally in El Paso - Washington Examiner',
    description:
      "EL PASO, Texas — A male attendee accosted reporters standing behind cameras at President Trump's rally Monday night.",
    url:
      'https://www.washingtonexaminer.com/news/man-attacks-reporters-knocks-over-cameras-during-trump-rally-in-el-paso',
    urlToImage:
      'https://mediadc.brightspotcdn.com/dims4/default/d8bd526/2147483647/strip/true/crop/1060x557+0+22/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F85%2F6b%2F7522caec4bfb857691ff8ff44654%2Fap-19043105006075.jpg',
    publishedAt: '2019-02-12T03:00:00Z'
  },
  {
    source: {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English'
    },
    author: 'Max Walden',
    title:
      "'A victory!': Jubilation as freed footballer returns to Australia - Aljazeera.com",
    description:
      'Hakeem al-Araibi released from Thailand detention after international campaign on risks of his extradition to Bahrain.',
    url:
      'https://www.aljazeera.com/news/2019/02/victory-joy-freed-footballer-set-australia-return-190212010457317.html',
    urlToImage:
      'https://www.aljazeera.com/mritems/Images/2019/2/12/df08424b96374b13814cfb0045d963b5_18.jpg',
    publishedAt: '2019-02-12T02:56:00Z'
  },
  {
    source: {
      id: null,
      name: 'Washingtonexaminer.com'
    },
    author: null,
    title:
      'The 2019 Grammys go apolitical and still fall short - Washington Examiner',
    description: null,
    url:
      'https://www.washingtonexaminer.com/opinion/the-2019-grammys-go-apolitical-and-still-fall-short',
    urlToImage: null,
    publishedAt: '2019-02-12T02:51:00Z'
  },
  {
    source: {
      id: 'the-new-york-times',
      name: 'The New York Times'
    },
    author: null,
    title:
      'Naomi Osaka Splits With Coach After Rising to No. 1 Ranking - The New York Times',
    description:
      'Osaka, the winner of the two most recent Grand Slam tournaments, announced on Twitter she would no longer be working with Sascha Bajin.',
    url:
      'https://www.nytimes.com/2019/02/11/sports/naomi-osaka-sascha-bajin.html',
    urlToImage:
      'https://static01.nyt.com/images/2019/02/12/sports/12tennis/12tennis-facebookJumbo.jpg',
    publishedAt: '2019-02-12T02:47:03Z'
  },
  {
    source: {
      id: 'politico',
      name: 'Politico'
    },
    author: 'QUINT FORGEY',
    title: 'Ex-White House aide sues Trump - POLITICO',
    description:
      'At issue is whether the president is attempting to deprive Cliff Sims of his First Amendment rights.',
    url:
      'https://www.politico.com/story/2019/02/11/cliff-sims-sues-trump-1164558',
    urlToImage:
      'https://static.politico.com/99/e7/edd97e4841d3b7af4dfa4c2f9dab/190211-trump-gty-773.jpg',
    publishedAt: '2019-02-12T02:27:00Z'
  },
  {
    source: {
      id: null,
      name: 'Pagesix.com'
    },
    author: 'Ian Mohr',
    title: "Jennifer Aniston's 50th birthday party packed with exes - Page Six",
    description:
      'Guests included her ex-boyfriend John Mayer and ex-husband Brad Pitt, plus Pitt’s ex-fiancée Gwyneth Paltrow.',
    url:
      'https://pagesix.com/2019/02/11/jennifer-anistons-50th-birthday-party-packed-with-exes/',
    urlToImage:
      'https://nyppagesix.files.wordpress.com/2019/02/jennifer-aniston.jpg?quality=90&strip=all&w=1200',
    publishedAt: '2019-02-12T02:18:00Z'
  },
  {
    source: {
      id: null,
      name: 'Washingtonexaminer.com'
    },
    author: 'https://www.washingtonexaminer.com/author/kimberly-leonard',
    title:
      'Utah governor scales back voter-approved Obamacare Medicaid expansion - Washington Examiner',
    description:
      'Utah Gov. Gary Herbert signed a bill into law Monday that will roll back the Medicaid expansion to the poor under Obamacare that voters approved in November.',
    url:
      'https://www.washingtonexaminer.com/policy/healthcare/utah-governor-scales-back-voter-approved-obamacare-medicaid-expansion',
    urlToImage:
      'https://mediadc.brightspotcdn.com/dims4/default/4ac5865/2147483647/strip/true/crop/4405x2313+0+115/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F07%2Fc0%2Fe3612392443297595dce175ea3ff%2Fstate-of-utah.jpg',
    publishedAt: '2019-02-12T02:09:00Z'
  },
  {
    source: {
      id: 'techradar',
      name: 'TechRadar'
    },
    author: 'https://www.facebook.com/TechRadar',
    title:
      'Samsung Galaxy S10 Plus leaked pics show off flashy new color options - TechRadar',
    description: 'Color us impressed',
    url:
      'https://www.techradar.com/news/samsung-galaxy-s10-plus-leaked-pics-show-off-flashy-new-color-options',
    urlToImage:
      'https://cdn.mos.cms.futurecdn.net/YFn8pZRH97wiUVVuechRa3-1200-80.jpg',
    publishedAt: '2019-02-12T01:45:00Z'
  },
  {
    source: {
      id: null,
      name: 'Sciencealert.com'
    },
    author: 'Jon Christian, Futurism',
    title: "Remember Mars One? Yeah, So, It's Gone Bankrupt - ScienceAlert",
    description:
      'Remember Mars One, the startup that said it was going to fund a crewed mission to Mars by turning the journey into a reality television spectacle? Now the company is bankrupt, according to financial documents published online.',
    url:
      'https://www.sciencealert.com/maybe-reality-tv-isn-t-a-viable-way-to-fund-space-travel-mars-one-is-bankrupt',
    urlToImage:
      'https://www.sciencealert.com/images/2019-02/processed/MarsOneBankrupt2019_1024.jpg',
    publishedAt: '2019-02-12T01:07:30Z'
  }
];
