document.getElementById('payment-form').addEventListener('submit', function(event) {

    event.preventDefault();
    const messageElement = document.getElementById('message');

    // Simulation of payment capture. Do NOT use this, I'm not supporting fraud.
    const name = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;


    if (name && cardNumber && expiryDate && cvv) {
    
        messageElement.textContent = 'Payment processed successfully! Thank you for your purchase.';
        messageElement.style.color = 'green';
        
        document.getElementById('payment-form').reset();

    } else {
        messageElement.textContent = 'Please fill in all fields.';
        messageElement.style.color = 'red';
    }
    
});
