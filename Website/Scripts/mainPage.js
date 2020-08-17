
/*
//Toggle view of Monster columns
function showhide() {
    //function that changes #content to display: block
    const x = document.getElementsByClassName("content");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = x[i].style.display == 'none' ? 'block' : 'none';
    } 
}; 

document.getElementsByClassName("beastTitle").addEventListener("click", showhide); */


//Toggle view of Monster columns - JQUERY
$('.beastTitle header').click(function(){
    $('.beastContent').toggle('slow');
    $('.beastTitle header p').text($('.beastTitle header p').text() == '▲' ? '▼' : '▲');
});

$('.cursedTitle header').click(function(){
    $('.cursedContent').toggle('slow');
    $('.cursedTitle header p').text($('.cursedTitle header p').text() == '▲' ? '▼' : '▲');
}); 

$('.dracoTitle header').click(function(){
    $('.dracoContent').toggle('slow');
    $('.dracoTitle header p').text($('.dracoTitle header p').text() == '▲' ? '▼' : '▲');
}); 

$('.eleTitle header').click(function(){
    $('.eleContent').toggle('slow');
    $('.eleTitle header p').text($('.eleTitle header p').text() == '▲' ? '▼' : '▲');
}); 

$('.hybTitle header').click(function(){
    $('.hybContent').toggle('slow');
    $('.hybTitle header p').text($('.hybTitle header p').text() == '▲' ? '▼' : '▲');
}); 

$('.insectTitle header').click(function(){
    $('.insectContent').toggle('slow');
    $('.insectTitle header p').text($('.insectTitle header p').text() == '▲' ? '▼' : '▲');
}); 

$('.necroTitle header').click(function(){
    $('.necroContent').toggle('slow');
    $('.necroTitle header p').text($('.necroTitle header p').text() == '▲' ? '▼' : '▲');
}); 

$('.ogroTitle header').click(function(){
    $('.ogroContent').toggle('slow');
    $('.ogroTitle header p').text($('.ogroTitle header p').text() == '▲' ? '▼' : '▲');
}); 

$('.relicTitle header').click(function(){
    $('.relicContent').toggle('slow');
    $('.relicTitle header p').text($('.relicTitle header p').text() == '▲' ? '▼' : '▲');
}); 

$('.specTitle header').click(function(){
    $('.specContent').toggle('slow');
    $('.specTitle header p').text($('.specTitle header p').text() == '▲' ? '▼' : '▲');
}); 

$('.vampTitle header').click(function(){
    $('.vampContent').toggle('slow');
    $('.vampTitle header p').text($('.vampTitle header p').text() == '▲' ? '▼' : '▲');
}); 


//ONCLICK FOR MONSTERS
function getMonsterImage(monsterName) {
    const foundMon = monsters.find(monster => monster.name === monsterName)
    return foundMon.image;
}

function getMonsterTitle(monsterName) {
    const foundMon = monsters.find(monster => monster.name === monsterName)
    return foundMon.name;
}

function getMonsterInfo(monsterName) {
    const foundMon = monsters.find(monster => monster.name === monsterName)
    return foundMon.text;
}

function getMonsterItem(monsterName) {
    const foundMon = monsters.find(monster => monster.name === monsterName)
    return foundMon.items;
}


$('.beastContent').click(function() {
    let monsterName = ($(this).text().trim());
    console.log(monsterName);
    document.getElementById('monster').src = getMonsterImage(monsterName);
    document.getElementById('info-heading').innerHTML = getMonsterTitle(monsterName);
    document.getElementById('info').innerHTML = getMonsterInfo(monsterName);
    document.getElementById('items').innerHTML = getMonsterItem(monsterName);
})

$('.cursedContent').click(function() {
    let monsterName = ($(this).text().trim());
    console.log(monsterName);
    document.getElementById('monster').src = getMonsterImage(monsterName);
    document.getElementById('info-heading').innerHTML = getMonsterTitle(monsterName);
    document.getElementById('info').innerHTML = getMonsterInfo(monsterName);
    document.getElementById('items').innerHTML = getMonsterItem(monsterName);
})






//MONSTER OBJECTS

let monsters = [
    /* BEASTS */
    {
        "name": "Bears",
        "image": "Resources/Images/Monsters/Beasts/Bear.svg",
        "text": "<p>\r\n    Know that ditty about the bear \"climbing the mountain, to see what he could see?\" Biggest load of rubbish I've ever heard. When a bear climbs a mountain, it's not to see. It's to hunt. To kill. \r\n<\/p>\r\n<p>\r\n    \u2013 Jahne Oldak, royal huntsman\r\n<\/p>\r\n<br>\r\n<p>\r\n    Bears are omnivores \u2013 meaning men find a place in their diet beside berries, roots and salmon. When they snack on humans, they most frequently partake of the meat of travelers unwittingly trespassing on their territory, or else that of hunters for whom besting such a creature is a lifelong ambition. \r\n<\/p>\r\n<br>\r\n<p>\r\n    There are several subspecies of bears \u2013 black bears, polar bears and cave bears \u2013 which differ from one another in coloring as well as in size and strength. All share one trait in common, however: a near-unmatched ability to kill.\r\n<\/p>",
        "items": "<img src=\"Resources\/Images\/Items\/Oils\/beast_oil.png\"> <img src=\"Resources\/Images\/Signs\/quen.png\">"
    },
    {
        "name": "Big Bad Wolf",
        "image": "Resources/Images/Monsters/Beasts/BigBadWolf.svg",
        "text": "<p>\r\n                        'You ask why I have these big hands, my friend? Well, I'll tell you my secret: exercise.' \r\n                    <\/p>\r\n                    <p>\r\n                        \u2014 Big Bad Wolf\r\n                    <\/p>\r\n                    <br>\r\n                    <p>\r\n                        The Big Bad Wolf who lived in the Land of a Thousand Fables was, like the other denizens of that strange sphere, created by Artorius Vigo based on a figure from folk tales. Once he served as a playmate to the duke's daughters, acting out scenes with a certain red-hooded girl and her grandmother, but as the fable land slowly degenerated, so did he.\r\n                    <\/p>\r\n                    <br>\r\n                    <p>\r\n                        Geralt and Syanna met the Big Bad Wolf while he was nursing a nasty hangover and was not eager to cooperate. Yet since our heroes needed a bean which the wolf had, they forced him to act out his tale.\r\n                    <\/p>\r\n                    <br>\r\n                    <p>\r\n                        That tale ended as it always had: the Big Bad Wolf attacked the Hunter (played by Geralt), biting and clawing him fiercely while his own wounds healed almost instantaneously. Inevitably, however, the Big Bad Wolf was killed and his stomach cut open.\r\n                    <\/p>\r\n                    <br>\r\n                    <p>\r\n                        This time, out came not a grandma and her granddaughter, but a magic bean.\r\n                    <\/p>",
        "items": "<img src=\"Resources\/Images\/Items\/Bombs\/devils_puffball_bomb.png\"> <img src=\"Resources\/Images\/Items\/Oils\/beast_oil.png\">"
    },
    {
        "name": "Dogs",
        "image": "Resources/Images/Monsters/Beasts/Dog.svg",
        "text": "<p>\r\n    They say a dog's a man's best friend... But in these foul times one best be wary, even of his friends.\r\n<\/p>\r\n<p>\r\n    \u2013 Alfred Pankratz, beggar from Novigrad\r\n<\/p>\r\n<br>\r\n<p>\r\n    Some claim dogs are reflections of their masters. A well-treated pet repays his owner with loyalty and trust, whereas an ill-treated one repays this treatment in kind as well, meeting yells with barks and kicks with bites. Since there is an abundance of bad men, so, too, is there an abundance of bad dogs. Most dangerous of all are the vagrant mutts who have lost all respect for men and developed a taste for blood and carrion.\r\n<\/p>\r\n<p>\r\n    Some claim dogs are reflections of their masters. A well-treated pet repays his owner with loyalty and trust, whereas an ill-treated one repays this treatment in kind as well, meeting yells with barks and kicks with bites. Since there is an abundance of bad men, so, too, is there an abundance of bad dogs. Most dangerous of all are the vagrant mutts who have lost all respect for men and developed a taste for blood and carrion.\r\n<\/p>",
        "items": "<img src=\"Resources\/Images\/Items\/Oils\/beast_oil.png\">"
    },
    {
        "name": "Panthers",
        "image": "Resources/Images/Monsters/Beasts/Panther.svg",
        "text": "<p>\r\n    Pussy cat, pussy cat, where have you been?\r\n    I've been to Cintra to look at the queen\r\n    Pussy cat, pussy cat, what did you there?\r\n    Run, fool, that's not a cat but a panther!   \r\n<\/p>\r\n<p>\r\n    \u2013 rare variant of a traditional folk rhyme \r\n<\/p>\r\n<br>\r\n<p>\r\n    Panthers are dangerous predators found in forests and other woodlands. They are quick, agile and, like all cats, diabolically cunning. In many less-than-thoroughly-urbanized areas, folk still believe panthers are the stranded souls of those who die in their sleep. Superstition thus holds anyone perishing in this way should be dragged to the nearest woods and left there without a burial. The panther-spirit of the deceased may then devour its own body, thereby passing on to the nether realms.\r\n<\/p>\r\n<p>\r\n    This belief must be eradicated by any means, for it leads to epidemics of cholera and other contagious diseases born of rotting corpses.\r\n<\/p>\r\n<p>\r\n    Besides, it is patently ridiculous, given panthers are not necrophages and will not consume carrion of any sort. They prefer more spry and lively prey, such as deer or even humans, provided they are not ill and do not stink too badly. \r\n<\/p>\r\n<p>\r\n    Panthers (and their tawny-coated cousins, mountain lions) are incredibly swift and able to sneak up on prey undetected to gain the advantage of surprise.\r\n<\/p>\r\n<p>\r\n    As soon as they enter open terrain, they leap to attack with astonishing speed, mauling their prey with their sharp claws, long teeth and the sheer force of their momentum.\r\n<\/p>\r\n<p>\r\n    Panthers are known to retreat mid-fight, yet do not let yourself be fooled into a false sense of security. This is but a ruse to allow them to attack again, by surprise. Never drop your guard until you see the animal drop dead.\r\n<\/p>\r\n<p>\r\n    Panthers are vulnerable to the effects of all the Signs, as well as bombs and oils.\r\n<\/p>",
        "items": "<img src=\"Resources\/Images\/Items\/Oils\/beast_oil.png\">"
    },
    {
        "name": "The Beast of Beauclair",
        "image": "Resources/Images/Monsters/Beasts/BeastofBeauclair.svg",
        "text": "<p>\r\n    Eyewitnesses to gruesome monster attacks always have a hard time describing the creature in question. The beasts move quickly and often attack at night, while the witnesses are terrified and primarily concerned with fleeing for their lives. As a result, witchers quite often have no inkling what creature they face until they find tracks or otherwise establish something for themselves. Such was the case with the Beast tormenting Beauclair. Geralt knew it was deadly, elusive and fiendishly clever. Everything else he heard was clearly the product of imaginations fed by fear of a dangerous predator. \r\n<\/p>\r\n<p>\r\n    When Geralt identified the Beast, he discovered it was a higher vampire, meaning one of the most difficult foes a witcher can come to face.\r\n<\/p>\r\n<p>\r\n    Higher vampires are superhumanly strong and fast. They can turn completely invisible, and each comes with its own personalized set of talents and abilities perfected through centuries of existence.\r\n<\/p>\r\n<p>\r\n    When Geralt realized he was dealing with such a creature, he swore foully and realized the rumors about the Beast had not been exaggerated in the slightest.\r\n<\/p>",
        "items": "<img src=\"Resources\/Images\/Items\/Oils\/vampire_oil.png\"> <img src=\"Resources\/Images\/Items\/Potions\/black_blood.png\"> <img src=\"Resources\/Images\/Signs\/quen.png\">"
    },
    {
        "name": "Three Little Pigs",
        "image": "Resources/Images/Monsters/Beasts/Threelittlepigs.svg",
        "text": "<p>\r\n    Why bother with brick? In this climate, even a straw house's nice and cozy.\r\n<\/p>\r\n<p>\r\n    \u2013 a little pig\r\n<\/p>\r\n<p>\r\n    The three little pigs are perfect examples of a rather unfortunate phenomenon. Leave even a kind-hearted, warm, naively benign creature to fend for itself, and it won't remain so benign for long.\r\n<\/p>\r\n<p>\r\n    The three little pigs from the Land of a Thousand Fables were left for years without Artorius Vigo's supervision. During this time they went completely feral, transforming into three wild boars which attacked anyone who dared approach their ruined home.\r\n<\/p>",
        "items": "<img src=\"Resources\/Images\/Items\/Oils\/beast_oil.png\">"
    },
    {
        "name": "Wild Boars",
        "image": "Resources/Images/Monsters/Beasts/wildboar.svg",
        "text": "<p>\r\n    <i>\r\n        'How doth the little wild boar \r\n    <\/i>\r\n<\/p>\r\n<p>\r\n    <i>\r\n        Improve his shining tusks,\r\n    <\/i>\r\n<\/p>\r\n<p>\r\n    <i>\r\n        And rut them 'gainst the forest floor,\r\n    <\/i>\r\n<\/p>\r\n<p>\r\n    <i>\r\n        And on the trees' rough husks!\r\n    <\/i>\r\n<\/p>\r\n\r\n<p>\r\n    <i>\r\n        How cheerfully he seems to grin\r\n    <\/i>\r\n<\/p>\r\n<p>\r\n    <i>\r\n        How neatly spreads his claws,\r\n    <\/i>\r\n<\/p>\r\n<p>\r\n    <i>\r\n        And welcomes little lasses in,\r\n    <\/i>  \r\n<\/p>\r\n<p>\r\n    <i>\r\n        With gently smiling jaws!'\r\n    <\/i>\r\n<\/p>\r\n<p>\r\n   \u2013 Louis of Charolle, mathematician, author and poet\r\n<\/p>\r\n<p>\r\n    These woodland beasts are as \"wild\" \u2013 untamed, nasty and aggressive \u2013 as their name indicates. To this day, many peasants in outlying Kaedweni villages believe wild boars persist on a diet of young maids, though in truth they most often slate their hunger with roots and acorns. Do not think this vegetarian diet makes them harmless, however. In fact, these animals' stout build and sharp teeth render them veritable fur-covered combat machines. Mother Nature has additionally equipped them with dual pairs of tusks - upper \"pipes\" and lower \"sabres\" - and this weaponry's sum effect is to make the beasts the terrors of the woods, a threat to all who venture or dwell there, human, humanoid and otherwise. Boars also have hard, club-like snouts, which some peasants call their \"whistles,\" though no boar has ever been heard to make such a noise. Instead, they emit a characteristic grunt, which sounds to some like the snoring of an extremely overweight man. Another peasant belief claims boars have extremely prickly natures, and, if offended, will vent their anger by knocking down fences and gobbling up potatoes. Though they sometimes live alone, boars usually appear in small groups of 3 to 5 specimens.\r\n<\/p>\r\n",
        "items": "<img src=\"Resources\/Images\/Items\/Bombs\/northern_wind_bomb.png\"> <img src=\"Resources\/Images\/Items\/Oils\/beast_oil.png\"> <img src=\"Resources\/Images\/Signs\/igni.png\"> <img src=\"Resources\/Images\/Signs\/yrden.png\">"
    },
    {
        "name": "Wolves",
        "image": "Resources/Images/Monsters/Beasts/wolf.svg",
        "text": "<p>\r\n    <i>\r\n       'Friend of mine used to say that with all these griffins and basilisks and whatnot, good old fashioned wolves weren't nothing to worry about... Then the damned beasts devoured half his flock.'\r\n    <\/i>\r\n<\/p>\r\n<p>\r\n    \u2013 Yngvar, shepherd\r\n<\/p>\r\n<p>\r\n    Once upon a time wolves were the absolute rulers of the forest. Men used them to frighten children, while adults, too, trembled at the sound of their howling. Post-Conjunction monsters not only pushed wolves into the deepest wilds but also took over their place in human nightmares. Yet this does not mean the old predators ceased to be a danger. Wolves do not have a drop of magic within them, breathe no fire and spit no acid, but that in no way stops them from killing unwary travelers and hunters.\r\n<\/p>\r\n<p>\r\n    Particularly dangerous are wargs, a nasty and ferocious subspecies of wolf, and the snow-white wolves which today can only be found in the wild highlands of the Skellige archipelago.\r\n<\/p>\r\n<p>\r\n    Wolves usually feed in packs counting from a handful to over a dozen members, though some particularly strong males hunt alone. Though wolves are weaker than many post-Conjunction monsters, they make up for any lack of strength with their intelligence. When fighting them one must be especially careful not to become surrounded. The presence of wolves can also signal more serious trouble \u2013 these predators often share their hunting grounds with werewolves and leshens.\r\n<\/p>",
        "items": "<img src=\"Resources\/Images\/Items\/Oils\/beast_oil.png\">"
    },
    /*CURSED ONES*/
    {
        "name": "Archespore",
        "image": "Resources/Images/Monsters/Cursed Ones/archespore.svg"
        /*"text": ""
        "items":*/
    }
    /*
    {
        "name":
        "image":
        "text":
        "items":
    } */

];


