// =================== sidebar section ==================

const sidebar = document.getElementById('sidebar');
const bars = document.getElementById('bars');
bars.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    bars.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});