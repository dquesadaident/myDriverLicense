
/*const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
*/
const states = [
    {"name":"Alabama","alpha-2":"AL"},
    {"name":"Alaska","alpha-2":"AK"},
    {"name":"Arizona","alpha-2":"AZ"},
    {"name":"Arkansas","alpha-2":"AR"},
    {"name":"California","alpha-2":"CA"},
    {"name":"Colorado","alpha-2":"CO"},
    {"name":"Connecticut","alpha-2":"CT"},
    {"name":"Delaware","alpha-2":"DE"},
    {"name":"District of Columbia","alpha-2":"DC"},
    {"name":"Florida","alpha-2":"FL"},
    {"name":"Georgia","alpha-2":"GA"},
    {"name":"Hawaii","alpha-2":"HI"},
    {"name":"Idaho","alpha-2":"ID"},
    {"name":"Illinois","alpha-2":"IL"},
    {"name":"Indiana","alpha-2":"IN"},
    {"name":"Iowa","alpha-2":"IA"},
    {"name":"Kansa","alpha-2":"KS"},
    {"name":"Kentucky","alpha-2":"KY"},
    {"name":"Lousiana","alpha-2":"LA"},
    {"name":"Maine","alpha-2":"ME"},
    {"name":"Maryland","alpha-2":"MD"},
    {"name":"Massachusetts","alpha-2":"MA"},
    {"name":"Michigan","alpha-2":"MI"},
    {"name":"Minnesota","alpha-2":"MN"},
    {"name":"Mississippi","alpha-2":"MS"},
    {"name":"Missouri","alpha-2":"MO"},
    {"name":"Montana","alpha-2":"MT"},
    {"name":"Nebraska","alpha-2":"NE"},
    {"name":"Nevada","alpha-2":"NV"},
    {"name":"New Hampshire","alpha-2":"NH"},
    {"name":"New Jersey","alpha-2":"NJ"},
    {"name":"New Mexico","alpha-2":"NM"},
    {"name":"New York","alpha-2":"NY"},
    {"name":"North Carolina","alpha-2":"NC"},
    {"name":"North Dakota","alpha-2":"ND"},
    {"name":"Ohio","alpha-2":"OH"},
    {"name":"Oklahoma","alpha-2":"OK"},
    {"name":"Oregon","alpha-2":"OR"},
    {"name":"Pennsylvania","alpha-2":"PA"},
    {"name":"Rhode Island","alpha-2":"RI"},
    {"name":"South Carolina","alpha-2":"SC"},
    {"name":"South Dakota","alpha-2":"SD"},
    {"name":"Tennessee","alpha-2":"TN"},
    {"name":"Texas","alpha-2":"TX"},
    {"name":"Utah","alpha-2":"UT"},
    {"name":"Vermont","alpha-2":"VT"},
    {"name":"Virginia","alpha-2":"VA"},
    {"name":"Washington","alpha-2":"WA"},
    {"name":"West Virginia","alpha-2":"WV"},
    {"name":"Wisconsin","alpha-2":"WI"},
    {"name":"Wyoming","alpha-2":"WY"}
];
const femaleNames = [
    "Belen",
    "Caron",
    "Kandice",
    "Jennette",
    "Maureen",
    "Lovie",
    "Kathyrn",
    "Ashlea",
    "Angele",
    "Julissa",
    "Adelaide",
    "Maragaret",
    "Dorathy",
    "Rolanda",
    "Mickie",
    "Beulah",
    "Geraldine",
    "Ligia",
    "Krystin",
    "Joi",
    "Garnett",
    "Spring",
    "Starla",
    "Ai",
    "Mazie",
    "Hester",
    "Natosha",
    "Melynda",
    "Hilde",
    "Sonia",
    "Georgianna",
    "Sherri",
    "Trudi",
    "Chia",
    "Lynsey",
    "Brinda",
    "Gertha",
    "Cara",
    "Kathaleen",
    "Marguerita",
    "Leonia",
    "Mellie",
    "Shonta",
    "Tonisha",
    "Wai",
    "Maritza",
    "Estell",
    "Dulce",
    "Aline",
    "Tamera"];
const maleNames = [
    "Thad",
    "Grady",
    "Hipolito",
    "Val",
    "Demetrius",
    "Carlo",
    "Vicente",
    "Deandre",
    "Man",
    "Andy",
    "Jeramy",
    "Brenton",
    "Emile",
    "Margarito",
    "Scott",
    "Rocco",
    "Tad",
    "Shirley",
    "Ronald",
    "Hayden",
    "Elvin",
    "Adrian",
    "Kelly",
    "Grover",
    "Jere",
    "John",
    "Aurelio",
    "Nathaniel",
    "Thurman",
    "Jeromy",
    "Charles",
    "Anton",
    "Malcolm",
    "Nicky",
    "Dave",
    "Marcelo",
    "Louie",
    "Thaddeus",
    "Clair",
    "Felipe",
    "Cameron",
    "Cleo",
    "Donnell",
    "Kristofer",
    "Abraham",
    "Abel",
    "Andrea",
    "Ezra",
    "Juan",
    "Buford"
];
const lastNamesPrefix = [
    "Aesir",
    "Axe",
    "Battle",
    "Bear",
    "Berg",
    "Biscuit",
    "Black",
    "Blade",
    "Blood",
    "Blue",
    "Boar",
    "Board",
    "Bone",
    "Cage",
    "Cave",
    "Chain",
    "Cloud",
    "Coffee",
    "Code",
    "Death",
    "Dragon",
    "Dwarf",
    "Eel",
    "Egg",
    "Elk",
    "Fire",
    "Fjord",
    "Flame",
    "Flour",
    "Forge",
    "Fork",
    "Fox",
    "Frost",
    "Furnace",
    "Cheese",
    "Giant",
    "Glacier",
    "Goat",
    "God",
    "Gold",
    "Granite",
    "Griffon",
    "Grim",
    "Haggis",
    "Hall",
    "Hamarr",
    "Helm",
    "Horn",
    "Horse",
    "House",
    "Huskarl",
    "Ice",
    "Iceberg",
    "Icicle",
    "Iron",
    "Jarl",
    "Kelp",
    "Kettle",
    "Kraken",
    "Lake",
    "Light",
    "Long",
    "Mace",
    "Mead",
    "Maelstrom",
    "Mail",
    "Mammoth",
    "Man",
    "Many",
    "Mountain",
    "Mutton",
    "Noun",
    "Oath",
    "One",
    "Owl",
    "Pain",
    "Peak",
    "Pine",
    "Pot",
    "Rabbit",
    "Rat",
    "Raven",
    "Red",
    "Refreshingbeverage",
    "Ring",
    "Rime",
    "Rock",
    "Root",
    "Rune",
    "Salmon",
    "Sap",
    "Sea",
    "Seven",
    "Shield",
    "Ship",
    "Silver",
    "Sky",
    "Slush",
    "Smoke",
    "Snow",
    "Spear",
    "Squid",
    "Steam",
    "Stone",
    "Storm",
    "Swine",
    "Sword",
    "Three",
    "Tongue",
    "Torch",
    "Troll",
    "Two",
    "Ulfsark",
    "Umlaut",
    "Unsightly",
    "Valkyrie",
    "Wave",
    "White",
    "Wolf",
    "Woman",
    "Worm",
    "Wyvern"
];
const lastNameSuffix = [
    "admirer",
    "arm",
    "axe",
    "back",
    "bane",
    "baker",
    "basher",
    "beard",
    "bearer",
    "bender",
    "blade",
    "bleeder",
    "blender",
    "blood",
    "boiler",
    "bone",
    "boot",
    "borer",
    "born",
    "bow",
    "breaker",
    "breeder",
    "bringer",
    "brow",
    "builder",
    "chaser",
    "chiller",
    "collar",
    "counter",
    "curser",
    "dancer",
    "deck",
    "dottir",
    "doubter",
    "dreamer",
    "drinker",
    "drowner",
    "ear",
    "eater",
    "face",
    "fearer",
    "friend",
    "foot",
    "fury",
    "gorer",
    "grim",
    "grinder",
    "grower",
    "growth",
    "hacker",
    "hall",
    "hammer",
    "hand",
    "hands",
    "head",
    "hilt",
    "hugger",
    "hunter",
    "killer",
    "leg",
    "licker",
    "liker",
    "lost",
    "lover",
    "maker",
    "mender",
    "minder",
    "miner",
    "mocker",
    "monger",
    "neck",
    "puncher",
    "rage",
    "rhyme",
    "rider",
    "ringer",
    "roarer",
    "roller",
    "sailor",
    "screamer",
    "sequel",
    "server",
    "shield",
    "shoe",
    "singer",
    "skinner",
    "slinger",
    "slugger",
    "sniffer",
    "son",
    "smasher",
    "speaker",
    "stinker",
    "sucker",
    "sword",
    "tail",
    "tamer",
    "taster",
    "thigh",
    "tongue",
    "tosser",
    "tracker",
    "washer",
    "wielder",
    "wing",
    "wisher",
    "wrath"
];
const cities = [
    "Neath" , "Amroha" , "Orroli" , "Cranbrook" , "Doetinchem" , "Quilleco" , "Villa Faraldi" , "Glain" , "Paillaco" , "Ruette" , "Pencahue" , "Talgarth" , "Saint-Brieuc" , "Mackay" , "Fresno" , "Pichilemu" , "Colwood" , "Preston" , "Poggiorsini" , "Stony Plain" , "Vertou" , "Grangemouth" , "Bregenz" , "Montenero Val Cocchiara" , "Arviat" , "Charlottetown" , "Fürstenwalde" , "Cuglieri" , "Beypazarı" , "Marentino" , "Asse" , "San José de Maipo" , "Pincher Creek" , "Sant'Angelo a Cupolo" , "Benalla" , "Bègles" , "North Battleford" , "Isca sullo Ionio" , "Cervinara" , "Brampton" , "Titagarh" , "Gressoney-La-Trinitè" , "MabomprŽ" , "Rochester" , "Dindigul" , "Aalst" , "Lancaster" , "Matamata" , "Lochgilphead" , "Mobile" , "Marbaix" , "Santa Cruz de Tenerife" , "Stafford" , "Kapuskasing" , "Wyoming" , "Grumo Appula" , "Campos dos Goytacazes" , "Lithgow" , "Ely" , "Augusta" , "Cariboo Regional District" , "Opole" , "Tulsa" , "Castro" , "Fossato Serralta" , "Esslingen" , "West Jordan" , "Scheggino" , "Sautin" , "Meerhout" , "San Vicente" , "Jackson" , "Silchar" , "Mata de Plátano" , "Merseburg" , "Almería" , "Sangerhausen" , "White Rock" , "Stewart" , "Sitapur" , "Tillicoultry" , "Saint Paul" , "Utrecht" , "Ajmer" , "Provo" , "Tirunelveli" , "Yorkton" , "Banchory" , "Recogne" , "Calais" , "Stargard Szczeciński" , "Wenduine" , "Falun" , "Saint Louis" , "Calbuco" , "Wolfurt" , "Bozeman" , "Cuddalore" , "Camrose" , "Nanton"];
const streets = [
    "9096 Elit, St.", "686-8825 Libero Rd.", "971-1492 Nulla Ave", "P.O. Box 273, 9559 Nulla. Ave", "6005 Non Road", "6811 Lectus Road", "361-7339 Nunc Street", "Ap #625-4397 Sit Avenue", "P.O. Box 248, 2082 Eget Street", "4118 Nec St.", "Ap #333-8647 Nec St.", "P.O. Box 540, 7494 Imperdiet Av.", "9093 Suspendisse Street", "Ap #352-8050 Cursus. Avenue", "430-6137 Montes, Avenue", "406-236 Interdum. Rd.", "379-8841 Nonummy St.", "116-1677 Elit, St.", "571-2474 Ut Rd.", "Ap #234-379 Ridiculus Rd.", "P.O. Box 908, 820 Nunc Avenue", "Ap #648-1024 Tristique Street", "213 Vivamus Street", "P.O. Box 511, 3589 Primis Rd.", "984-8501 Nec, Street", "Ap #904-8536 At, Rd.", "361-8477 Eget Rd.", "Ap #447-3763 Donec Av.", "P.O. Box 128, 6313 Odio. Ave", "P.O. Box 885, 9182 Massa Rd.", "651-4392 Quisque St.", "516 Ac Road", "P.O. Box 748, 858 Risus. Rd.", "799-9030 Arcu St.", "Ap #104-7505 Sed Road", "Ap #294-6642 Libero. St.", "6663 Hendrerit. Road", "P.O. Box 234, 8663 Porttitor Rd.", "3281 Eu Av.", "Ap #155-4666 At Street", "Ap #202-8009 Nullam Street", "6565 Nec, Rd.", "Ap #389-5485 Ultricies Road", "713 Lobortis Rd.", "Ap #774-4980 Phasellus Ave", "437-3228 Interdum Road", "569-9448 At, St.", "Ap #935-3338 Imperdiet Ave", "4290 Facilisis St.", "Ap #829-6629 Non Rd.", "6527 Nec Road", "910-1724 Donec Rd.", "103-4845 Velit St.", "6749 Placerat, Ave", "612-4980 Egestas Rd.", "182-628 Neque. St.", "P.O. Box 191, 2492 Semper Rd.", "1606 Id, Avenue", "P.O. Box 539, 8118 Lacus. Ave", "513-7346 Morbi Rd.", "113-8625 Porttitor Rd.", "P.O. Box 944, 7422 Vitae, Rd.", "P.O. Box 735, 9523 Cubilia Avenue", "P.O. Box 751, 5915 Sem. Avenue", "205-7463 Quisque Av.", "2953 Interdum. Rd.", "844-7964 Dolor. St.", "9736 Nunc Ave", "P.O. Box 633, 1771 Torquent Road", "3273 Adipiscing Rd.", "2020 Varius Road", "Ap #391-9349 Donec Ave", "530-1936 Sit Av.", "8890 Laoreet, St.", "869-9229 Vel St.", "Ap #863-3319 Malesuada St.", "P.O. Box 832, 5245 Interdum. Rd.", "448-5869 Fusce Road", "4441 Tincidunt Ave", "Ap #404-4919 Non, St.", "Ap #319-1630 Nonummy Road", "595-101 Ut, Avenue", "P.O. Box 404, 6198 Diam Avenue", "576 Lectus St.", "4059 Nisi Rd.", "724-2572 Consectetuer St.", "P.O. Box 525, 205 Nibh St.", "852-7073 Euismod St.", "P.O. Box 826, 866 Nunc St.", "587-3142 Nunc Rd.", "2751 Massa. Street", "810-1250 Eu St.", "P.O. Box 637, 3978 Ligula. Ave", "736-2859 Enim. Road", "Ap #729-3142 Ultrices Avenue", "107 Nam Rd.", "9688 Diam. St.", "514-4131 Sociis Road", "419-9692 Nascetur Avenue", "5103 Est Ave" ];
const colors = [
    "BLK","GRN","BRN","BLU","RED","VIO", "ORG", "GRY", "YEL", "WHT"];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
export function generateStatic(){
    return{
        issuerIdentificationNumber: "636040",
        lastName : "Lothbrok",
        firstName: "Ragnar",
        middleName: "King",
        driverLicense: "TEST3837423",
        street: "SOMEWHERE ST",
        city: "SALT LAKE CITY",
        state: "UT",
        zip: "81102",
        dateOfBirth: "01011950",
        sex: "M",
        height: "95",
        weight: "320",
        issue: "06032015",
        expiration: "06082021",
        hair: "BRO",
        eyes: "BRO",
        dd: "987654321"
    }
}

export function generateRandom(){
    let sex =getRandomSex();
    let hei = getRandomNumber(60,70);
    let state = getRandomState(states);
    var myDate = generateDates();
    var dob = generateDoB(myDate);
    console.log("dob:", dob);
    return {
        issuerIdentificationNumber: getRandomNumber(10000,99999),
        lastName : getRandomLastName(),
        firstName: sex === "M" ? getRandomFromArray(maleNames) : getRandomFromArray(femaleNames),
        middleName: sex === "M" ? getRandomFromArray(maleNames) : getRandomFromArray(femaleNames),
        driverLicense: "TEST"+getRandomNumber(1000000,9999999),
        street: getRandomFromArray(streets),
        city: getRandomFromArray(cities),
        state: getRandomStateName(state),
        zip: getRandomNumber(10000,99999),
        dateOfBirth: dob,
        sex: sex,
        height: getRandomHeight(hei),
        weight: getRandomNumber(110,350),
        issue: generateIssueDate(dob),
        expiration: getRandomExpirationDate(),
        hair: getRandomFromArray(colors),
        eyes: getRandomFromArray(colors),
        dd: getRandomNumber(100000000,999999999),
        alpha2: getRandomStateAlpha2(state),
        srcPhoto: sex === "M" ? generateManPhoto() : generateWomanPhoto()
    }
}

function getRandomFromArray(array) {
    return array[getRandomNumber(0,array.length)];
}

// DATES !
function generateDates() {
    return getRandomNumber(1,13).toString().padStart(2,"0") + getRandomNumber(1,28).toString().padStart(2,"0");
}

//----------- DOB
function generateDoB(myDate) {
    let year = new Date().getFullYear();
    return myDate + (year - getRandomNumber(21,70));
}

export function getDateSlashed(date){
    return date.slice(0,2) + "/" + date.slice(2,4) +"/" + date.slice(4,8);
    }
//----------- ISSUE
function generateIssueDate(dateDoB) {
    let year = new Date().getFullYear();
    let yearDoB = Number(dateDoB.slice(4,8));
    return generateDates() + getRandomNumber(yearDoB,year);
}

//----------- EXPIRATION
function getRandomExpirationDate() {
    let year = new Date().getFullYear();
    return generateDates() + (year + getRandomNumber(-1,4))
}

//----------- smaller
export function generateSmallDate(date){
    return date.slice(0,2) + "/" + date.slice(2,4) +"/" + date.slice(6,8);
}

//---------- STATES
function getRandomState(states) {

    return getRandomFromArray(states);
}

function getRandomStateAlpha2(object) {
    return object['alpha-2'];
}

function getRandomStateName(object) {
    return object['name'];
}
//----------
function getRandomLastName() {
    console.log("ARRAY LN >",lastNamesPrefix);

    console.log("RANDOM DE ARRAY LN >",getRandomFromArray(lastNamesPrefix).value);
    return getRandomFromArray(lastNamesPrefix)+getRandomFromArray(lastNameSuffix);
}

function getRandomSex () {
    return getRandomNumber(1,2) === 1 ? "M" : "F";
}

function getRandomHeight(inches) {
    console.log("inches> ",inches);
    if(!inches){
        return "";
    }
    return Math.floor(Number(inches)/12) + "'-" + String(Number(inches) % 12).padStart(2, "0")+ '"';
}

export function generateWomanPhoto() {
    return "https://randomuser.me/api/portraits/women/" + getRandomNumber(0,99) + ".jpg";
}

export function generateManPhoto() {
    return "https://randomuser.me/api/portraits/men/" + getRandomNumber(0,99) + ".jpg";
}
