function toggleNav()
{
    document.getElementById('menu-nav').classList.toggle('active');
    document.getElementById('tray-void').classList.toggle('active');
    // document.getElementById('content').classList.toggle('wide');
}

function toggleBlackOut()
{
    document.getElementById('blackout').classList.toggle('disabled');
}

function toggleContentContainer()
{
    document.getElementById('content-data-container').classList.toggle('active');
}

function toggleRangeSlider()
{
    document.getElementById('timeline-rangeSlider').classList.toggle('disable');
}