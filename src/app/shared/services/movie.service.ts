import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category} from '../models/category';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movie';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private URL = 'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1';

  constructor(private readonly http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.URL}/categories`);
  }

  getMovies(): Observable<Movie[]> {
    //return this.http.get<Movie[]>(`${this.URL}/movies`);
    return of( [
          {
            categoryId: 2,
            description: "Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz -- and he's good. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul.",
            id: "1",
            imageUrl: "https://resizing.flixster.com/KPJ9M0gryFbvakft7M5ecvFV5yE=/206x305/v2/https://resizing.flixster.com/skDbQNFUeYjoY0B6uvtSicszwYM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2E3NTJkZGFlLTA4MTQtNDQ1Ny1hYWRhLTMxMjJlNzI2ZGQxZC5qcGc=",
            imdbId: "tt2948372",
            name: "SOUL",
          },
          {
            categoryId: 1,
            description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain who's armed with a dangerous new technology.",
            id: "2",
            imageUrl: "https://resizing.flixster.com/TtGu2b1fgsh4xMohXxZskobSbj4=/300x300/v2/https://resizing.flixster.com/_yL4fbEIGBxzLonNrMyFISg41dQ=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzEzYTI1Y2ZlLTBiYjItNDNhMS05NGE2LTcwZmRhYThlZmMyZi53ZWJw",
            imdbId: "tt2382320",
            name: "NO TIME TO DIE",
          },
          {
            categoryId: 7,
            description: "During a family retreat to a remote winter cabin over the holidays, the father is forced to abruptly depart for work, leaving his two children in the care of his new girlfriend, Grace. Isolated and alone, a blizzard traps them inside the lodge as terrifying events summon specters from Grace's dark past.",
            id: "3",
            imageUrl: "https://resizing.flixster.com/5gdEwgLOehKNVIZXLL_UF7ONr8s=/300x300/v2/https://flxt.tmsimg.com/assets/p16926341_k_h9_ac.jpg",
            imdbId: "tt7347846",
            name: "THE LODGE",
          },
          {
            categoryId: 7,
            description: "In 1977, paranormal investigators Ed (Patrick Wilson) and Lorraine Warren come out of a self-imposed sabbatical to travel to Enfield, a borough in north London. There, they meet Peggy Hodgson, an overwhelmed single mother of four who tells the couple that something evil is in her home. Ed and Lorraine believe her story when the youngest daughter starts to show signs of demonic possession. As the Warrens try to help the besieged girl, they become the next targets of the malicious spirit.",
            id: "4",
            imageUrl: "https://resizing.flixster.com/999hl1lIlPMCApsH3LRGbDctjKI=/300x300/v2/https://resizing.flixster.com/PTF7mLgl4ODLOWM48EM1R0tVmBA=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzZmOGI0NDk3LTA4NDYtNGYzNi04ZGZlLWRkMzczM2ExMWZjOC53ZWJw",
            imdbId: "tt3065204",
            name: "THE CONJURING 2",
          },
          {
            categoryId: 10,
            description: "The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious, but there's one thing that renowned Detective Benoit Blanc knows for sure -- everyone in the wildly dysfunctional Thrombey family is a suspect. Now, Blanc must sift through a web of lies and red herrings to uncover the truth.",
            id: "5",
            imageUrl: "https://resizing.flixster.com/O6_Kk7ShwBFGJMdIKHbfGyw4inc=/300x300/v2/https://resizing.flixster.com/8V2R_W1RVwFsOXMoxNnaoI18z7M=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzM5Zjk2MGU5LTFiMmItNGQ2MS04OTcxLWZkNGViMjMyYTc2Ny53ZWJw",
            imdbId: "tt8946378",
            name: "KNIVES OUT",
          },
          {
            categoryId: 4,
            description: "The world's top protection agent is called upon to guard the life of his mortal enemy, one of the world's most notorious hit men. The relentless bodyguard and manipulative assassin have been on the opposite end of the bullet for years and are thrown together for a wildly outrageous 24 hours. During their journey from England to the Hague, they encounter high-speed car chases, outlandish boat escapades and a merciless Eastern European dictator who is out for blood.",
            id: "6",
            imageUrl: "https://resizing.flixster.com/fizQxFd6Wg2kOnK03QEmm_w6X0w=/300x300/v2/https://resizing.flixster.com/zJrEaQlMziosxWC6a-vZLlnDHG0=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzRhZTY0NGVjLWI1ZDMtNDRmOC05NjNmLTlhZDcxYjk1ZDRhNS53ZWJw",
            imdbId: "tt1959563",
            name: "THE HITMAN'S BODYGUARD",
          },
          {
            categoryId: 1,
            description: "Crooked cops on the take -- small-time drug lords -- sleazy informers and sadistic rich kids ready to kill --- for police detective John Shaft, its just another night in the underbelly of New York City, another shift facing down cops and criminals who want him dead and a legal system that thrives on money, not justice.",
            id: "7",
            imageUrl: "https://resizing.flixster.com/F1Et4XnB5SjhQg6MidLiHs5s2os=/300x300/v2/https://flxt.tmsimg.com/assets/24429_bf.jpg",
            imdbId: "tt4463894",
            name: "SHAFT",
          },
          {
            categoryId: 11,
            description: "While racing toward the town of Red Rock in post-Civil War Wyoming, bounty hunter John 'The Hangman' Ruth (Kurt Russell) and his fugitive prisoner (Jennifer Jason Leigh) encounter another bounty hunter (Samuel L. Jackson) and a man who claims to be a sheriff. Hoping to find shelter from a blizzard, the group travels to a stagecoach stopover located on a mountain pass. Greeted there by four strangers, the eight travelers soon learn that they may not make it to their destination after all.",
            id: "8",
            imageUrl: "https://resizing.flixster.com/LYu-VJGegkOiECNw6cJ-s7S9fNw=/300x300/v2/https://resizing.flixster.com/28Vxc4PBx97GoljQAhmeJ1_EE4g=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzRhODQ0NWE1LTAyOWUtNDQ4Yi1hMzNmLWNiOGZhNzlmOGVlOC53ZWJw",
            imdbId: "tt3460252",
            name: "THE HATEFUL EIGHT",
          },
          {
            categoryId: 1,
            description: "The Bride (Uma Thurman) picks up where she left off in volume one with her quest to finish the hit list she has composed of all of the people who have wronged her, including ex-boyfriend Bill (David Carradine), who tried to have her killed four years ago during her wedding to another man. Leaving several dead in her wake, she eventually tracks down Bill in Mexico. Using skills she has learned during her assassin career, she attempts to finish what she set out to do in the first place.",
            id: "9",
            imageUrl: "https://resizing.flixster.com/XBOKDnn6G8K011or0D_0wseIiJg=/300x300/v2/https://resizing.flixster.com/uJDJd7DIeDS-OC4BjpEDSwtrYzc=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2E1NGIxNThlLWQ0OTctNGUyMC04ZmUyLTEzMzVkMDc0YjBkNC53ZWJw",
            imdbId: "tt0378194",
            name: "KILL BILL: VOL. 2",
          },
          {
            categoryId: 8,
            description: "A European vacation was intended to repair the tattered relationship between American Jack (Adam Goldberg) and French native Marion (Julie Delpy). But, by the time they arrive in Paris to visit Marion's family, it is clear the trip is not going well. The city brings out aspects of Marion that only alienate neurotic Jack further, from her in-your-face politics to her former boyfriends, who surface in every cafe. Thus the most romantic city in the world could mean the end of the couple's romance.",
            id: "10",
            imageUrl: "https://resizing.flixster.com/r6M4v5La3ZLrMU2vI_-twIlv2iY=/300x300/v2/https://flxt.tmsimg.com/assets/p170309_v_h9_aa.jpg",
            imdbId: "tt0841044",
            name: "2 DAYS IN PARIS",
          },
          {
            categoryId: 8,
            description: "'Amélie' is a fanciful comedy about a young woman who discretely orchestrates the lives of the people around her, creating a world exclusively of her own making. Shot in over 80 Parisian locations, acclaimed director Jean-Pierre Jeunet ('Delicatessen'; 'The City of Lost Children') invokes his incomparable visionary style to capture the exquisite charm and mystery of modern-day Paris through the eyes of a beautiful ingenue.",
            id: "11",
            imageUrl: "https://resizing.flixster.com/w-PzvqhoWd_Xbmehfj0oE7Q8RL4=/300x300/v2/https://flxt.tmsimg.com/assets/p28319_k_h9_aa.jpg",
            imdbId: "tt0211915",
            name: "AMELIE FROM MONTMARTRE",
          },
          {
            categoryId: 2,
            description: "Fearful that her ailing father will be drafted into the Chinese military, Mulan (Ming-Na Wen) takes his spot -- though, as a girl living under a patriarchal regime, she is technically unqualified to serve. She cleverly impersonates a man and goes off to train with fellow recruits. Accompanied by her dragon, Mushu (Eddie Murphy), she uses her smarts to help ward off a Hun invasion, falling in love with a dashing captain along the way.",
            id: "12",
            imageUrl: "https://resizing.flixster.com/mJwpqBYaRf3W2SRfJ5k38xtlbcU=/300x300/v2/https://flxt.tmsimg.com/assets/p21118_i_h9_aa.jpg",
            imdbId: "tt4566758",
            name: "MULAN",
          },
          {
            categoryId: 9,
            description: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
            id: "13",
            imageUrl: "https://resizing.flixster.com/wKs2PKWHU_aOjxxrkbIHa27mJLU=/300x300/v2/https://flxt.tmsimg.com/assets/136365_bb.jpg",
            imdbId: "tt0816692",
            name: "INTERSTELLAR",
          },
          {
            categoryId: 6,
            description: "An illusion gone horribly wrong pits two 19th-century magicians, Alfred Borden (Christian Bale) and Rupert Angier (Hugh Jackman), against each other in a bitter battle for supremacy. Terrible consequences loom when the pair escalate their feud, each seeking not just to outwit -- but to destroy -- the other man.",
            id: "14",
            imageUrl: "https://resizing.flixster.com/q-IkHCLmiOH3kvFI1xJbwpEioJw=/300x300/v2/https://flxt.tmsimg.com/assets/p161581_k_h9_aa.jpg",
            imdbId: "tt0482571",
            name: "THE PRESTIGE",
          },
          {
            categoryId: 3,
            description: "Following the death of Princess Diana in an auto accident, Great Britain's Queen Elizabeth II (Helen Mirren) and Prime Minister Tony Blair (Michael Sheen) struggle to reach a compromise in how the royal family should publicly respond to the tragedy. In the balance is the family's need for privacy and the public's demand for an outward show of mourning.",
            id: "15",
            imageUrl: "https://resizing.flixster.com/VEePV0W5fx6iNaNlEAzbs3fMjBM=/300x300/v2/https://resizing.flixster.com/V6u-Rhums7N0XV2XuKu2JQE3Wfg=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzU0ZDZiNzYzLTBlMjUtNDhmMi05YWQ3LTJlMDA1MDNkY2Y4Zi53ZWJw",
            imdbId: "tt0436697",
            name: "THE QUEEN",
          },
          {
            categoryId: 3,
            description: "Driven to the edge by the loss of her beloved mother (Laura Dern), the dissolution of her marriage and a headlong dive into self-destructive behavior, Cheryl Strayed (Reese Witherspoon) makes a decision to halt her downward spiral and put her life back together again. With no outdoors experience, a heavy backpack and little else to go on but her own will, Cheryl sets out alone to hike the Pacific Crest Trail -- one of the country's longest and toughest through-trails.",
            id: "16",
            imageUrl: "https://resizing.flixster.com/vTboW05qj6R8_jox-ruA07WKZPg=/300x300/v2/https://resizing.flixster.com/38Mc1oOCf-r2-B6APmTvr9TEbPI=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzQ4MDg5YTJkLTg2NmEtNDAzZC1hMTlmLTM3ODdiMTA2ZGJlZC53ZWJw",
            imdbId: "tt2305051",
            name: "WILD",
          },
          {
            categoryId: 5,
            description: "Using actual footage from the event seamlessly mingled with new re-enactments, filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt: performing acrobatics on a thin wire strung between the Twin Towers of the World Trade Center. Plotting his feat like a master cat burglar, Petit enlists the help of a motley group of friends as he calculates every detail, from acquiring building access to stringing up the wire, and manages to pull off an astounding crime.",
            id: "17",
            imageUrl: "https://resizing.flixster.com/HEG3VWLlIb53drP9sqg7F0EX8cA=/300x300/v2/https://resizing.flixster.com/SvlwQHRsKNj1ks7bYPUFqhjdN44=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2Y0MWE0YTRiLTZkOGMtNDY3Ny04ODAzLTk4MjA4YjlhODEwOS53ZWJw",
            imdbId: "tt1155592",
            name: "MAN ON WIRE",
          },
          {
            categoryId: 5,
            description: "On Aug. 1, 1966, a sniper rode the elevator to the top floor of the University of Texas Tower and opened fire, holding the campus hostage for 96 minutes. When the gunshots were finally silenced, the toll included 16 dead, three dozen wounded, and a shaken nation left trying to understand what had happened. Archival footage is combined with rotoscopic animation in a dynamic, never-before-seen way to illustrate the action-packed untold stories of the witnesses, heroes and survivors.",
            id: "18",
            imageUrl: "https://resizing.flixster.com/ct8K1tZ_Oiw9Kf5PAwPqcG9X1uE=/300x300/v2/https://resizing.flixster.com/N83TjqdrEnewq4TvzMHYxP2rOnw=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzk0OGNhMTIxLTYzYzgtNDUzNS1hMGFlLTdhZTJjZTU4YTFhMi53ZWJw",
            imdbId: "tt5116410",
            name: "TOWER",
          },
          {
            categoryId: 5,
            description: "During the 1970s, San Francisco became a safe haven for the gay and lesbian community, providing a place where one could live openly, away from discrimination. But, after almost a decade of celebration, the city was hit by a wave of shock and grief when it became ground zero of the AIDS epidemic, with hundreds of gay men falling victim to the disease. Director David Weissman explores the incredible story of love and loss through the eyes of five men and women who experienced it firsthand.",
            id: "19",
            imageUrl: "https://resizing.flixster.com/2SZk2EH1rH8A8WyfolxXLW_WrKw=/300x300/v2/https://flxt.tmsimg.com/assets/p8643002_v_h9_ab.jpg",
            imdbId: "tt1787837",
            name: "WE WERE HERE",
          },
          {
            categoryId: 9,
            description: "Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind.",
            id: "20",
            imageUrl: "https://resizing.flixster.com/lL29f1e2FgvCV0io96CSY2_p5g0=/300x300/v2/https://resizing.flixster.com/TS1rrdOXoNY-5KNE1tJfuX6LHAY=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2FkM2Q4YmY1LTNiM2ItNGVjYi1hOTliLTVkNzc0YTFhODc2ZC53ZWJw",
            imdbId: "tt2543164",
            name: "ARRIVAL",
          },
          {
            categoryId: 9,
            description: "Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney), helming his last flight before retirement. Then, during a routine space walk by the pair, disaster strikes: The shuttle is destroyed, leaving Ryan and Matt stranded in deep space with no link to Earth and no hope of rescue. As fear turns to panic, they realize that the only way home may be to venture further into space.",
            id: "21",
            imageUrl: "https://resizing.flixster.com/3emp-hnxCskBU2wL2mV8Wx8Vce4=/300x300/v2/https://resizing.flixster.com/MOO_IIAfQgTi55znefQrLRDRAaU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2M4YmJhYmM4LTk4YzYtNGY1Ni1hZjg5LWRhNDI4MTdjZTQyYi53ZWJw",
            imdbId: "tt1454468",
            name: "GRAVITY",
          },
          {
            categoryId: 9,
            description: "When astronauts blast off from the planet Mars, they leave behind Mark Watney (Matt Damon), presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet. Meanwhile, back on Earth, members of NASA and a team of international scientists work tirelessly to bring him home, while his crew mates hatch their own plan for a daring rescue mission.",
            id: "22",
            imageUrl: "https://resizing.flixster.com/LhrB7etGOD_3bx8kX5l8tkplh9c=/300x300/v2/https://flxt.tmsimg.com/assets/p10980706_v_h9_aa.jpg",
            imdbId: "tt3659388",
            name: "THE MARTIAN",
          },
          {
            categoryId: 9,
            description: "After floating in space for 57 years, Lt. Ripley's (Sigourney Weaver) shuttle is found by a deep space salvage team. Upon arriving at LV-426, the marines find only one survivor, a nine year old girl named Newt (Carrie Henn). But even these battle-hardened marines with all the latest weaponry are no match for the hundreds of aliens that have invaded the colony.",
            id: "23",
            imageUrl: "https://resizing.flixster.com/rW5yHCZm_BMfioFDJliXRNNkuoo=/300x300/v2/https://flxt.tmsimg.com/assets/12267_ab.jpg",
            imdbId: "tt0090605",
            name: "ALIENS",
          },
          {
            categoryId: 11,
            description: "In the Old West, a sheriff (Kurt Russell), his deputy (Richard Jenkins), a gunslinger (Matthew Fox),and a cowboy (Patrick Wilson) embark on a mission to rescue three people from a savage group of cave dwellers.",
            id: "24",
            imageUrl: "https://resizing.flixster.com/aDecg631PoSqEfpQd02KkXDS5sc=/300x300/v2/https://flxt.tmsimg.com/assets/154559_bn.jpg",
            imdbId: "tt2494362",
            name: "BONE TOMAHAWK",
          },
          {
            categoryId: 4,
            description: "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
            id: "25",
            imageUrl: "https://resizing.flixster.com/znaMInKCORoWv_hQ2d_aq5Ods6k=/300x300/v2/https://resizing.flixster.com/Ryp9ggxDVbQLcTxxoK_NoQeEk04=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2U1ZDIyYTgzLWQxYjctNGY2MC1iNDRiLTYwZTBmOGEwOWM5Mi53ZWJw",
            imdbId: "tt3783958",
            name: "LA LA LAND",
          },
          {
            categoryId: 6,
            description: "In May 1940, Germany advanced into France, trapping Allied troops on the beaches of Dunkirk. Under air and ground cover from British and French forces, troops were slowly and methodically evacuated from the beach using every serviceable naval and civilian vessel that could be found. At the end of this heroic mission, 330,000 French, British, Belgian and Dutch soldiers were safely evacuated.",
            id: "26",
            imageUrl: "https://resizing.flixster.com/dqorlCQsErtwBcslPtHUG2Wg8HU=/300x300/v2/https://resizing.flixster.com/0NlWEiVlJlOj8Kvl5H1UeHqJX9o=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc0ZGVhZGQ4LTVkYzMtNDUzMC1hODhhLWI2MDkzMjE5OWQ1Yy53ZWJw",
            imdbId: "tt5013056",
            name: "DUNKIRK",
          },
          {
            categoryId: 6,
            description: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.",
            id: "27",
            imageUrl: "https://resizing.flixster.com/gMN9ke6XxDxcSAhQVf-6tLGHxEM=/300x300/v2/https://flxt.tmsimg.com/assets/p6326_p_v10_af.jpg",
            imdbId: "tt0068646",
            name: "THE GODFATHER",
          },
          {

            categoryId: 8,
            description: "Rick Blaine (Humphrey Bogart), who owns a nightclub in Casablanca, discovers his old flame Ilsa (Ingrid Bergman) is in town with her husband, Victor Laszlo (Paul Henreid). Laszlo is a famed rebel, and with Germans on his tail, Ilsa knows Rick can help them get out of the country.",
            id: "28",
            imageUrl: "https://resizing.flixster.com/8nlprAgnujevjr7ir2M0BccSI9Q=/300x300/v2/https://flxt.tmsimg.com/assets/p651_v_v13_az.jpg",
            imdbId: "tt0034583",
            name: "CASABLANCA",
          },
          {
            categoryId: 1,
            description: "Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust. Sarah is targeted because Skynet knows that her unborn son will lead the fight against them. With the virtually unstoppable Terminator in hot pursuit, she and Kyle attempt to escape.",
            id: "29",
            imageUrl: "https://resizing.flixster.com/prU6UbetdQFrO_Pe-G269zekJ1Y=/300x300/v2/https://flxt.tmsimg.com/assets/p7764_v_h9_ab.jpg",
            imdbId: "tt0088247",
            name: "THE TERMINATOR",
          },
          {
            categoryId: 2,
            description: "Carl Fredricksen (Ed Asner), a 78-year-old balloon salesman, is about to fulfill a lifelong dream. Tying thousands of balloons to his house, he flies away to the South American wilderness. But curmudgeonly Carl's worst nightmare comes true when he discovers a little boy named Russell is a stowaway aboard the balloon-powered house.",
            id: "30",
            imageUrl: "https://resizing.flixster.com/GQWhHTwWpcTgHQzUdk_FBn0LLBw=/300x300/v2/https://flxt.tmsimg.com/assets/73438_bf.jpg",
            imdbId: "tt1049413",
            name: "UP",
          },
          {
            categoryId: 1,
            description: "In a future society, time-travel exists, but it's only available to those with the means to pay for it on the black market. When the mob wants to eliminate someone, it sends the target into the past, where a hit man known as a looper lies in wait to finish the job. Joe (Joseph Gordon-Levitt) is one such hired gun, and he does his job well -- until the day his bosses decide to 'close the loop' and send Joe's future self (Bruce Willis) back in time to be killed.",
            id: "31",
            imageUrl: "https://resizing.flixster.com/D3ftLmVRxJ7f0dNi4hmZd5tJYw4=/300x300/v2/https://resizing.flixster.com/tHAQvgAplgefi2s5-1SQvLQpydM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzIzNDUwNzZlLWNiZGUtNDczOC05ZTNiLTJlZjZmNTQ5YjViYi53ZWJw",
            imdbId: "tt1276104",
            name: "LOOPER",
          },
          {
            categoryId: 11,
            description: "In the Southwest during the Civil War, a mysterious stranger, Joe (Clint Eastwood), and a Mexican outlaw, Tuco (Eli Wallach), form an uneasy partnership -- Joe turns in the bandit for the reward money, then rescues him just as he is being hanged. When Joe's shot at the noose goes awry during one escapade, a furious Tuco tries to have him murdered. The men re-team abruptly, however, to beat out a sadistic criminal and the Union army and find $20,000 that a soldier has buried in the desert.",
            id: "32",
            imageUrl: "https://resizing.flixster.com/fw1nwoRUnEZdf2ucYlbQ8VH7fiM=/300x300/v2/https://flxt.tmsimg.com/assets/p4161_p_v8_av.jpg",
            imdbId: "tt0060196",
            name: "THE GOOD, THE BAD AND THE UGLY",
          },
          {
            categoryId: 3,
            description: "Archival footage and personal testimonials present an intimate portrait of the life and career of British singer/songwriter Amy Winehouse.",
            id: "33",
            imageUrl: "https://resizing.flixster.com/nPsqTM8gsXfuG7XsgQiyfxPJjf8=/300x300/v2/https://resizing.flixster.com/AnkFAXRUTg1XHjPsXkp7KlWSGUE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzMyMWY0ODVmLTUwNGYtNDhkNy1iOTE3LWJmNjA4ZDU0OTRhNi53ZWJw",
            imdbId: "tt0082017",
            name: "AMY",
          },
          {
            categoryId: 4,
            description: "Rachel Chu is happy to accompany her longtime boyfriend, Nick, to his best friend's wedding in Singapore. She's also surprised to learn that Nick's family is extremely wealthy and he's considered one of the country's most eligible bachelors. Thrust into the spotlight, Rachel must now contend with jealous socialites, quirky relatives and something far, far worse -- Nick's disapproving mother.",
            id: "34",
            imageUrl: "https://resizing.flixster.com/DWKUsWaDoIcHKA3HvKUjtyQaIL8=/300x300/v2/https://resizing.flixster.com/1uGuyLzIwCsUtn9wn66BpLTrrkM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzQ2ZjgxM2NjLTZhOTctNDczZC1hMGJlLTJlZTk1ZTQyMzZmYS53ZWJw",
            imdbId: "tt3104988",
            name: "CRAZY RICH ASIANS",
          },
          {
            categoryId: 4,
            description: "In this 1980s sci-fi classic, small-town California teen Marty McFly (Michael J. Fox) is thrown back into the '50s when an experiment by his eccentric scientist friend Doc Brown (Christopher Lloyd) goes awry. Traveling through time in a modified DeLorean car, Marty encounters young versions of his parents (Crispin Glover, Lea Thompson), and must make sure that they fall in love or he'll cease to exist. Even more dauntingly, Marty has to return to his own time and save the life of Doc Brown.",
            id: "35",
            imageUrl: "https://resizing.flixster.com/Maw5VT9vAmOJXmHzLCOk7jN9S04=/300x300/v2/https://flxt.tmsimg.com/assets/46432_ac.jpg",
            imdbId: "tt0088763",
            name: "BACK TO THE FUTURE",
          },
          {
            categoryId: 4,
            description: "In 2001, editor Marty Baron of The Boston Globe assigns a team of journalists to investigate allegations against John Geoghan, an unfrocked priest accused of molesting more than 80 boys. Led by editor Walter 'Robby' Robinson (Michael Keaton), reporters Michael Rezendes (Mark Ruffalo), Matt Carroll and Sacha Pfeiffer interview victims and try to unseal sensitive documents. The reporters make it their mission to provide proof of a cover-up of sexual abuse within the Roman Catholic Church.",
            id: "36",
            imageUrl: "https://resizing.flixster.com/rBMaEDGJ_ZtiNoRF_SZzStEyk_g=/300x300/v2/https://flxt.tmsimg.com/assets/p11897076_k_h9_ac.jpg",
            imdbId: "tt1895587",
            name: "SPOTLIGHT",
          },
          {
            categoryId: 7,
            description: "Suzy (Jessica Harper) travels to Germany to attend ballet school. When she arrives, late on a stormy night, no one lets her in, and she sees Pat (Eva Axén), another student, fleeing from the school. When Pat reaches her apartment, she is murdered. The next day, Suzy is admitted to her new school, but has a difficult time settling in. She hears noises, and often feels ill. As more people die, Suzy uncovers the terrifying secret history of the place.",
            id: "37",
            imageUrl: "https://resizing.flixster.com/BEpForBmJiuSenEA4h1yaUy7v6o=/300x300/v2/https://flxt.tmsimg.com/assets/p8242_v_h9_aa.jpg",
            imdbId: "tt0076786",
            name: "SUSPIRIA",
          },
          {
            categoryId: 7,
            description: "A team of British archaeologists led by Sir Joseph Whemple (Arthur Byron) discover the mummified remains of the ancient Egyptian prince Imhotep (Boris Karloff), along with the legendary scroll of Thoth. When one of the archaeologists recites the scroll aloud, Imhotep returns to life, but escapes. Several years later, Imhotep has taken on the guise of a wealthy man, as he searches Egypt for his lost love, who he believes has been reincarnated as the lovely Helen Grosvenor (Zita Johann).",
            id: "38",
            imageUrl: "https://resizing.flixster.com/8Uz0FaxbxVLixr3f9V3yKp7F3J4=/300x300/v2/https://flxt.tmsimg.com/assets/p5922_v_h9_aa.jpg",
            imdbId: "tt0023245",
            name: "THE MUMMY",
          },
          {
            categoryId: 4,
            description: "Wisecracking mercenary Deadpool meets Russell, an angry teenage mutant who lives at an orphanage. When Russell becomes the target of Cable -- a genetically enhanced soldier from the future -- Deadpool realizes that he'll need some help saving the boy from such a superior enemy. He soon joins forces with Bedlam, Shatterstar, Domino and other powerful mutants to protect young Russell from Cable and his advanced weaponry.",
            id: "39",
            imageUrl: "https://resizing.flixster.com/C1wJmkTAzjzS1dP3TXYZ9OnNeqE=/300x300/v2/https://resizing.flixster.com/JebJKxccvM6E_vMwfQpgbyt6zbU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2MwZWUzYmYwLWMyNDEtNDhlNS05M2ZiLTdmMmE4YTgyZjQyNS53ZWJw",
            imdbId: "tt5463162",
            name: "DEADPOOL 2",
          },
          {
            categoryId: 6,
            description: "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.",
            id: "40",
            imageUrl: "https://resizing.flixster.com/vF6eqQMX5BjRsLeFRdNyICoOxIU=/300x300/v2/https://resizing.flixster.com/nP0EKgScfbt_xQfYuiHzWTGKfSc=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzViMjBhZDM0LWMxNTUtNDA3OC05ZjVkLTg4MDliYjNhNjdkOC53ZWJw",
            imdbId: "tt1302006",
            name: "THE IRISHMAN",
          },
          {
            categoryId: 7,
            description: "Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the town's children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.",
            id: "41",
            imageUrl: "https://resizing.flixster.com/pXUC22q9vJKSJ9_PUN7QGqWzgGU=/300x300/v2/https://resizing.flixster.com/mNHqkBWJl6dUF09i8Zw2m-iohUU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzI4NmNjMDE3LTJmNWYtNGM2MC04N2JlLTY4OGRiMzQxZjg3Ny53ZWJw",
            imdbId: "tt1396484",
            name: "IT",
          },
          {
            categoryId: 6,
            description: "When a reporter is assigned to decipher newspaper magnate Charles Foster Kane's (Orson Welles) dying words, his investigation gradually reveals the fascinating portrait of a complex man who rose from obscurity to staggering heights. Though Kane's friend and colleague Jedediah Leland (Joseph Cotten), and his mistress, Susan Alexander (Dorothy Comingore), shed fragments of light on Kane's life, the reporter fears he may never penetrate the mystery of the elusive man's final word, 'Rosebud.'",
            id: "42",
            imageUrl: "https://resizing.flixster.com/Mh5j7tYjBTkcZImoLSORUwuR7fI=/300x300/v2/https://flxt.tmsimg.com/assets/p1485_i_h9_aa.jpg",
            imdbId: "tt0033467",
            name: "CITIZEN KANE",
          },
          {
            categoryId: 10,
            description: "Phoenix secretary Marion Crane (Janet Leigh), on the lam after stealing $40,000 from her employer in order to run away with her boyfriend, Sam Loomis (John Gavin), is overcome by exhaustion during a heavy rainstorm. Traveling on the back roads to avoid the police, she stops for the night at the ramshackle Bates Motel and meets the polite but highly strung proprietor Norman Bates (Anthony Perkins), a young man with an interest in taxidermy and a difficult relationship with his mother.",
            id: "43",
            imageUrl: "https://resizing.flixster.com/73S91x9zWoyZSOAxricUsU7vp78=/300x300/v2/https://flxt.tmsimg.com/assets/p283_v_h9_aq.jpg",
            imdbId: "tt0054215",
            name: "PSYCHO",
          },
          {
            categoryId: 10,
            description: "On Nov. 4, 1979, militants storm the U.S. embassy in Tehran, Iran, taking 66 American hostages. Amid the chaos, six Americans manage to slip away and find refuge with the Canadian ambassador. Knowing that it's just a matter of time before the refugees are found and likely executed, the U.S. government calls on extractor Tony Mendez (Ben Affleck) to rescue them. Mendez's plan is to pose as a Hollywood producer scouting locations in Iran and train the refugees to act as his 'film' crew.",
            id: "44",
            imageUrl: "https://resizing.flixster.com/gc_Wb6DdIxJA0THynlgCTfApQ2M=/300x300/v2/https://resizing.flixster.com/l97gqS48objStrIjA_GBUj9aUfQ=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzdmNTE5ZTcwLTJlZTYtNGRiNS04NzYwLThlMGFlNjAwYTBiYi53ZWJw",
            imdbId: "tt1024648",
            name: "ARGO",
          },
          {
            categoryId: 10,
            description: "Hitchcock's romantic story of obsession, manipulation and fear. A detective is forced to retire after his fear of heights causes the death of a fellow officer and the girl he was hired to follow. He sees a double of the girl, causing him to transform her image onto the dead girl's body. This leads into a cycle of madness and lies.",
            id: "45",
            imageUrl: "https://resizing.flixster.com/LyLC-q0NyXCfa_P2aC5iYJaIr3A=/300x300/v2/https://flxt.tmsimg.com/assets/p8151_d_v8_aa.jpg",
            imdbId: "tt0052357",
            name: "VERTIGO",
          },
          {
            categoryId: 6,
            description: "Career criminal Johnny Clay (Sterling Hayden) recruits a sharpshooter (Timothy Carey), a crooked police officer (Ted de Corsia), a bartender (Joe Sawyer) and a betting teller named George (Elisha Cook Jr.), among others, for one last job before he goes straight and marries his fiancee, Fay (Coleen Gray). But when George tells his restless wife, Sherry (Marie Windsor), about the scheme to steal millions from the racetrack where he works, she hatches a plot of her own.",
            id: "46",
            imageUrl: "https://resizing.flixster.com/x_1hEG32D268Abbsyobn9yccgEY=/300x300/v2/https://flxt.tmsimg.com/assets/p5341_i_h9_ac.jpg",
            imdbId: "tt0049406",
            name: "THE KILLING",
          },
          {
            categoryId: 2,
            description: "Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, the two new friends embark on an extraordinary journey to unlock the real story behind Miguel's family history.",
            id: "47",
            imageUrl: "https://resizing.flixster.com/teB89Xd-4d7T5FgTNUmteT4Nt9Y=/300x300/v2/https://resizing.flixster.com/5dCdJB_WjoWFPBOSGVLgoUk00go=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzE1MzRiZjVkLTBlNmUtNDFhYi1hZWQ4LTcwNmYwN2ZiNTQ2MS53ZWJw",
            imdbId: "tt2380307",
            name: "COCO",
          },
          {
            categoryId: 2,
            description: "Hiccup (Jay Baruchel) is a Norse teenager from the island of Berk, where fighting dragons is a way of life. His progressive views and weird sense of humor make him a misfit, despite the fact that his father (Gerard Butler) is chief of the clan. Tossed into dragon-fighting school, he endeavors to prove himself as a true Viking, but when he befriends an injured dragon he names Toothless, he has the chance to plot a new course for his people's future.",
            id: "48",
            imageUrl: "https://resizing.flixster.com/O8AfHCF7wKvHnAGYa-XdX6q60iM=/300x300/v2/https://resizing.flixster.com/D2YjX_zpksqRi1RuFD2_gkeqbHg=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2VjYTRiZTk1LTU2MmEtNDEzNS1hMWI1LTQyNjYwZjZjOWE0Ni53ZWJw",
            imdbId: "tt0892769",
            name: "HOW TO TRAIN YOUR DRAGON",
          },
          {
            categoryId: 8,
            description: "Presented as originally released in 1939. Includes themes and character depictions which may be offensive and problematic to contemporary audiences. Epic Civil War drama focuses on the life of petulant Southern belle Scarlett O'Hara. Starting with her idyllic life on a sprawling plantation, the film traces her survival through the tragic history of the South during the Civil War and Reconstruction, and her tangled love affairs with Ashley Wilkes and Rhett Butler.",
            id: "49",
            imageUrl: "https://resizing.flixster.com/IyesUdhW9ej99uHWCS935HUXIvA=/300x300/v2/https://flxt.tmsimg.com/assets/p5094_d_v8_aa.jpg",
            imdbId: "tt0031381",
            name: "GONE WITH THE WIND",
          }, {
            categoryId: 48,
            description: "James Cameron's Titanic is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the 'ship of dreams' -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.",
            id: "50",
            imageUrl: "https://resizing.flixster.com/HKzOjqmWG9VdLLOemPkjnEijofo=/300x300/v2/https://flxt.tmsimg.com/NowShowing/10236/10236_aa.jpg",
            imdbId: "tt0120338",
            name: "TITANIC",
          },
        ],
    )
  }

  getComments(): Observable<Comment[]> {
   // return this.http.get<Comment[]>(`${this.URL}/comments`);
    return of<any[]>([
      {
        id: "4",
        movieId: "4",
        createdAt: "2020-12-27T08:27:40.631Z",
        text: "Central"
      },
      {
        id: "50",
        movieId: "4",
        createdAt: "2020-12-26T22:42:28.177Z",
        text: "Corporate"
      },
      {
        id: "22",
        movieId: "4",
        createdAt: "2020-12-27T08:14:52.012Z",
        text: "Test"
      },
      {
        id: "23",
        movieId: "4",
        createdAt: "2020-12-27T15:04:06.192Z",
        text: "Reset"
      },
      {
        id: "39",
        movieId: "4",
        createdAt: "2021-01-13T16:28:53.157Z",
        text: "Believe"
      },
      {
        id: "40",
        movieId: "4",
        createdAt: "2021-01-13T16:30:28.978Z",
        text: "Help"
      },
      {
        id: "41",
        movieId: "4",
        createdAt: "2021-01-13T16:32:03.254Z",
        text: "Yo"
      }
    ])
  }
}
