const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

const uploadForm = document.getElementById("uploadForm");
const imageUpload = document.getElementById("imageUpload");

uploadForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const file = document.getElementById("imageUpload").files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Buat elemen img baru
      const newImg = document.createElement("img");
      newImg.src = e.target.result;
      newImg.classList.add("thumb");

      // Tambahkan gambar ke galeri
      document.getElementById("thumbnailContainer").appendChild(newImg);

      // Reset form
      imageUpload.value = "";
    };

    reader.readAsDataURL(file);
  }
});

let isProcessing = false;

container.addEventListener("click", function (e) {
  // Mencegah pemrosesan ganda
  if (isProcessing) return;
  isProcessing = true;

  // Cek apakah yang diklik adalah thumbnail
  if (e.target.classList.contains("thumb")) {
    // Setel gambar jumbo
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");

    // Tambahkan scroll ke gambar utama
    jumbo.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // Hapus kelas 'fade' setelah animasi selesai
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    // Reset kelas 'active' dari semua thumbnail
    thumbs.forEach(function (thumb) {
      thumb.classList.remove("active");
    });

    // Tambahkan kelas 'active' ke thumbnail yang diklik
    e.target.classList.add("active");
  }

  // Setelah pemrosesan selesai
  isProcessing = false;
});

// container.addEventListener("click", function (e) {
//   //cek apakah yg diklik adalah thumb
//   if ((e.target.className = "thumb")) {
//     jumbo.src = e.target.src;
//     jumbo.classList.add("fade");
//     // Tambahkan scroll ke gambar utama
//     jumbo.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//     setTimeout(function () {
//       jumbo.classList.remove("fade");
//     }, 500);

//     thumbs.forEach(function (thumb) {
//       // if(thumb.classList.contains('active') {
//       //     thumb.classList.remove('active');
//       // })
//       thumb.className = "thumb";
//     });

//     e.target.classList.add("active");
//   }
// });
