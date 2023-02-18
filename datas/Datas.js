const movieData = [
  {
    incoming: "incoming",
    name: "Bilo jednom... u Hollywood-u",
    engName: "Once Upon a Time in Hollywood",
    director: "Quentin Tarantino",
    actors: [
      "Leonardo DiCaprio",
      "Brad Pitt",
      "Margot Robbie",
      "Kurt Russell",
      "Al Pacino"
    ],
    genre: ["Komedija", "Drama"],
    time: ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
    duration: "161 minuta",
    state: "SAD",
    image: "img/movie/Once Upon a Time in Hollywood.jpg",
    desc: "'Bilo jednom...u Hollywoodu' priča je o glumcu i njegovom dvojniku koji kreću na put kako bi pronašli svoje mjesto pod suncem u filmskoj industriji daleke 1969. godine. Radnja filma se odvija u Los Angelesu 1969. na vrhuncu hippie Hollywooda. Glavni likovi u filmu Rick Dalton (Leonardo DiCaprio), bivša zvijezda jedne western TV serije i njegov dugogodišnji dvojnik Cliff Booth (Brad Pitt) u vrijeme zadnjih trzaja zlatnog Hollywooda bore se za svoj uspjeh u svjetskoj prijestolnici filmske industrije koju više ne prepoznaju. Ali Rick ima poznatu susjedu - Sharon Tate (Margot Robbie)... ",
    price: {
      "Cinestar Zagreb": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Split": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Rijeka": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Zadar": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Pula": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      }
    }
  },
  {
    name: "Nevidljivi čovjek",
    engName: "The Invisible Man",
    director: "Leigh Whannell",
    actors: ["Elisabeth Moss", "Oliver Jackson-Cohen", "Harriet Dyer"],
    genre: ["Horor", "Sf"],
    time: ["Ponedjeljak", "Utorak", "Srijeda", "Petak", "Subota", "Nedjelja"],
    duration: "124 minute",
    state: "SAD",
    image: "img/movie/The Invisible Man.jpg",
    desc: "„Ono što ne možeš vidjeti može te ozlijediti“. To će na vlastitoj koži osjetiti dobitnica Emmyja Elisabeth Moss u novom trileru Nevidljivi čovjek koji dolazi iz produkcijske kuće Blumhouse.",
    price: {
      "Cinestar Zagreb": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Split": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Zadar": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Pula": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      }
    }
  },
  {
    name: "Osvetnici: Završnica",
    engName: "Avengers: Endgame",
    director: ["Anthony Russo", "Joe Russo"],
    actors: [
      "Brie Larson",
      "Scarlett Johansson",
      "Robert Downey Jr.",
      "Josh Brolin",
      "Chris Hemsworth",
      "Chris Evans"
    ],
    genre: ["Akcija", "Sf"],
    time: ["Utorak", "Četvrtak", "Petak", "Subota", "Nedjelja"],
    duration: "182 minute",
    state: "SAD",
    image: "img/movie/Avengers Endgame.jpg",
    desc: "Nakon razornih događaja u filmu Osvetnici: Rat beskonačnosti (2018.), svemir je u ruševinama. Uz pomoć preostalih saveznika, Osvetnici se ponovno okupljaju kako bi poništili Thanosove postupke i vratili red u svemir.",
    price: {
      "Cinestar Zagreb": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Split": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Rijeka": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Osijek": {
        "pretpremijera": "40 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Zadar": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn"
      },
      "Cinestar Slavonski Brod": {
        "pretpremijera": "40 kn",
        "EXTREME": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Pula": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      }
    }
  },
  {
    incoming: "incoming",
    name: "Sonic: Super Jež",
    engName: "Sonic the Hedgehog",
    director: "Jeff Fowler",
    actors: [
      "Ben Schwartz",
      "James Marsden",
      "Jim Carrey",
      "Major Bennington"
    ],
    genre: ["Komedija", "Akcija"],
    time: [
      "Ponedjeljak",
      "Utorak",
      "Srijeda",
      "Četvrtak",
      "Petak",
      "Nedjelja"
    ],
    duration: "99 minuta",
    state: "SAD",
    image: "img/movie/Sonic the Hedgehog.jpg",
    desc: "Sonic: Super jež temeljen je na megapopularnoj igrici o plavom ježu sa supermoćima. U filmu pratimo Sonicovo snalaženje u životu na Zemlji u čemu mu najviše pomaže njegov novi najbolji ljudski prijatelj – lokalni policajac Tom. Najveću nepriliku stvara im zločesti doktor Robotnik (Jim Carrey) koji pokušava uloviti Sonica kako bi od njega ukrao supermoći i zavladao svijetom.",
    price: {
      "Cinestar Zagreb": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Split": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Zadar": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Slavonski Brod": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Osijek": {
        "pretpremijera": "40 kn",
        "REALD 3D": "35 kn"
      }
    }
  },
  {
    incoming: "incoming",
    name: "Zločesti dečki zauvijek",
    engName: "Bad Boys for Life",
    director: [" Adil El Arbi", "Bilall Fallah"],
    actors: ["Will Smith", "Martin Lawrence", "Vanessa Hudgens"],
    genre: ["Akcija", "Komedija", "Kriminalistički"],
    time: [
      "Ponedjeljak",
      "Srijeda",
      "Četvrtak",
      "Petak",
      "Subota",
      "Nedjelja"
    ],
    duration: "124 minute",
    state: "SAD",
    image: "img/movie/Bad Boys for Life.jpg",
    desc: "Zločesti dečki Mike Lowrey (Will Smith) i Marcus Burnett (Martin Lawrence) ponovno su zajedno u još jednoj ludoj vožnji u dugo očekivanom nastavku „Zločesti dečki zauvijek”. Ovaj put naši zločesti dečki jesu nešto stariji ali su jednako ludi i opaki. Iako Marcus svom dugogodišnjem partneru Mikeu najavljuje skorašnji odlazak u mirovinu, jer vrijeme mu je, Mike ga nagovora na još jednu ludu misiju.",
    price: {
      "Cinestar Zagreb": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Split": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Rijeka": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Zadar": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Slavonski Brod": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Pula": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      }
    }
  },
  {
    name: "Parazit",
    engName: "Gisaengchung",
    director: "Bong Joon Ho",
    actors: ["Kang-ho Song", "Sun-kyun Lee", "Yeo-jeong Jo"],
    genre: ["Komedija", "Drama"],
    time: [
      "Ponedjeljak",
      "Utorak",
      "Srijeda",
      "Četvrtak",
      "Petak",
      "Subota",
      "Nedjelja"
    ],
    duration: "132 minute",
    state: "South Korea",
    image: "img/movie/Gisaengchung.jpg",
    desc: "Četveročlana obitelj Ki-taeka je bliska, ali potpuno nezaposlena, pred njom je mračna budućnost. Sina Ki-wooa preporučuje njegov prijatelj, student na prestižnom sveučilištu, za dobro plaćeni posao podučavanja, te se nada da će tako imati redovite prihode. Sa svim očekivanjima svoje obitelji, Ki-woo odlazi u obiteljski dom na intervju. Stigavši ​​u kuću gospodina Parka, vlasnika globalne IT tvrtke, Ki-woo susreće njegovu suprugu Yeon-kia, lijepu mladu damu. Ali nakon ovog prvog susreta između dviju obitelji, uslijediti će nezaustavljivi niz nezgoda.",
    price: {
      "Cinestar Zagreb": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Split": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Rijeka": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Zadar": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Slavonski Brod": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Pula": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      }
    }
  },
  {
    incoming: "incoming",
    name: "Capone",
    engName: "Capone",
    director: "Josh Trank",
    actors: ["Tom Hardy", "Linda Cardellini", "Matt Dillon"],
    genre: ["Kriminalistički", "Drama"],
    time: [
      "Ponedjeljak",
      "Utorak",
      "Četvrtak",
      "Petak",
      "Subota",
      "Nedjelja"
    ],
    duration: "103 minute",
    state: "SAD",
    image: "img/movie/Capone.jpg",
    desc: "47-godišnji Al Capone-a, nakon deset godina provedenih u zatvoru, počinje da pati od demencije, i biva progonjen svojom nasilnom prošlošću …",
    price: {
      "Cinestar Zagreb": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Split": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Rijeka": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Zadar": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Slavonski Brod": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Pula": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      }
    }
  },
  {
    name: "Birds of Prey i emancipacija famozne Harley Quinn",
    engName: "Birds of Prey: And the Fantabulous Emancipation of One Harley Quinn",
    director: "Cathy Yan",
    actors: ["Margot Robbie", "Rosie Perez", "Mary Elizabeth Winstead"],
    genre: ["Kriminalistički", "Drama", "Akcija"],
    time: [
      "Ponedjeljak",
      "Utorak",
      "Srijeda",
      "Četvrtak",
      "Petak",
      "Subota",
      "Nedjelja"
    ],
    duration: "109 minuta",
    state: "SAD",
    image: "img/movie/Birds of Prey And the Fantabulous Emancipation of One Harley Quinn.jpg",
    desc: "Radnja se odvija oko grupe heroina i negativki DC-jevog univerzuma, a glavna zvijezda je Margot Robbie kao famozna Harley Quinn koju smo već imali prilike gledati u filmu Suicide Squad. Harley Quinn predvodi svoju jaku žensku ekipu koju čine: Jurnee Smollett-Bell kao Black Canary, Mary Elizabeth Winstead kao Huntress, Rosie Pere kao Renee Montoya i mlada debitantica Ella Jay Basco kao Cassandra Cain.",
    price: {
      "Cinestar Zagreb": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Split": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Zadar": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Slavonski Brod": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Pula": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      }
    }
  },
  {
    incoming: "incoming",
    name: "Bloodshot",
    engName: "Bloodshot",
    director: "Dave Wilson",
    actors: ["Vin Diesel", "Eiza González", "Sam Heughan"],
    genre: ["Sf", "Drama", "Akcija"],
    time: [
      "Ponedjeljak",
      "Utorak",
      "Srijeda",
      "Četvrtak",
      "Petak",
      "Subota",
      "Nedjelja"
    ],
    duration: "109 minuta",
    state: "SAD",
    image: "img/movie/Bloodshot.jpg",
    desc: "Snimljen prema istoimenom bestseler stripu film Bloodshot prati Rayja Garrisona, nedavno poginulog vojnika, kojeg je korporacija Rising Spirit Technologies, uz pomoć posebne nanotehnologije – uskrsnula i učinila superjunakom. S vojskom nanotehnologije u svojim venama on postaje nezaustavljiva sila snage – jači nego ikada i s mogućnošću samo-izlječivanja. Ali kontrolirajući njegovo tijelo, korporacija je preuzela i njegov um i sjećanje.",
    price: {
      "Cinestar Zagreb": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Split": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Rijeka": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Zadar": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Slavonski Brod": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Pula": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      }
    }
  },
  {
    name: "Black Widow",
    engName: "Black Widow",
    director: "Cate Shortland",
    actors: ["Florence Pugh", "Scarlett Johansson", "Robert Downey Jr."],
    genre: ["Sf", "Akcija"],
    time: ["Ponedjeljak", "Utorak", "Srijeda", "Petak", "Subota", "Nedjelja"],
    duration: "127 minuta",
    state: "SAD",
    image: "img/movie/Black Widow.jpg",
    desc: "U akcijskom filmu 'Black Widow', Marvel Studio predstavlja Natashu Romanoff kao Black Widow koja se suočava s mračnim dijelovima svoje smrtnosti kada se pojavi opasna zavjera povezana s njezinom prošlošću. Potaknuta silom koja se neće zaustaviti pred ničim, Natasha se mora baviti svojom poviješću kao špijunka i prekinuti odnos koji je ostao u njoj prije nego što je postala Osvetnica.",
    price: {
      "Cinestar Zagreb": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Split": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Rijeka": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Zadar": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Slavonski Brod": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      },
      "Cinestar Pula": {
        "pretpremijera": "40 kn",
        "4DX": "30 kn",
        "REALD 3D": "35 kn"
      }
    }
  }
]