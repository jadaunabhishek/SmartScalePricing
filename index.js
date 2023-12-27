document.addEventListener('DOMContentLoaded', function () {
    const currencySelector = document.getElementById('currency');
    const tiers = document.querySelectorAll('.pricetag');

    currencySelector.addEventListener('change', function () {
        const selectedCurrency = this.value;
        updatePrices(selectedCurrency);
    });

    // Initial currency update
    const initialCurrency = currencySelector.value;
    updatePrices(initialCurrency);
});

// Initial Prices for Premium Tier
const premiumPriceInAllCurrency = {
    priceinr: 599,
    priceusd: 7.20,
    priceeur: 6.54
};

// Initial Prices for Premium Plus Tier
const premiumPlusPriceInAllCurrency = {
    priceinr: 999,
    priceusd: 12.01,
    priceeur: 10.90
};

// Function to update prices based on selected currency
function updatePrices(currency) {
    const tiers = document.querySelectorAll('.pricetag');

    for (let i = 0; i < tiers.length; i++) {
        const tier = tiers[i];
        const amountElement = tier.querySelector('.amount');
        const convertedPriceElement = tier.querySelector('.converted-price');

        let price;

        if (tier.classList.contains('premium')) {
            price = premiumPriceInAllCurrency[`price${currency.toLowerCase()}`];
        } else if (tier.classList.contains('premium-live')) {
            price = premiumPlusPriceInAllCurrency[`price${currency.toLowerCase()}`];
        }

        amountElement.textContent = price;
        convertedPriceElement.textContent = ` (${currency.toUpperCase()})`;
    }
}
