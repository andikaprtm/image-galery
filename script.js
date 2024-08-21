const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

const uploadForm = document.getElementById("uploadForm");
const imageUpload = document.getElementById("imageUpload");

uploadForm.addEventListener("submt", function (e) {
  e.preventDefault();

  const file = imageUpload.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Buat elemen img baru
      const newImg = document.createElement("img");
      newImg.src = e.target.result;
      newImg.classList.add("thumb");

      // Tambahkan gambar ke galeri
      thumbnailContainer.appendChild(newImg);
      updateThumbnails();

      // Reset form
      imageUpload.value = "";
    };

    reader.readAsDataURL(file);
  }
});

container.addEventListener("click", function (e) {
  //cek apakah yg diklik adalah thumb
  if ((e.target.className = "thumb")) {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    // Tambahkan scroll ke gambar utama
    jumbo.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      // if(thumb.classList.contains('active') {
      //     thumb.classList.remove('active');
      // })
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
