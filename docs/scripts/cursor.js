class CadCursor {

    constructor () {
        this.cadCursorEl = document.getElementById('cadCursor');
        this.topEl = document.querySelectorAll('#cadCursor .top')[0];
        this.leftEl = document.querySelectorAll('#cadCursor .left')[0];
        this.pickerEl = document.querySelectorAll('#cadCursor .picker')[0];
        this.currentYear = document.getElementById('current-year');
        this.travellers = document.getElementById('travellers');
    }

    move (positionX, positionY) {
        this.topEl.style.transform = 'translateY(' + positionY + 'px)';
        this.leftEl.style.transform = 'translateX(' + positionX + 'px)';
        this.pickerEl.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';
        this.currentYear.style.left = (positionX+4) + "px";
        this.travellers.style.left = (positionX+4) + "px";
    }

}

const cadCursor = new CadCursor();

document.addEventListener('mousemove', (event) => {
   cadCursor.move(event.clientX, event.clientY);
});

