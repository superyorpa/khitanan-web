function openInvitation() {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {});
  const cover = document.getElementById("cover");
  const detail = document.getElementById("detail");
  const gallery = document.getElementById("gallery");

  cover.classList.add("fade-out");

  setTimeout(() => {
    cover.style.display = "none";

    detail.classList.remove("hidden");
    gallery.classList.remove("hidden");

    setTimeout(() => {
      detail.classList.remove("detail-init");
    }, 50);
  }, 500);
}

function toggleGift() {
  const box = document.getElementById("giftBox");
  box.classList.toggle("hidden");
}

function copyRek(text) {
  navigator.clipboard.writeText(text);

  showToast(`Nomor rekening ${text} berhasil disalin!`);
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.innerText = message;
  toast.classList.remove("hidden");

  toast.style.transform = "translate(-50%, 0)";
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%, 20px)";
  }, 2000);

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2500);
}

function openLocation() {
  document.getElementById("location").classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function closeLocation() {
  document.getElementById("location").classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

function closeWa() {
  const wa = document.getElementById("waButton");
  if (wa) {
    wa.style.display = "none";
  }
}
