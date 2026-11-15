
// MENU NAVIGASI HP
const sitinurdianti_menu_toggle = document.getElementById("sitinurdianti_menu_toggle");
const sitinurdianti_navbar = document.getElementById("sitinurdianti_navbar");

sitinurdianti_menu_toggle.addEventListener("click", function () {
    sitinurdianti_navbar.classList.toggle("sitinurdianti_navbar_active");
});

// MENU MENUTUP OTOMATIS SETELAH DIKLIK
const sitinurdianti_nav_links = document.querySelectorAll("#sitinurdianti_navbar a");

sitinurdianti_nav_links.forEach(function (link) {
    link.addEventListener("click", function () {
        sitinurdianti_navbar.classList.remove("sitinurdianti_navbar_active");
    });
});

// TANGGAL BOOKING TIDAK BOLEH MEMILIH TANGGAL YANG SUDAH LEWAT
const sitinurdianti_tanggal = document.getElementById("sitinurdianti_tanggal");
const sitinurdianti_hari_ini = new Date();

const sitinurdianti_tahun = sitinurdianti_hari_ini.getFullYear();
const sitinurdianti_bulan = String(sitinurdianti_hari_ini.getMonth() + 1).padStart(2, "0");
const sitinurdianti_hari = String(sitinurdianti_hari_ini.getDate()).padStart(2, "0");

sitinurdianti_tanggal.min = `${sitinurdianti_tahun}-${sitinurdianti_bulan}-${sitinurdianti_hari}`;

// FORM BOOKING KE WHATSAPP
const sitinurdianti_booking_form = document.getElementById("sitinurdianti_booking_form");

sitinurdianti_booking_form.addEventListener("submit", function (event) {
    event.preventDefault();

    const sitinurdianti_nama = document.getElementById("sitinurdianti_nama").value.trim();
    const sitinurdianti_telepon = document.getElementById("sitinurdianti_telepon").value.trim();
    const sitinurdianti_layanan = document.getElementById("sitinurdianti_layanan").value;
    const sitinurdianti_tanggal_acara = document.getElementById("sitinurdianti_tanggal").value;
    const sitinurdianti_lokasi = document.getElementById("sitinurdianti_lokasi").value.trim();
    const sitinurdianti_pesan = document.getElementById("sitinurdianti_pesan_booking").value.trim();

    const sitinurdianti_tanggal_format = new Date(
        sitinurdianti_tanggal_acara + "T00:00:00"
    ).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const sitinurdianti_isi_pesan =
        `Halo HD.MOTO, saya ingin mengajukan booking jasa fotografi.%0A%0A` +
        `Nama: ${encodeURIComponent(sitinurdianti_nama)}%0A` +
        `Nomor WhatsApp: ${encodeURIComponent(sitinurdianti_telepon)}%0A` +
        `Layanan: ${encodeURIComponent(sitinurdianti_layanan)}%0A` +
        `Tanggal Acara: ${encodeURIComponent(sitinurdianti_tanggal_format)}%0A` +
        `Lokasi: ${encodeURIComponent(sitinurdianti_lokasi)}%0A` +
        `Pesan Tambahan: ${encodeURIComponent(sitinurdianti_pesan || "-")}%0A%0A` +
        `Mohon informasi ketersediaan jadwal dan detail pemesanannya. Terima kasih.`;

    const sitinurdianti_nomor_wa = "6283161679062";
    const sitinurdianti_link_wa =
        `https://wa.me/${sitinurdianti_nomor_wa}?text=${sitinurdianti_isi_pesan}`;

    window.open(sitinurdianti_link_wa, "_blank");
});

// FORM KONTAK KE WHATSAPP
const sitinurdianti_contact_form = document.getElementById("sitinurdianti_contact_form");

sitinurdianti_contact_form.addEventListener("submit", function (event) {
    event.preventDefault();

    const sitinurdianti_contact_name =
        document.getElementById("sitinurdianti_contact_name").value.trim();

    const sitinurdianti_contact_email =
        document.getElementById("sitinurdianti_contact_email").value.trim();

    const sitinurdianti_contact_message =
        document.getElementById("sitinurdianti_contact_message").value.trim();

    const sitinurdianti_contact_text =
        `Halo HD.MOTO, saya ingin bertanya.%0A%0A` +
        `Nama: ${encodeURIComponent(sitinurdianti_contact_name)}%0A` +
        `Email: ${encodeURIComponent(sitinurdianti_contact_email)}%0A` +
        `Pesan: ${encodeURIComponent(sitinurdianti_contact_message)}`;

    const sitinurdianti_contact_wa = "6283161679062";

    window.open(
        `https://wa.me/${sitinurdianti_contact_wa}?text=${sitinurdianti_contact_text}`,
        "_blank"
    );
});

// FOTO OTOMATIS MENAMPILKAN PLACEHOLDER JIKA FILE BELUM ADA
const sitinurdianti_semua_foto = document.querySelectorAll("img");

sitinurdianti_semua_foto.forEach(function (foto) {
    foto.addEventListener("error", function () {
        foto.style.display = "none";
    });
});
