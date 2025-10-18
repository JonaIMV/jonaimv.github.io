   
function displayReview(element) {
    const reviewText = element.dataset.review;
    const reviewerName = element.dataset.name;
    const reviewDisplay = document.getElementById('review-display');

    if (!reviewDisplay) {
        console.error('El contenedor de revisión (review-display) no se encontró.');
        return;
    }

   
    reviewDisplay.classList.remove('animate');
    void reviewDisplay.offsetWidth; 
    reviewDisplay.classList.add('animate');
    reviewDisplay.querySelector('blockquote').textContent = `“${reviewText}”`;
    reviewDisplay.querySelector('.reviewer-name').textContent = `– ${reviewerName}`;
}
function initReviews() {
    const firstPortrait = document.querySelector('.client-portrait');
    if (firstPortrait) {
       
        displayReview(firstPortrait);
    }
}


export { displayReview, initReviews };