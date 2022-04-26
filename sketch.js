let url ="https://api.openweathermap.org/data/2.5/weather?q=WAY HUWI&appid=6690fa214e4146088bb8f1946c21cfad&units=metric" //API
let url1 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRA-XDZ2nZIqnbImye-wYGEwanKR2nIp10rvu0-G0gi3gvR0sD2JrV_q1AJVFvA0m-toGS4j70ZFDph/pub?output=csv" //umur
let url2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRe3saRSYjV7C_G2UTaZgsI2_JPKDZkEoVyyobcU51nyyFPiXVdHKRy3Pdd7VNQ4IjrkV_XkWez0--U/pub?output=csv" //Pekerjaan
let url3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlfVsEcUt6HuA-fUqeOoLZg2sSB3Uu6c1urFI_K0IItbPKNEhTzVkS5qex8QCWk0zvZoZBFPGLRDWS/pub?output=csv" //Pendidikan
let url4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSutdAXlW-TaZFhh3bpkgtMbuUBSK7Dq7j6Ms_YeRmArKOiMTfP3i_gJpIR4jPJ0-RjUoOuMqKyTwMN/pub?output=csv" //Jeniskelamin
let url5 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4oFsx9m9KadAlEHZaKyzT8vMIE10sz4Vz_If-Qv2gtNSZP0TQRYRxr0_JxEL08Gpa4T-F_7UcNIxN/pub?output=csv" //Agama
let dataAPI;
let diagramUmur;
let diagramPekerjaan;
let diagramPendidikan;
let diagramJeniskelamin;
let diagramAgama ;
let bagan;
let profil;
let itera;
let f1;
let f2;
let lamsel;
let mtk;

function preload(){
  dataAPI = loadJSON(url);
  diagramUmur = loadTable(url1, 'csv', 'header');
  diagramPekerjaan = loadTable(url2, 'csv', 'header');
  diagramPendidikan = loadTable(url3, 'csv', 'header');
  diagramJeniskelamin = loadTable(url4, 'csv', 'header');
  diagramAgama = loadTable(url5, 'csv', 'header');
  f1 = loadFont('f1.otf');
  f2 = loadFont('f2.otf');
  bagan = loadImage('Bagan.jpg');
  profil = loadImage('Profil.jpg');
  lamsel =loadImage('lamsel.png');
  itera =loadImage('ITERA.png');
  mtk = loadImage('mtk.png')

}

function API(a, b, data){
  fill('black')
  noStroke()
  textFont(f1)
  textSize (35)
  text ('"Informasi Cuaca"',25,520)
  textFont(f2)
  textSize (20)
  text(data.name,30,580)
  textSize(30)
  text(data.main.temp +" °c",30,610);
  textSize(20)
  text('Weather',30,650)
  textSize (30)
  text(data.weather [0].main,30,680)
  textSize(20)
  text('Wind Speed',30,720)
  textSize (30)
  text(data.wind.speed +" km/h ",30 ,750)
  textSize(20)
  text('Humidity',30,790)
  textSize (30)
  text (data.main.humidity + " % ",30,820)
}

function setup() {
  createCanvas(1600,4950);
  let div = createDiv();
  div.id('maps')
  div.style('height', '400px');
  div.style('width', '400px');
  div.position(1110, 3000);  
}
let penduduk2021 = [1765, 2366, 1806, 818,1606, 2384, 820] //per dusun
function draw() {
  background('	255,255,255,100')
  
  let dusun = ['Dusun 1','Dusun 2','Dusun 3','Dusun 4','Dusun 5','Dusun 6','Dusun 7' ]
  var warna = ['#000080','	#008080','	#800080','	#008000','#808000','	#800000','	#808080']
  var maxBar = max(penduduk2021);
  var w = 60
  for (var i = 0; i < penduduk2021.length; i++) {
    fill(warna[i])
    var dat = map(penduduk2021[i], 0, maxBar, 0, 200)
    rect(i*w,4800 - dat, w, dat)
    textFont(f2)
    textSize(15)
    fill('black')
    text(penduduk2021[i],i*w, 4795-dat)
    text(dusun[i],i*w,4820)
  }

  textAlign(LEFT);
  textFont(f1)
  textSize(20)
  text('Diagram Kependudukan tahun 2021',0,4540)
  textFont(f2)
  text('Berdasarkan diagram batang kependudukan tahun 2021 disamping, desa Way Huwi Kecamatan Jati Agung ',440,4710)
  text('terdiri dari 7 dusun, dusun penduduk terbanyak yaitu dusun 6 dengan jumlah 2384 jiwa, Sedangkan dusun paling',440,4740)
  text('sedikit penduduknya yaitu dusun 4 dengan jumlah 818 jiwa. Dusun lainya yaitu dusun 1 berjumlah 1765 jiwa,',440,4770)
  text('dusun 2 berjumlah 2366 jiwa, dusun 3 berjumlah 1806 jiwa, dusun 5 berjumlah 1606 jiwa, dan dusun 7 berjumlah 820 jiwa.',440,4800)
  noStroke()
  fill(0,0,0,200);
  rect(0,0,1600,850);
  fill("brown");
  rect(0, 0, 400, 850)
  image(lamsel,50,100,300,300);
  image(itera,20,25,50,50);
  image(mtk,330,25,50,50);
  
  sudut1 = diagramUmur.getColumn('umur')
  diagram1(200, sudut1);
  sudut2 = diagramPekerjaan.getColumn('pekerjaan')
  diagram2(200, sudut2);
  sudut3 = diagramPendidikan.getColumn('pendidikan')
  diagram3(200, sudut3);
  sudut4 = diagramJeniskelamin.getColumn('jeniskelamin')
  diagram4(200, sudut4);
  sudut5 = diagramAgama.getColumn('agama')
  diagram5(200, sudut5);


  fill('black');
  textFont(f1);
  textSize(35);
  text("Dashboard",90,60);
  API (0, 0, dataAPI, 500/20)
  fill("red");
  noStroke();
  textSize(30);
  var currentYear = year();
  var currentMonth = month();
  var currentDay = day();
  var currentHour = hour();
  var currentMinute = minute();
  var currentSecond = second();
  var currentDate = currentDay + '/' + nf(currentMonth, 2) + '/' + nf(currentYear, 2);
  var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);
  text(currentDate, 955, 470);//tanggal
  textSize(70);
  text(currentTime, 900,430);//waktu


  textSize(20)
  textFont(f1)
  fill('black')
  text("A. Profil atau Deskripsi Desa Way Huwi",0,955)
  image(profil,0,985,370,270);
  textFont(f2)
  text("Desa Way Huwi merupakan lokasi yang cukup strategis dilalui jalan kolektor primer dan merupakan jalur perlintasan",440,1005)
  text("menuju Kota Metro dan Kabupaten Lampung Timur. Luas wilayah Desa Way Huwi berdasarkan Kecamatan Jati Agung",440,1035)
  text("dalam Angka tahun 2021 sebesar 493 Ha dengan jumlah 10 dusun dan 40 jumlah Rukun Tetangga (RT).", 440, 1065)
  text("Jumlah penduduk sebanyak 16.853 jiwa dengan kepadatan 2.861,05 jiwa/km2 dan jumlah rumah tangga, yaitu 4.078.",440,1095)
  text("Secara administratif, Desa Way Huwi terletak di antara : ",440,1125)
  text("a. Sebelah utara : Desa Jati Mulyo, Kecamatan Jati Agung ",440,1155)
  text("b. Sebelah selatan : Desa Harapan Jaya, Kecamatan Sukarame  ",440,1185)
  text("c. Sebelah barat : Desa Way Kandis, Kecamatan Tanjung Senang  ",440,1215)
  text("d. Sebelah timur : Desa Jati Sari, Kecamatan Jati Agung ",440,1245)
  
  textFont(f1)
  text("B. Struktur Perangkat Desa Way Huwi",0,1310)
  image(bagan,0,1340,1290,600)
  text("C. Diagram Kependudukan Desa Way Huwi",0,2000)
  text ("D. Peta Desa WAY HUWI",0,4880)
}

function diagram1(diameter, diagramUmur) {
  var warna = ['#8B008B','#9400D3','#9932CC ','	#BA55D3','	#800080 ', '#D8BFD8','	#EE82EE','#FF00FF']
  let lastAngle = 0; 
  for (var i = 0; i < diagramUmur.length; i++) {
    fill(warna[i])
    arc( 185,2175,diameter,diameter,lastAngle,lastAngle + radians(sudut1[i]));
    lastAngle += radians(sudut1[i]);
  }
  textAlign(LEFT);
  fill(192,192,192,100)
  rect(0,2025,370,470)
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Umur",100,2050)
  textFont(f2)
  text("0 - 5 tahun  = 685",10,2315)
  text("6 - 12 tahun  = 1054",10,2340)
  text("13 - 16 tahun  = 608",10,2365)
  text("16 - 19 tahun  = 602",10,2390)
  text("20 - 24 tahun  = 758",10,2415)
  text("25 - 45 tahun  = 2839",10,2440)
  text("46 - 60 tahun  = 1467",10,2465)
  text("60 tahun ke atas  = 505",10,2490)
  fill(warna[0]) ;
  rect(300,2305,20,10);
  fill(warna[1]) ;
  rect(300,2330,20,10);
  fill(warna[2]) ;
  rect(300,2355,20,10);
  fill(warna[3]) ;
  rect(300,2380,20,10);
  fill(warna[4]) ;
  rect(300,2405,20,10);
  fill(warna[5]) ;
  rect(300,2430,20,10);
  fill(warna[6]) ;
  rect(300,2455,20,10);
  fill(warna[7]) ;
  rect(300,2480,20,10); 
  
  fill(0)
  text('Berdasarkan diagram umur disamping, desa Way Huwi Kecamatan Jati Agung memiliki',440,2175)
  text("angka data umur paling tinggi di usia 25-45 tahun yaitu sebanyak 2839 jiwa.",440,2205)
  text("Sedangkan usia yang memiliki jumlah penduduk paling rendah yaitu kisaran usia 60 tahun",440,2235)
  text("ke atas sebanyak 505 jiwa. Sedangkan di usia 0-5 tahun sebanyak 685 jiwa, usia 6-12 tahun",440,2265)
  text("sebanyak 1054 jiwa, 13-16 tahun sebanyak 608 jiwa, 16-19 tahun sebanyak 602 jiwa,",440,2295)
  text('20-24 tahun sebanyak 758 jiwa, 46-60 tahun sebanyak 1467 jiwa.',440,2325)
}

function diagram2(diameter, diagramPekerjaan) {
  var warna = ['#228B22','#00FF00','	#32CD32 ','	#90EE90','#98FB98 ', '#8FBC8F','#00FA9A','	#00FF7F']
  let lastAngle = 0; 
  for (var i = 0; i < diagramPekerjaan.length; i++) {
    fill(warna[i])
    arc(185,2675,diameter,diameter,lastAngle,lastAngle + radians(sudut2[i]));
    lastAngle += radians(sudut2[i]);
  }
  fill(192,192,192,100)
  rect(0,2525,370,470)
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Pekerjaan",60,2550)
  textFont(f2)
  text("Pns  = 408",10,2815)
  text("Tni  = 35",10,2840)
  text("Polri  = 55",10,2865)
  text("Honorer  = 112",10,2890)
  text("Karyawan Swasta  = 593",10,2915)
  text("Pengusaha  = 97",10,2940)
  text("Petani  = 164",10,2965)
  text("Pengangguran  = 817",10,2990)
  fill(warna[0]);
  rect(300,2805,20,10);
  fill(warna[1]);
  rect(300,2830,20,10);
  fill(warna[2]);
  rect(300,2855,20,10);
  fill(warna[3]);
  rect(300,2880,20,10);
  fill(warna[4]);
  rect(300,2905,20,10);
  fill(warna[5]);
  rect(300,2930,20,10);
  fill(warna[5]);
  rect(300,2955,20,10);
  fill(warna[6]);
  rect(300,2980,20,10);
  
  fill(0)
  text('Berdasarkan diagram pekerjaan disamping, desa Way Huwi Kecamatan Jati Agung memiliki',440,2675)
  text("angka paling tinggi pada diagram tersebut yaitu pengangguran sebanyak 817 jiwa. ",440,2705)
  text("Sedangkan penduduk yang lain bekerja sebagai PNS sebanyak 408 jiwa, TNI 35 jiwa, Polri 55 jiwa,",440,2735)
  text('Honorer 112 jiwa, Karyawan Swasta 593 jiwa, Pengusaha 97 jiwa, dan Petani 164 jiwa.',440,2765)

}

function diagram3(diameter, diagramPendidikan) {
  var warna = ['#C0C0C0','#808080','	#800000','	#808000','#008000 ', '	#800080','#008080','	#000080']
  let lastAngle = 0;
  for (var i = 0; i < diagramPendidikan.length; i++) {
    fill(warna[i])
    arc(185,3175,diameter,diameter,lastAngle,lastAngle + radians(sudut3[i]));
    lastAngle += radians(sudut3[i]);
  }
  fill(192,192,192,100)
  rect(0,3025,370,470)
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Pendidikan",60,3050)
  textFont(f2)
  text("Tidak Tamat SD  = 797",10,3320)
  text("Tamat SD  = 897",10,3345)
  text("Tamat SMP  = 1999",10,3370)
  text("Tamat SMA  = 334",10,3395)
  text("Tamat D3  = 487",10,3420)
  text("Tamat S1  = 55",10,3445)
  text("Tamat S2  = 553",10,3470)
  text("Tamat S3  = 1",10,3490)
  fill(warna[0]) ;
  rect(300,3305,20,10);
  fill(warna[1]) ;
  rect(300,3330,20,10);
  fill(warna[2]) ;
  rect(300,3355,20,10);
  fill(warna[3]) ;
  rect(300,3380,20,10);
  fill(warna[4]) ;
  rect(300,3405,20,10);
  fill(warna[5]) ;
  rect(300,3430,20,10);
  fill(warna[6]) ;
  rect(300,3455,20,10);
  fill(warna[7]) ;
  rect(300,3480,20,10);
  
  fill(0)
  text('Berdasarkan diagram pendidikan disamping, desa Way Huwi Kecamatan Jati Agung memiliki',440,3175)
  text("angka paling tinggi di tamat SMP yaitu sebanyak 1999 jiwa. Sedangkan penduduk yang",440,3205)
  text("lain tidak tamat SD sebanyak 797 jiwa, tamat SD 897 jiwa, tamat SMA 334 jiwa",440,3235)
  text('tamat D3 487 jiwa, tamat S1 55 jiwa, tamat S2 553 jiwa, dan tamat S3 1 jiwa.',440,3265)
  
}

function diagram4(diameter, diagramJeniskelamin) {
  var warna = ['#FF4500','#D2691E']
  let lastAngle = 0; 
  for (var i = 0; i < diagramJeniskelamin.length; i++) {
    fill(warna[i])
    arc(185,3675,diameter,diameter,lastAngle,lastAngle + radians(sudut4[i]));
    lastAngle += radians(sudut4[i]);
  }
  fill(192,192,192,100)
  rect(0,3525,370,470)
  fill('black')
  textSize(20)
  textFont(f1)
  text("Diagram Jenis Kelamin",50,3550)
  textFont(f2);
  text("Laki-Laki  = 8824",10,3965);
  text("Perempuan  = 8029",10,3990);
  fill(warna[0]) ;
  rect(300,3955,20,10);
  fill(warna[1]) ;
  rect(300,3980,20,10);
  
  fill(0)
  text('Berdasarkan diagram jenis kelamin disampiing, desa Way Huwi Kecamatan Jati Agung memiliki',440,3675)
  text("jumlah penduduk dengan jenis kelamin laki-laki lebih tinggi dibandingkan dengan ",440,3705)
  text('perempuan yaitu laki-laki sebanyak 8824 jiwa dan perempuan sebanyak 8029 jiwa.',440,3735)
}

function diagram5(diameter, diagramAgama) {
  var warna = ['#8A2BE2 ','#483D8B','	#6A5ACD ','	#7B68EE ', '	#9370DB'];
  let lastAngle = 0;
  for (var i = 0; i < diagramAgama.length; i++) {
    fill(warna[i])
    arc(185,4175,diameter,diameter,lastAngle,lastAngle + radians(sudut5[i]));
    lastAngle += radians(sudut5[i]);
  }
  fill(192,192,192,100)
  rect(0,4025,370,470)
  fill('black')
  textFont(f1)
  text("Diagram Agama",85,4050)
  textFont(f2)
  text("Islam  = 9177",10,4390)
  text("Kristen  = 305",10,4415)
  text("Khatolik  = 74",10,4440)
  text("Hindu  = 11",10,4465)
  text("Budha  = 10",10,4490)
  fill(warna[0]) ;
  rect(300,4380,20,10);
  fill(warna[1]);
  rect(300,4405,20,10);
  fill(warna[2]);
  rect(300,4430,20,10);
  fill(warna[3]) ;
  rect(300,4455,20,10);
  fill(warna[4]) ;
  rect(300,4480,20,10);
  
  fill(0)
  text('Berdasarkan diagram agama disamping, desa Way Huwi Kecamatan Jati Agung terdiri dari ',440,4175)
  text("berbagai macam agama, sebagian besar penduduknya beragama Islam yaitu sebanyak 9177 jiwa.",440,4205)
  text("Sedangkan penduduk yang lain yang menganut agama Kristen sebanyak 305 jiwa,",440,4235)
  text('Khatolik 74 jiwa, Hindu 11 jiwa, dan Budha 10 jiwa.',440,4265)
}
function mousePressed() {
  if (mouseX > 0 && mouseX < 1000 && mouseY > 0 && mouseY < 900) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
