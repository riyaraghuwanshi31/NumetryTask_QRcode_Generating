document.getElementById('generateBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ""; 

    if (inputText.trim()) {
        new QRCode(qrcodeContainer, {
            text: inputText,
            width: 256,
            height: 256,
        });
    } else {
        alert('Please enter some text or a URL to generate a QR code.');
    }
});
