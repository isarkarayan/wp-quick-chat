// Country data with codes and flags
const countries = [
    { code: '+91', name: 'India', flag: 'in' },
    { code: '+1', name: 'United States', flag: 'us' },
    { code: '+44', name: 'United Kingdom', flag: 'gb' },
    { code: '+61', name: 'Australia', flag: 'au' },
    { code: '+86', name: 'China', flag: 'cn' },
    { code: '+81', name: 'Japan', flag: 'jp' },
    { code: '+49', name: 'Germany', flag: 'de' },
    { code: '+33', name: 'France', flag: 'fr' },
    { code: '+7', name: 'Russia', flag: 'ru' },
    { code: '+55', name: 'Brazil', flag: 'br' }
];

// DOM Elements
const selectedCountry = document.getElementById('selectedCountry');
const selectedFlag = document.getElementById('selectedFlag');
const selectedCode = document.getElementById('selectedCode');
const countryList = document.getElementById('countryList');
const phoneNumber = document.getElementById('phoneNumber');
const redirectButton = document.getElementById('redirectButton');

// Populate country list
countries.forEach(country => {
    const countryItem = document.createElement('div');
    countryItem.className = 'country-item';
    countryItem.innerHTML = `
        <img src="https://flagcdn.com/w20/${country.flag}.png" alt="${country.name}">
        <span>${country.code}</span>
        <span>${country.name}</span>
    `;
    countryItem.addEventListener('click', () => {
        selectedFlag.src = `https://flagcdn.com/w20/${country.flag}.png`;
        selectedFlag.alt = country.name;
        selectedCode.textContent = country.code;
        countryList.classList.remove('show');
    });
    countryList.appendChild(countryItem);
});

// Toggle country list
selectedCountry.addEventListener('click', () => {
    countryList.classList.toggle('show');
});

// Close country list when clicking outside
document.addEventListener('click', (e) => {
    if (!selectedCountry.contains(e.target)) {
        countryList.classList.remove('show');
    }
});

// Handle WhatsApp redirect
redirectButton.addEventListener('click', () => {
    const number = phoneNumber.value.replace(/\D/g, '');
    if (number) {
        const countryCode = selectedCode.textContent.replace('+', '');
        const whatsappUrl = `https://wa.me/${countryCode}${number}`;
        window.open(whatsappUrl, '_blank');
    } else {
        alert('Please enter a valid phone number');
    }
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();