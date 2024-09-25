// ----Header stky
window.addEventListener("scroll", function () {
  const header = this.document.getElementById("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
  header.classList.add("bg-red");
});
//------DonationBtn funcation

const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const donationMainDiv = document.getElementById("donation-main-div");
const historyDiv = document.getElementById("history-div");
donationBtn.addEventListener("click", function () {
  historyBtn.classList.remove("bg-btn");
  donationBtn.classList.add("bg-btn");
  donationMainDiv.classList.remove("hidden");
  historyDiv.classList.add("hidden");
});

//------HistoryBtn funcation

historyBtn.addEventListener("click", function () {
  historyBtn.classList.add("bg-btn");
  donationBtn.classList.remove("bg-btn");
  historyDiv.classList.remove("hidden");
  donationMainDiv.classList.add("hidden");
});

const bolg = document.getElementById("blog");
bolg.addEventListener("click", function () {
  window.location.href = "./faq.html";
});

const donatBtn = document.getElementById("donat-btn");

// ---value function

function inputValu(id) {
  return Number(document.getElementById(id).value);
}

function innerText(id) {
  return Number(document.getElementById(id).innerText);
}

// -----card 1
function donateButtonOne(e) {
  const myBalanc = innerText("my-balanc");
  const donateAmount = inputValu("donate-input");

  const donetShow = innerText("main-donate");

  // --if conditaion add

  if (
    donateAmount <= 0 ||
    Number.isNaN(donateAmount) ||
    myBalanc < donateAmount
  ) {
    alert(" Yor are rang");
    return;
  } else {
    const modal = document.getElementById("my-modal");
    modal.showModal();

    const addDonate = donetShow + donateAmount;
    const outDonate = myBalanc - donateAmount;
    document.getElementById("my-balanc").innerText = outDonate;
    document.getElementById("main-donate").innerText = addDonate;

    addHistory(donateAmount);
  }

  // -----

  // -----Modal add
}

// ------------card 2
function donateButtonTwo(e) {
  const myBalanc = innerText("my-balanc");

  const donateTwoAmount = inputValu("donate-input-two");

  const donetTwoShow = innerText("main-donate-two");

  // --if conditaion add
  if (
    donateTwoAmount <= 0 ||
    isNaN(donateTwoAmount) ||
    myBalanc < donateTwoAmount
  ) {
    alert(" Yor are rang");
    return;
  } else {
    const modal = document.getElementById("my-modal");
    modal.showModal();
    // -----
    const addTwoDonate = donetTwoShow + donateTwoAmount;
    const outTwoDonate = myBalanc - donateTwoAmount;
    document.getElementById("my-balanc").innerText = outTwoDonate;
    document.getElementById("main-donate-two").innerText = addTwoDonate;
    // --

    addHistory(donateTwoAmount);
  }

  // -----

  // -----Modal add
}
// ----card -3
function donateButtonThree(e) {
  const myBalanc = innerText("my-balanc");

  const donateTwoAmount = inputValu("donate-input-three");

  const donetTwoShow = innerText("main-donate-three");

  // --if conditaion add
  if (
    donateTwoAmount <= 0 ||
    Number.isNaN(donateTwoAmount) ||
    myBalanc < donateTwoAmount
  ) {
    alert(" Yor are rang");
    return;
  } else {
    const modal = document.getElementById("my-modal");
    modal.showModal();
    // -----
    const addTwoDonate = donetTwoShow + donateTwoAmount;
    const outTwoDonate = myBalanc - donateTwoAmount;
    document.getElementById("my-balanc").innerText = outTwoDonate;
    document.getElementById("main-donate-three").innerText = addTwoDonate;
    // --

    addHistory(donateTwoAmount);
  }
  // -----Modal add
}

// ---History active
function addHistory(donateAmount) {
  const historyDiv = document.createElement("div");
  historyDiv.className = "px-4 py-8 border-2 rounded-lg my-5 shadow-sm";
  historyDiv.innerHTML = `
    <span class="font-bold"> ${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</span>
    <br />
    <p> Date : ${new Date()} </p>
    `;
  const historyShow = document.getElementById("history-div");
  historyShow.appendChild(historyDiv);
}

document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "./accordien.html";
});
