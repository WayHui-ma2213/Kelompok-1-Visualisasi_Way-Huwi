let urlAPI ="https://api.openweathermap.org/data/2.5/weather?q=WAY HUWI&appid=6690fa214e4146088bb8f1946c21cfad&units=metric";
let urlUsia = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRA-XDZ2nZIqnbImye-wYGEwanKR2nIp10rvu0-G0gi3gvR0sD2JrV_q1AJVFvA0m-toGS4j70ZFDph/pub?output=csv"
let urlPekerjaan = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRe3saRSYjV7C_G2UTaZgsI2_JPKDZkEoVyyobcU51nyyFPiXVdHKRy3Pdd7VNQ4IjrkV_XkWez0--U/pub?output=csv"
let urlPendidikan = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlfVsEcUt6HuA-fUqeOoLZg2sSB3Uu6c1urFI_K0IItbPKNEhTzVkS5qex8QCWk0zvZoZBFPGLRDWS/pub?output=csv"
let urlJeniskelamin= "https://docs.google.com/spreadsheets/d/e/2PACX-1vSutdAXlW-TaZFhh3bpkgtMbuUBSK7Dq7j6Ms_YeRmArKOiMTfP3i_gJpIR4jPJ0-RjUoOuMqKyTwMN/pub?output=csv"
let urlAgama = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4oFsx9m9KadAlEHZaKyzT8vMIE10sz4Vz_If-Qv2gtNSZP0TQRYRxr0_JxEL08Gpa4T-F_7UcNIxN/pub?output=csv"
let dataAPI;
let dataUsia;
let dataPekerjaan;
let dataPendidikan;
let dataJeniskelamin;
let dataAgama ;
let bagan;
let bg;
let itera;
let f1;
let f2;
let logo;
let mtk;

function API(a, b, data, fontSize){
  textSize (fontSize);
  noStroke()
  textFont(f1)
  fill('black')
  textFont(f1)
  textSize (35)
  text ('"Informasi Cuaca"',25,550)
  text(data.name,30,610,textSize (20))
  text(data.main.temp +"°c",30,640,textSize(30));
  text('Cuaca',30,680,textSize(20))
  text(data.weather [0].main,30,710,textSize (30))
  text('Speed Angin',30,750,textSize(20))
  text(data.wind.speed +" km/h ",30 ,780, textSize (30))
  text('Lembab',30,820,textSize(20))
  text (data.main.humidity + " % ",30,850 ,textSize (30))
}

function preload(){
  dataAPI = loadJSON(urlAPI);
  dataUsia = loadTable(urlUsia, 'csv', 'header');
  dataPekerjaan = loadTable(urlPekerjaan, 'csv', 'header');
  dataPendidikan = loadTable(urlPendidikan, 'csv', 'header');
  dataJeniskelamin = loadTable(urlJeniskelamin, 'csv', 'header');
  dataAgama = loadTable(urlAgama, 'csv', 'header');
  f1 = loadFont('f1.otf');
  f2 = loadFont('f2.otf');
  bagan = loadImage('Bagan.jpg');
  bg = loadImage('Bg.jpeg');
  logo =loadImage('logo.png');
  itera =loadImage('ITERA.png');
  mtk = loadImage('mtk.png')

}

function setup() {
  createCanvas(1600,3100);
  let div = createDiv();
  div.id('maps')
  div.style('height', '400px');
  div.style('width', '400px');
  div.position(1110, 3000);  
}

function draw() {
  background('	255,255,255,100');
  noStroke()
  image(bg,0,0,1600,3100);
  fill(0,0,0,200);
  rect(0,0,1600,900);
  fill("brown");
  rect(0, 0, 400, 900)
  image(logo,50,100,300,300);
  image(itera,20,25,50,50);
  image(mtk,330,25,50,50);
  
  anglesusia = dataUsia.getColumn('x')
  pieChartusia(200, anglesusia);
  anglespek = dataPekerjaan.getColumn('x')
  pieChartpekerjaan(200, anglespek);
  anglespen = dataPendidikan.getColumn('x')
  pieChartpendidikan(200, anglespen);
  anglesjen = dataJeniskelamin.getColumn('x')
  pieChartjeniskelamin(200, anglesjen);
  anglesagama = dataAgama.getColumn('x')
  pieChartagama(200, anglesagama);

  fill('black');
  textFont(f1);
  textSize(35);
  text("Dashboard",90,60);
  API (0, 0, dataAPI, 500/20)
  textFont(f1)
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


  fill(192,192,192,100)
  rect(110,965,500,20)
  textSize(20)
  textFont(f1)
  fill('black')
  text("A. PROFIL ATAU DESKRIPSI DESA WAY HUWI",110,980)
  fill(192,192,192,100)
  rect(110,1015,1400,240)
  fill('black')
  textSize(20)
  textFont(f2)
  text("Desa Way Huwi merupakan lokasi yang cukup strategis dilalui jalan kolektor primer dan merupakan jalur perlintasan menuju",110,1035)
  text("Kota Metro dan Kabupaten Lampung Timur. Luas wilayah Desa Way Huwi berdasarkan Kecamatan Jati Agung dalam Angka tahun", 110, 1065)
  text("2021 sebesar 493 Ha dengan jumlah 10 dusun dan 40 jumlah Rukun Tetangga (RT). Jumlah penduduk sebanyak 16.853 jiwa dengan",110,1095)
  text("kepadatan 2.861,05 jiwa/km2 dan jumlah rumah tangga, yaitu 4.078. Secara administratif, Desa Way Huwi terletak di antara : ",110,1125)
  text("a. Sebelah utara : Desa Jati Mulyo, Kecamatan Jati Agung ",110,1155)
  text("b. Sebelah selatan : Desa Harapan Jaya, Kecamatan Sukarame  ",110,1185)
  text("c. Sebelah barat : Desa Way Kandis, Kecamatan Tanjung Senang  ",110,1215)
  text("d. Sebelah timur : Desa Jati Sari, Kecamatan Jati Agung ",110,1245)
  
  fill(192,192,192,100)
  rect(110,1295,500,20)
  fill('black')
  textFont(f1)
  text("B. Struktur Perangkat Desa Way Huwi",110,1310)
  image(bagan,110,1340,1400,600)
  
  fill(192,192,192,100)
  rect(110,1985,500,20)
  fill('black')
  textFont(f1)
  textSize(20)
  text("C. Data Kependudukan Desa Way Huwi",110,2000)
  
  fill(192,192,192,100)
  rect(110,3035,500,20)
  fill('black')
  textFont(f1)
  textSize (20)
  text ("D. Peta Desa WAY HUWI",110,3050)
}

function pieChartusia(diameter, dataUsia) {
  var color = ['#8B008B','#9400D3','#9932CC ','	#BA55D3','	#800080 ', '#D8BFD8','	#EE82EE','#FF00FF']
  let lastAngle = 0; 
  for (var i = 0; i < dataUsia.length; i++) {
    fill(color[i])
    arc( 275,2175,diameter,diameter,lastAngle,lastAngle + radians(anglesusia[i]));
    lastAngle += radians(anglesusia[i]);
  }
  fill(192,192,192,100)
  rect(100,2025,370,470)
  textSize(18)
  textFont(f1)
  fill('black')
  text("Data Grafik Umur",200,2050)
  textSize(20)
  textFont(f1)
  text("0-5 thn                                           = 408",110,2300)
  text("6-12 thn                                          = 35",110,2325)
  text("13-16 thn                                        = 55",110,2350)
  text("16-19 thn                                        = 112",110,2375)
  text("20-24 thn                                      = 593",110,2400)
  text("25-45 thn                                       = 97",110,2425)
  text("46-60 thn                                      = 164",110,2450)
  text("60 thn ke atas                            = 817",110,2475)
  fill(color[0]) ;
  rect(320,2295,20,10);
  fill(color[1]) ;
  rect(320,2320,20,10);
  fill(color[2]) ;
  rect(320,2345,20,10);
  fill(color[3]) ;
  rect(320,2370,20,10);
  fill(color[4]) ;
  rect(320,2395,20,10);
  fill(color[5]) ;
  rect(320,2420,20,10);
  fill(color[6]) ;
  rect(320,2445,20,10);
  fill(color[7]) ;
  rect(320,2470,20,10);  
}

function pieChartpekerjaan(diameter, dataPekerjaan) {
  var color = ['#228B22','#00FF00','	#32CD32 ','	#90EE90','#98FB98 ', '#8FBC8F','#00FA9A','	#00FF7F']
  let lastAngle = 0; 
  for (var i = 0; i < dataPekerjaan.length; i++) {
    fill(color[i])
    arc(720,2175,diameter,diameter,lastAngle,lastAngle + radians(anglespek[i]));
    lastAngle += radians(anglespek[i]);
  }
  fill(192,192,192,100)
  rect(545,2025,370,470)
  textSize(18)
  textFont(f1)
  fill('black')
  text("Data Pekerjaan",650,2050)
  textSize(20)
  textFont(f1)
  text("PNS                                           = 408",600,2300)
  text("TNI                                            = 35",600,2325)
  text("POLRI                                        = 55",600,2350)
  text("HONORER                               = 112",600,2375)
  text("Karyawan SWASTA          = 593",600,2400)
  text("PENGUSAHA                          = 97",600,2425)
  text("PETANI                                    = 164",600,2450)
  text("PENGANGGURAN                 = 817",600,2475)
  fill(color[0]);
  rect(830,2295,20,10);
  fill(color[1]);
  rect(830,2320,20,10);
  fill(color[2]);
  rect(830,2345,20,10);
  fill(color[3]);
  rect(830,2370,20,10);
  fill(color[4]);
  rect(830,2395,20,10);
  fill(color[5]);
  rect(830,2420,20,10);
  fill(color[5]);
  rect(830,2445,20,10);
  fill(color[6]);
  rect(830,2470,20,10);
}

function pieChartpendidikan(diameter, dataPendidikan) {
  var color = ['#C0C0C0','#808080','	#800000','	#808000','#008000 ', '	#800080','#008080','	#000080']
  let lastAngle = 0;
  for (var i = 0; i < dataPendidikan.length; i++) {
    fill(color[i])
    arc(1165,2175,diameter,diameter,lastAngle,lastAngle + radians(anglespen[i]));
    lastAngle += radians(anglespen[i]);
  }
  fill(192,192,192,100)
  rect(990,2025,370,470)
  textSize(18)
  textFont(f1)
  fill('black')
  text("Data Pendidikan",1090,2050)
  textSize(20)
  textFont(f1)
  text("Tidak Tamat SD               = 797",1000,2300)
  text("Tamat SD                            = 897",1000,2325)
  text("Tamat SMP                         = 1999",1000,2350)
  text("Tamat SMA                         = 334",1000,2375)
  text("Tamat D3                             = 487",1000,2400)
  text("Tamat S1                              = 55",1000,2425)
  text("Tamat S2                             = 553",1000,2450)
  text("Tamat S3                             = 1",1000,2475)
  fill(color[0]) ;
  rect(1200,2295,20,10);
  fill(color[1]) ;
  rect(1200,2320,20,10);
  fill(color[2]) ;
  rect(1200,2345,20,10);
  fill(color[3]) ;
  rect(1200,2370,20,10);
  fill(color[4]) ;
  rect(1200,2395,20,10);
  fill(color[5]) ;
  rect(1200,2420,20,10);
  fill(color[6]) ;
  rect(1200,2445,20),10;
  fill(color[7]) ;
  rect(1200,2470,20,10);
}

function pieChartjeniskelamin(diameter, dataJeniskelamin) {
  var color = ['#FF4500','#D2691E']
  let lastAngle = 0; 
  for (var i = 0; i < dataJeniskelamin.length; i++) {
    fill(color[i])
    arc(275,2675,diameter,diameter,lastAngle,lastAngle + radians(anglesjen[i]));
    lastAngle += radians(anglesjen[i]);
  }
  fill(192,192,192,100)
  rect(100,2503,370,470)
  fill('black')
  textSize(20)
  textFont(f1)
  text("Data Jenis Kelamin",180,2538)
  textFont(f1);
  text("Laki-Laki                   =   8824",140,2825);
  text("Perempuan              =   8029",140,2850);
  fill(color[0]) ;
  rect(300,2818,20,10);
  fill(color[1]) ;
  rect(300,2845,20,10);
}

function pieChartagama(diameter, dataAgama) {
  var color = ['#8A2BE2 ','#483D8B','	#6A5ACD ','	#7B68EE ', '	#9370DB'];
  let lastAngle = 0;
  for (var i = 0; i < dataAgama.length; i++) {
    fill(color[i])
    arc(720,2670,diameter,diameter,lastAngle,lastAngle + radians(anglesagama[i]));
    lastAngle += radians(anglesagama[i]);
  }
  fill(192,192,192,100)
  rect(545,2503,370,470)
  fill('black')
  textFont(f1)
  text("Data Agama",660,2538)
  textFont(f1)
  text("Islam                  = 4977",615,2800)
  text("Kristen             = 170",615,2825)
  text("Khatolik          = 36",615,2850)
  text("Hindu                 = 7",615,2875)
  text("Budha                = 6",615,2900)
  fill(color[0]) ;
  rect(730,2795,20,10);
  fill(color[1]);
  rect(730,2820,20,10);
  fill(color[2]);
  rect(730,2845,20,10);
  fill(color[3]) ;
  rect(730,2870,20,10);
  fill(color[4]) ;
  rect(730,2895,20,10);
}
