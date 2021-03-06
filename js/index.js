const data = [
   { 
     src: 'https://picsum.photos/200/300?random=1',
     id: 1,
     first_name: "Sophronia",
     last_name: "Stoddart",
     email: "sstoddart0@howstuffworks.com",
     gender: "Female",
     ip_address: "80.215.124.45",
   },
   { 
     src: 'https://picsum.photos/200/300?random=2',
     id: 2,
     first_name: "Elie",
     last_name: "Ashenhurst",
     email: "eashenhurst1@ameblo.jp",
     gender: "Female",
     ip_address: "68.37.253.68",
   },
   { 
     src: 'https://picsum.photos/200/300?random=3',
     id: 3,
     first_name: "Elianore",
     last_name: "Eaddy",
     email: "eeaddy2@chronoengine.com",
     gender: "Female",
     ip_address: "67.148.137.105",
   },
   { 
     src: 'https://picsum.photos/200/300?random=4',
     id: 4,
     first_name: "Brittne",
     last_name: "Heditch",
     email: "bheditch3@businessweek.com",
     gender: "Female",
     ip_address: "100.224.120.91",
   },
   { 
     src: 'https://picsum.photos/200/300?random=5',
     id: 5,
     first_name: "Harman",
     last_name: "Mashal",
     email: "hmashal4@sakura.ne.jp",
     gender: "Male",
     ip_address: "135.116.148.60",
   },
   { 
     src: 'https://picsum.photos/200/300?random=6',
     id: 6,
     first_name: "Flore",
     last_name: "Zappel",
     email: "fzappel5@tripod.com",
     gender: "Female",
     ip_address: "78.191.118.28",
   },
   { 
     src: 'https://picsum.photos/200/300?random=7',
     id: 7,
     first_name: "Angelina",
     last_name: "Manneville",
     email: "amanneville6@lycos.com",
     gender: "Male",
     ip_address: "176.253.242.10",
   },
   { 
     src: 'https://picsum.photos/200/300?random=8',
     id: 8,
     first_name: "Merilyn",
     last_name: "Marusik",
     email: "mmarusik7@1und1.de",
     gender: "Female",
     ip_address: "221.137.214.47",
   },
   { 
     src: 'https://picsum.photos/200/300?random=9',
     id: 9,
     first_name: "Jeddy",
     last_name: "Brunn",
     email: "jbrunn8@umn.edu",
     gender: "Male",
     ip_address: "9.189.41.129",
   },
   { 
     src: 'https://picsum.photos/200/300?random=10',
     id: 10,
     first_name: "Kilian",
     last_name: "Chadderton",
     email: "kchadderton9@wix.com",
     gender: "Male",
     ip_address: "177.47.251.168",
   },
   { 
     src: 'https://picsum.photos/200/300?random=11',
     id: 11,
     first_name: "Kilian",
     last_name: "Chadderton",
     email: "kchadderton9@wix.com",
     gender: "Male",
     ip_address: "177.47.251.168",
   },
 ];


// 1-usul 

const userImg = document.getElementsByClassName("user__img");
const userFullName = document.getElementsByClassName("user__fullname");
const userLink = document.getElementsByClassName("user__email");
const userGender = document.getElementsByClassName("user__gender");
const userAdress = document.getElementsByClassName("user__address");


 let i;

 for(i = 0 ; i <= 11; i++){
    userImg[i].src = data[i].src;
    userFullName[i].textContent = [data[i].first_name + ' ' + data[i].last_name];
    userLink[i].textContent = data[i].email;
    userGender[i].textContent = data[i].gender;
    userAdress[i].textContent = data[i].ip_address;
 }

// 2-usul 

// const userImg = document.getElementsByClassName("user__img");
// const userFullName = document.getElementsByClassName("user__fullname");
// const userLink = document.getElementsByClassName("user__email");
// const userGender = document.getElementsByClassName("user__gender");
// const userAdress = document.getElementsByClassName("user__address");


// userImg[0].src = data[0].src;
// userFullName[0].textContent = [data[0].first_name + ' ' + data[0].last_name];
// userLink[0].textContent = data[0].email;
// userGender[0].textContent = data[0].gender;
// userAdress[0].textContent = data[0].ip_address;

// userImg[1].src = data[1].src;
// userFullName[1].textContent = [data[1].first_name + ' ' + data[1].last_name ];
// userLink[1].textContent = data[1].email;
// userGender[1].textContent = data[1].gender;
// userAdress[1].textContent = data[1].ip_address;

// userImg[2].src = data[2].src;
// userFullName[2].textContent = [data[2].first_name + ' ' + data[2].last_name ];
// userLink[2].textContent = data[2].email;
// userGender[2].textContent = data[2].gender;
// userAdress[2].textContent = data[2].ip_address;

// userImg[3].src = data[3].src;
// userFullName[3].textContent = [data[3].first_name + ' ' + data[3].last_name ];
// userLink[3].textContent = data[3].email;
// userGender[3].textContent = data[3].gender;
// userAdress[3].textContent = data[3].ip_address;

// userImg[4].src = data[4].src;
// userFullName[4].textContent = [data[4].first_name + ' ' + data[4].last_name ];
// userLink[4].textContent = data[4].email;
// userGender[4].textContent = data[4].gender;
// userAdress[4].textContent = data[4].ip_address;

// userImg[5].src = data[5].src;
// userFullName[5].textContent = [data[5].first_name + ' ' + data[5].last_name ];
// userLink[5].textContent = data[5].email;
// userGender[5].textContent = data[5].gender;
// userAdress[5].textContent = data[5].ip_address

// userImg[6].src = data[6].src;
// userFullName[6].textContent = [data[6].first_name + ' ' + data[6].last_name ];
// userLink[1].textContent = data[6].email;
// userGender[6].textContent = data[6].gender;
// userAdress[6].textContent = data[6].ip_address;

// userImg[7].src = data[7].src;
// userFullName[7].textContent = [data[7].first_name + ' ' + data[2].last_name ];
// userLink[7].textContent = data[7].email;
// userGender[7].textContent = data[7].gender;
// userAdress[7].textContent = data[7].ip_address;

// userImg[8].src = data[8].src;
// userFullName[8].textContent = [data[8].first_name + ' ' + data[8].last_name ];
// userLink[8].textContent = data[8].email;
// userGender[8].textContent = data[8].gender;
// userAdress[8].textContent = data[8].ip_address;

// userImg[9].src = data[9].src;
// userFullName[9].textContent = [data[9].first_name + ' ' + data[4].last_name ];
// userLink[9].textContent = data[9].email;
// userGender[9].textContent = data[9].gender;
// userAdress[9].textContent = data[9].ip_address;

// userImg[10].src = data[10].src;
// userFullName[10].textContent = [data[10].first_name + ' ' + data[10].last_name ];
// userLink[10].textContent = data[10].email;
// userGender[10].textContent = data[10].gender;
// userAdress[10].textContent = data[10].ip_address