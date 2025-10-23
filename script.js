document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    yesBtn.addEventListener('click', () => {
        // Redirect to the "I miss you too" page
        window.location.href = 'yes.html';
    });

    noBtn.addEventListener('click', () => {
        // Redirect to the "Are you sure?" page
        window.location.href = 'no.html';
    });
});