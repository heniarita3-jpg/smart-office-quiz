const soal = [
{
tanya:"Apa yang dimaksud dengan manajemen perkantoran?",
pilihan:[
"Mengelola seluruh kegiatan administrasi agar pekerjaan kantor berjalan efektif",
"Membuat produk di pabrik",
"Menjual barang kepada pelanggan",
"Mengelola mesin produksi"
],
benar:0
},
{
tanya:"Tujuan utama administrasi perkantoran adalah...",
pilihan:[
"Meningkatkan keuntungan penjualan",
"Membantu kelancaran pekerjaan dan pengelolaan informasi",
"Menghasilkan barang sebanyak-banyaknya",
"Membuat iklan perusahaan"
],
benar:1
},
{
tanya:"Kegiatan menyimpan dokumen agar mudah ditemukan kembali disebut...",
pilihan:[
"Produksi",
"Kearsipan",
"Distribusi",
"Promosi"
],
benar:1
},
{
tanya:"Surat yang digunakan untuk kepentingan instansi disebut...",
pilihan:[
"Surat pribadi",
"Surat dinas",
"Surat undangan ulang tahun",
"Surat cinta"
],
benar:1
},
{
tanya:"Salah satu sikap yang harus dimiliki tenaga administrasi adalah...",
pilihan:[
"Disiplin dan bertanggung jawab",
"Malas bekerja",
"Datang terlambat",
"Mengabaikan tugas"
],
benar:0
},
{
tanya:"Komunikasi yang baik di kantor bertujuan untuk...",
pilihan:[
"Menimbulkan konflik",
"Mempermudah penyampaian informasi",
"Menghambat pekerjaan",
"Membuat pekerjaan tertunda"
],
benar:1
},
{
tanya:"Berikut yang termasuk peralatan kantor adalah...",
pilihan:[
"Printer",
"Sepeda motor",
"Kompor",
"Mesin cuci"
],
benar:0
},
{
tanya:"Pelayanan prima kepada pelanggan berarti...",
pilihan:[
"Memberikan pelayanan terbaik dengan ramah dan profesional",
"Melayani dengan kasar",
"Mengabaikan pelanggan",
"Menunda pelayanan"
],
benar:0
},
{
tanya:"Dokumen penting sebaiknya disimpan di...",
pilihan:[
"Tempat penyimpanan arsip",
"Lantai kantor",
"Tempat sampah",
"Meja tamu"
],
benar:0
},
{
tanya:"Teknologi yang banyak digunakan dalam pekerjaan administrasi modern adalah...",
pilihan:[
"Komputer",
"Mesin jahit",
"Kompor gas",
"Mesin pemotong rumput"
],
benar:0
},
{tanya:'Komponen komputer yang berfungsi sebagai pusat pengolah data adalah...',pilihan:['Monitor','CPU','Keyboard','Printer'],benar:1},

{tanya:'Perangkat yang digunakan untuk menyimpan data secara permanen adalah...',pilihan:['RAM','Mouse','Harddisk','Speaker'],benar:2},

{tanya:'RAM pada komputer berfungsi untuk...',pilihan:['Menyimpan data sementara','Mencetak dokumen','Menampilkan gambar','Menghubungkan internet'],benar:0},

{tanya:'Program yang digunakan untuk membuat tabel dan perhitungan adalah...',pilihan:['Microsoft Excel','Microsoft Paint','Notepad','Media Player'],benar:0},

{tanya:'Internet adalah jaringan komputer yang bersifat...',pilihan:['Pribadi','Terbatas','Global','Offline'],benar:2},

{tanya:'Email digunakan untuk...',pilihan:['Mengirim surat elektronik','Mencetak dokumen','Mengedit gambar','Membuat video'],benar:0},

{tanya:'Keamanan data pada komputer dapat dilakukan dengan cara...',pilihan:['Membagikan password','Menggunakan antivirus','Menghapus semua file','Mematikan monitor'],benar:1},

{tanya:'Ekstensi file dokumen Microsoft Word biasanya adalah...',pilihan:['.jpg','.mp3','.docx','.exe'],benar:2},

{tanya:'Aplikasi yang digunakan untuk menjelajah internet disebut...',pilihan:['Browser','Printer','Scanner','Compiler'],benar:0},

{tanya:'Sikap yang baik saat bekerja menggunakan komputer adalah...',pilihan:['Menjaga perangkat dan mengikuti aturan kerja','Membuka semua file sembarangan','Mematikan komputer paksa','Menghapus data orang lain'],benar:0}
];
let no=0,nilai=0;
const huruf=['A','B','C','D'];
const pembuka=document.getElementById('pembuka');
const halaman=document.getElementById('halamanKuis');
const mulai=document.getElementById('mulai');
const ulang=document.getElementById('ulang');
const btns=document.querySelectorAll('#jawaban button');
mulai.onclick=()=>{pembuka.style.display='none';halaman.style.display='block';tampil();};
function tampil(){
document.getElementById('nomor-soal').textContent =
`📖 Soal ${no+1} dari ${soal.length}`;
document.getElementById('nilai').textContent =
`⭐ Nilai : ${nilai}`;
let persen = ((no + 1) / soal.length) * 100;
document.getElementById("progressBar").style.width = persen + "%";
document.getElementById('soal').textContent=soal[no].tanya;
btns.forEach((b,i)=>{b.textContent=`${huruf[i]}. ${soal[no].pilihan[i]}`;b.onclick=()=>pilih(i);});
}
function pilih(i){
if(i===soal[no].benar)nilai+=25;
no++;
if(no<soal.length)tampil();
else{
document.getElementById('soal').innerHTML=`<h2>Kuis Selesai</h2><p>Nilai akhir: ${nilai}</p>`;
document.getElementById('jawaban').style.display='none';
document.getElementById('nomor-soal').style.display='none';
document.getElementById('nilai').textContent=`Nilai: ${nilai}`;
ulang.style.display='block';
}}
ulang.onclick=()=>location.reload();