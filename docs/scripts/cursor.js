class CadCursor {

    constructor () {
        this.cadCursorEl = document.getElementById('cadCursor');
        this.topEl = document.querySelectorAll('#cadCursor .top')[0];
        this.leftEl = document.querySelectorAll('#cadCursor .left')[0];
        this.pickerEl = document.querySelectorAll('#cadCursor .picker')[0];
    }

    move (positionX, positionY) {
        this.topEl.style.transform = 'translateY(' + positionY + 'px)';
        this.leftEl.style.transform = 'translateX(' + positionX + 'px)';
        this.pickerEl.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';
    }

}

const cadCursor = new CadCursor();

document.addEventListener('mousemove', (event) => {
   cadCursor.move(event.clientX, event.clientY);
});

