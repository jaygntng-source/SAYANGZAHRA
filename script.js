let currentPage = 0;
const totalPages = 10; // total 0 sampai 9

function showPage(index) {
    // validasi batas halaman
    if (index < 0 || index >= totalPages) return;

    // sembunyikan halaman aktif sebelumnya
    document.querySelector('.page.active').classList.remove('active');
    
    // tampilkan halaman baru
    const nextPage = document.getElementById(`page-${index}`);
    nextPage.classList.add('active');
    currentPage = index;
}

function nextPage() {
    showPage(currentPage + 1);
}

function prevPage() {
    showPage(currentPage - 1);
}

function restartBook() {
    showPage(0);
}

// pengaturan pemutar musik otomatis interaktif
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play().catch(error => console.log("pemicu interaksi audio aktif:", error));
        musicBtn.innerText = "⏸️ pause music";
    } else {
        music.pause();
        musicBtn.innerText = "🎵 play music";
    }
});