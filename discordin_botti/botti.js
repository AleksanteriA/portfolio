const Discord = require('discord.js');
const api = require("imageapi.js");
const cron = require('cron');
//const client = new Discord.Client();
process.setMaxListeners(0);
require('events').EventEmitter.prototype._maxListeners = 100;

const { Client } = require("discord.js");
const keepAlive = require('./server.js');
 
const client = new Client({
  disableEveryone: true
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 

keepAlive();
client.login(process.env.TOKEN)

var d = new Date();
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());


  let scheduledMessage = new cron.CronJob('00 00 0-21 * * 4', () => {
    // Sekunti (0-59), minuutti (0-59), tunti (0-23), päivä (1-31), kuukausi (0-11), viikonpäivä (0-6 //sun-sat)
     let channel = client.channels.cache.get('434361648921313281'); //Kalju general
    //let channel = client.channels.cache.get('869910390795022346'); //botspam
    //channel.send('Moikkeliskoikkelis');
    channel.send("<:firegator:793966741440954400>")
  });
  let scheduledMessage2 = new cron.CronJob('00 00 22-23 * * 3', () => {
    // Sekunti (0-59), minuutti (0-59), tunti (0-23), päivä (1-31), kuukausi (0-11), viikonpäivä (0-6 //sun-sat)
     let channel = client.channels.cache.get('434361648921313281'); //Kalju general
    //let channel = client.channels.cache.get('869910390795022346'); //botspam
    //channel.send('Moikkeliskoikkelis');
    channel.send("<:firegator:793966741440954400>")
  });
  

  scheduledMessage.start()
  scheduledMessage2.start()





//Sigma grindset (keep in mind that these are random quotes from Internet.)
client.on('message', msg => {
  //var forbiddenWords = ["sigma"]
  //for (var i = 0; i < forbiddenWords.length; i++) {
    if (msg.content.toLowerCase() === 'sigma' || msg.content.toLowerCase() === 'sigma male' || msg.content.toLowerCase() === 'sigma rule' || msg.content.toLowerCase() === 'sigma grindset') {
      // message.content contains a forbidden word;
      // delete message, log, etc.
    const messages = 
    [
"Confused betas complaining about the flashing screen, they don't know I did it on purpose to keep them away from the truth. Give innocent people seizures #TrueGrindset",
"A foolish man complains about the hole in his pocket... A wise man uses that hole to scratch his balls...",
"They say about 80% of men have a girlfriend. That means that the other 20% still have a brain. Stay on that grind kings, keep your head up and remember: Girl spelled backwards is liar",
"Don't clean your room. \
Adapting to messy conditions makes you stronger and saves more time to hustle. 💯💸🚬",
"Attack a random kid if he looks at the wrong way.",
"A real sigma male never beats meat. He eats it.",
"i was texting my gf while playing this theme in the background, now im single.",
"Everyone: what a loner \
Me eating alone because I'm on the sextilionaire grindset, betas will never concieve my intentions",
"Sit on the toilet but piss outside it",
"If you are born in a world where you are forced to shit, nothing is forcing for you to wipe. - Sigma Grindset",
"> Wake up at 4am \
> Stare at yourself in the mirror for a hour \
> Do 100 push ups \
> By a one way ticket to Romania \
> Disappear.",
"A man poops in the toilet, and nobody bats an eye. But a man poops in the CVS parking lot, and everyone loses their minds…",
"Feed exclusively on your own seed",
"Cut your brakes. Just like the grind, your car should never stop.",
"Many Fools beat their meat, But only the Strongest defeats it \
- Sigma Sun Tzu",
"The beta lives in the box. 📦 \
The Alpha thinks outside the box. 💯\
The Sigma buys the box. 💰",
"Kick over a homeless mans coin cup, the world doesn’t wait for anybody to change. 💯",
"Hey betas, while you were slaving 9-5 I started my first terror group. Gotta keep up the hustle!",
"Microwave your food but wait for it to cool back down to room temp, do this over and over again, once your DNA breaks down due to radiation poisoning it will reform you into a true sigma male",
"Sigma grindset rule 421: once you are done with a dumbbell rep drop them on your feet. It will make them larger and you will assert dominance over your rivals more easily",
"Never wash your hands, sigmas aren’t afraid of 'germs' ",
"Tell people a joke - keep the punchline to yourself. The sigma male doesn't need to hear others laugh. Sigma Male Lesson #632",
"Never go after women. Go after men.",
"Sigma rule: \
Don't listen to the one with the lyrics",
"Major 🔑 to the grindset of a trillionaire. Sleep 2 hours a  week eat 3 times a year",
"Sigma Rule 1435: Give people seizures at the bass drop",
"Smart fella or fart smella? nah, I'm a fart sella",
"A bold man has political beliefs. \
A wise man changes them to whoever he's trolling",
"Don't breathe air, you are consuming the garbage recycled by plants 💪 Gotta keep the grindset up 💯",
"Sigma male grindset rule #777: Always slam the fart ",
"It doesn't really matter how many times you flip your sandwich the bread will always come first \
- Sigma chef",
"I pump my petrol car with diesel. I don’t follow the laws of nature because I am God himself."

    ]
    const randomQuote = messages[Math.floor(Math.random() * messages.length)];
    msg.channel.send(randomQuote)
    //break;
}})


//Hyvää yötä
client.on('message', msg => {
    if (msg.content.toLowerCase() == "gn") {
    const messages = 
    [
      "NUKU RAKKAANI...ÄLÄ HERÄÄ MIELIPAHAAN. TULKOON UNIHIEKKASET HILJAA SILMIIN. NUKU RAKKAANI..HERÄTTÄKÖÖN AAMUAURINKO SINUT UUTEEN PÄIVÄÄN. NUKU PARANTAVAA UNTA...",
      "nukahda rakkaani sillä minä olen painjainen.nukhdettuasi tulen usiini riisun sinut,nuolen kaikkialta ja lopuksi nain tajuttomaksi.SWEET DREAMS...", 
      "Kauniita unia,enkeleitä ja pikkujunia! \nPusi pusi!!!:) \n^^^^^^^^^^^^^^^^^^^^^ \nVaikea on antaa puhelimen olla... \nhaluaisin sanoa sinulle HYVÄÄ YÖTÄ! \n^^^^^^^^^^^^^^^^^^^^^^",
      "Voit laskea lampaat, pestä hampaat. Pistä kainaloon nalle, mene peiton alle. mieti kivoja juttuja, lauluja tuttuja. älä itke tuleviä töitä ei muutakuin hyviä öitä.",
      "HYVIÄ ÖITÄ KÄSILLE TÖITÄ",
      "Kärsitään (sian kärsä) toisiamme... nöf nöf.",
      "Hyvää yötä, kauniita unia, pölypunkin kuvia. Se tulee yöllä ja tekee pesän sun korvaan...",
      "Laita tyyny hyvin, ota uni syvin.Nähdään siellä, unien tiellä.",
      "Katso taivasta, me molemmat olemme samojen tähtien alla.",
      "Hyvää yötä, Jeesus myötä, kiitos tästä päivästä. Oli hauska tavata. Aamen.",
      "Näin sinusta yöllä märän unen... Kusin alleni nauraessani, kun putosit kalliolta.",
      "Hyvää yötä nukkumatille työtä!!;-))",
      "On keskiyö ja kello lyö.",
      "Kun ilta saapuu ja pimeys jää, tyynyyn paina pää. Sulje silmäs ja luokses saavun, suudelmin pehmein tuon sulle aamun. Kauniita unia! \nTaas saapuu ilta ja on aika kätkeä sinut uneen kauneimpaan. Unten kätköissä tavataan, vain sinä ja minä kahdestaan, samaa unta katsellaan. Hyvää yötä!",
      "Hyvää yötä, olkoon Mikaelin kummitäti unissas myötä",
      "Hyvää yötä, kirpuille töitä",
      "Kun ilta saapuu ja pimeys jää, tyynyn kätköihin paina pää. Sulje silmäs ja luokses saavun, suudelmin pehmein tuon sulle aamun. Vielä hetki unta nää, ethän enää tunne ikävää. Hyvää yötä ja kauniita unia <3 \nTahtoisin olla enkelisi vartioimassa untasi. Tahtoisin olla tähtesi valaisemassa tietäsi. Tahtoisin pimeässä ottaa sut kainaloon ja nukahtaa. \nOlisinpa sadepisara, joka poskellesi tipahtaa. Olisinpa yö, joka syliinsä sinut ottaa. Olisinpa peitto, joka yöllä sinua lämmittää... \nJospa unissani törmäisin sinuun, näkisin kaipaamani hymyn, silittelisin pörröistä päätäsi, tuntisin lämpösi, kuulisin äänesi,sukeltaisin syliisi. Hukkuisin kauniisiin silmiisi ja pyörtyisin suudelmaasi, ettei tarvis taas kohta herätä.. Yksin ja kylmään.. \nKatson yöhön tummaan, taivaan kauniiseen sineen pieniä tuikkivia tähtiä, jotka valaisevat taivaan, niinkuin sinä minun elämääni. Toivoin tähdenlentoa, joka veisi mukanaan luoksesi! Kauniita unia sokruni!",
      "suljet silmäsi \nja vielä hiljaa sanot 'hyvää yötä rakas' \npainan hellän suudelman huulillesi \nenkä tahdo sua nyt herättää \nen tahdo että näet kuinka itken \nitseni uneen \ntahdon, että olet lähelläni \ntahdon sun pitävän musta kii\ntahtoisit \nettä pyyhit kyyneleeni ja sanoisit että kaikki on hyvin \n'olen tässä, enkä ole menossa minnekään' \nja pelkään et kun \ aamulla herään \nolen kylmissäni, enkä missään sua nää \njoka ikinen ilta \nkun lamppu sammuu \nja tyynyyn painan pään \nodotan, että nukahdat ja taas pelkään \npelkään \ntämän kaiken loppuvan \npelkään sydämesi liekin sammuvan \npelkään \net kun aamulla herään \nolen kylmissäni \nja yksin \nsanot aina ettei sua multa kukaan vie \nja sanot rakastavas \nsanot ettei ole pelättävää \nja tarjoat \nsylisi suojaa \nja silti \naina kun sä nukahdat, katson \nsun niin viattomia kasvojas \nja mietin \nmiten tosissasi oletkaan \nen enää koskaan \ntahdo yksin nukahtaa \nja joka ikinen ilta \nkun lamppu sammuu \nja tyynyyn painan pään \nodotan että nukahdat ja taas pelkään \npelkään \ntämän kaiken loppuvan \npelkään sydämesi liekin sammuvan \npelkään \net kun aamulla herään \nolen kylmissäni \nja yksin \nsuljet silmäsi ja sanot hiljaa \n'hyvää yötä, rakas'",
      "Hyvää yötä viimeinen mammutti"






    ]
    const randomGn = messages[Math.floor(Math.random() * messages.length)];
    msg.channel.send(randomGn)

}})


function emoji (id,message) {
  return message.guild.emojis.get(id).toString()
 }


//Wuzun poistaja
//const ayy = client.emojis.cache.find(emoji => emoji.name === "ayy");
client.on('message', message => {
  const wuzu = client.emojis.cache.find(emoji => emoji.name === "wuzu");
  const wuzuid = client.emojis.cache.get("710461256632631307");
  const wuzutarra = client.emojis.cache.get("867122223167832084");

  var forbiddenWords = [wuzu]
  for (var i = 0; i < forbiddenWords.length; i++) {
    if (message.content.toLowerCase().includes(forbiddenWords[i])) {
      // message.content contains a forbidden word;
      // delete message, log, etc.
      message.delete(wuzu)
      break;



}}})

//Vastaa tägäten 
//message.reply(`${wuzu} LMAO`);


// Roolin automaattinen lisäys
client.on('guildMemberAdd', async member => {
  let guild = Client.guilds.cache.get('721006070536994957') 
  let role = guild.roles.cache.get('721007316941668494') //ihminen

  await member.roles.add(role.id)
   console.log('User @' + member.user.tag + ' has joined the server!');
    //var role = member.guild.roles.cache.find(role => role.name == "Luttinen")
   // member.roles.add(role);
  
  //const role = member.guild.roles.cache.get('721007377393909777')
  //await member.roles.add(role.id)
  
  

})
 

 
client.on('message', async msg => {
  if (msg.content === 'edoge') {
    let subreddits = [
      "dogecoin"
    ];
    let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
    let img = await api(subreddit)
    const Embed = new Discord.MessageEmbed()
    .setTitle(`A quality post from r/dogecoin`)
    .setURL(`https://www.reddit.com/r/dogecoin`)
    .setColor('RANDOM')
    .setImage(img)
    msg.channel.send(Embed)
  }
});

//Tytöt ovat kauniita ja pitävät hauskaa :)
client.on('message', async message => {
var forbiddenWords = ["tytöt", "tyttö"]
for (var i = 0; i < forbiddenWords.length; i++) {
  if (message.content.toLowerCase().includes(forbiddenWords[i])) {
    // message.content contains a forbidden word;
    // delete message, log, etc.
    const messages = ["*Tytöt tahtoo pitää hauskaa*",
                      "*Tytöt tahtoo pitää hauskaa...Eikä sitä peittele*",
                      "*Tytöt tietää: ellei sitä tänään tee, sitä tee ei milloinkaan*",
                      "*Tytöt ovat kauniita kuin lumpeet lammessa*",
                      "*Tytöt ovat kauniita kuin ruusut pensaassa*",
                      
                      
    ]
    if (message.author.bot) return false;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.channel.send(randomMessage)
  }
}
})

//Tytöt ovat kauniita ja pitävät hauskaa :)
client.on('message', async message => {
var forbiddenWords = ["naiset", "nainen"]
for (var i = 0; i < forbiddenWords.length; i++) {
  if (message.content.toLowerCase().includes(forbiddenWords[i])) {
    // message.content contains a forbidden word;
    // delete message, log, etc.
    const messages = ["*Kaiken takana on nainen...Joka ihanasti rakastaa*",
                      "*Elämä on vasta elämää...Kun kaiken takana on nainen*",
                      "*Kaiken takana on nainen...Joka ihanasti rakastaa...Jota minä en voi vastustaa*",

                      
                      
    ]

    if (message.author.bot) return false;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.channel.send(randomMessage)
  }
}
})

//Kiina9000
client.on('message', async message => {
var forbiddenWords = ["kehitysmaa", "ylivieska", "lohja"]
for (var i = 0; i < forbiddenWords.length; i++) {
  if (message.content.toLowerCase().includes(forbiddenWords[i])) {
    // message.content contains a forbidden word;
    // delete message, log, etc.

    const messages = [" Lohja ja Ylivieska ovat suomen kuntia/kaupunkeja ja tämä on fakta",
    "Mulla on oikeaa tietoa",
    "Sulla on väärää tietoa"
    ]
    
    if(message.author.bot) return false;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.channel.send(randomMessage)
  }
}
})

//Babatunden postaaja
client.on('message', message => {
  const babis = 'https://fi.wikipedia.org/wiki/Babatunde_Wusu'

  var forbiddenWords = ['babis']
  for (var i = 0; i < forbiddenWords.length; i++) {
    if (message.content.toLowerCase().includes(forbiddenWords[i])) {
      // message.content contains a forbidden word;
      // delete message, log, etc.
      message.channel.send(babis)
      break;

}}})

let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//Autoroller
client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'eiookaa'){
    let i = 1
    while (i <= 15)
    {    
      i ++
      msg.channel.send("$m")
      //sleep
      //msg.channel.send("$m")
      //setTimeout(() => {},10000)
    }

  }
})



//Töihin
client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'töihin' || msg.content.toLowerCase() === 'menisit töihin' || msg.content.toLowerCase() === 'mene töihin' 
  || msg.content.toLowerCase() === 'menisit sinäki töihin'|| msg.content.toLowerCase() === 'mene sinä töihin' || msg.content.toLowerCase() === 'mee sinä töihin'
  || msg.content.toLowerCase() === 'mee töihin' || msg.content.toLowerCase() === 'mee töihin weka'){
    //msg.channel.send('https://duunitori.fi/')
    //msg.reply(`LMAO`);
  }
});

//Tuutko
client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'tuutko'){
    const messages = ["Joo", "En :rofl:", "Ai Liigaa vai? Käy", ":frog:"]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    msg.channel.send(randomMessage)
  }
});

// Moi
client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'moi'){
    const messages = ["Moi", "No moooi", "No morjensta", "Moikkuuu"]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    msg.channel.send(randomMessage)
  }
});


//Toimiva tägäys
client.on("message", message => {
  var user = '205385501656481802'; //
  var user2 = '159680661144338432'; //
  var user3 = '88048192096051200'; //
  var user4 = '293495571925172224'; //pois käytöstä
  var user5 = '195058700983992321'; //
  var user6 = '275327300113924106'; //
  var user7 = '806656435622248518'; //Kruptos
  var user8 = '391504895246860290'; //pois käytöstä
  var user9 = '264463213641465860'; //
  var user10 = '205388457499951106'; //pois käytöstä
  var user11 = '187908183325540352'; //
  var user12 = '870340749235978290'; //
  var user13 = '298814029663567883'; //

  var haba1 = '<:haba1:658726523838267392>'
  var haba2 = '<:haba2:658726541718716456>'
  var haba3 = '<:haba3:658726561360510986>'
  var mario = '<:mario:543140427658821636>'
  var kurpitsa = '<:Kurpitsa:655916212731117609>'
  var chad = '<:Chad:875702940323708978>'
  var theo = '<:Pagverds:556132620753305609>'

  const messages = [haba1 + haba2 + haba3, haba1 + mario + haba3, haba1 + kurpitsa + haba3, haba1 + chad + haba3, haba1 + theo + haba3 ]
  const randomHaba = messages[Math.floor(Math.random() * messages.length)];

  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  if (message.mentions.has(user) || (message.mentions.has(user2) || (message.mentions.has(user3)
    || (message.mentions.has(user11) || (message.mentions.has(user6) || (message.mentions.has(user12) || (message.mentions.has(user9) 
    || (message.mentions.has(user13) || (message.mentions.has(user5)))))))))) {
    message.channel.send("Mene töihin");
      
  };
  if (message.mentions.has(user7))
  {
    message.channel.send(randomHaba)
  }
});


//Kuvan lähettämisen testiosa, hyödynnetään McTesteriä
client.on("message", message => {
  var jallu = '755900415639421031'; //McTester


  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  if (message.mentions.has(jallu)) {
      message.channel.send("https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/be/MCon_Weka_2020_Split_1.png/revision/latest?cb=20200115231443");
      
  };
});

//Wekan kuvat randomilla
client.on("message", message => {
  var weka = '187908183325540352'; //Weka

  const content = 
  [
    "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/be/MCon_Weka_2020_Split_1.png/revision/latest?cb=20200115231443",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/d209f3ca-923d-4208-b906-1b8ea8b63913-profile_image-300x300.png"
  ]
  const randomWeka = content[Math.floor(Math.random() * content.length)];
  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  if (message.mentions.has(weka)) {
      message.channel.send(randomWeka);
      
  };
});


// var user = "205385501656481802";
// if(message.mentions.users.has(user)) {
//   msg.channel.reply('ok');
//   //msg.react('👍');
//   msg.channel.send("Mooi")
// }



