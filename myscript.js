function nextPage(currentPageId, nextPageId) {
    const currentPage = document.getElementById(currentPageId);
    const nextPage = document.getElementById(nextPageId);
    currentPage.classList.remove('active');
    nextPage.classList.add('active');
}
function previousPage(currentPageId, previousPageId) {
    const currentPage = document.getElementById(currentPageId);
    const previousPage = document.getElementById(previousPageId);
    currentPage.classList.remove('active');
    previousPage.classList.add('active');
}
function validateInput() {
    const input = document.getElementById("numberInput");
    const error = document.getElementById("error");
    const value = input.value;

    if (value.length === 12 && !isNaN(value)) {
        
        error.textContent = ""; 
    } else {
        error.textContent = "Please enter a valid Consumer Number.";
    }
}