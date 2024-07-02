const intasend = new window.IntaSend({
    publicAPIKey: "ISPubKey_live_a9fbbbb9-38ce-4309-99cc-4866f10b5122",
    live: false // set to true when going live
});

const donationForm = document.getElementById('donationForm');
const amountInput = document.getElementById('amount');
const donateButton = document.querySelector('.intaSendPayButton');

amountInput.addEventListener('input', function() {
    const amountValue = amountInput.value;
    donateButton.setAttribute('data-amount', amountValue);
});

donationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = amountInput.value;
    if (amount && amount > 0) {
        intasend.pay({
            amount: amount,
            currency: "KES"
        })
        .on("COMPLETE", (results) => {
            console.log("Payment successful", results);
        })
        .on("FAILED", (results) => {
            console.log("Payment failed", results);
        })
        .on("IN-PROGRESS", (results) => {
            console.log("Payment in progress", results);
        });
    } else {
        console.log("Invalid amount entered.");
    }
});
