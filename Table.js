function sortTable(n, evt) {
    var table = document.querySelector('table'),
    thead = document.querySelector('thead'),
    tbody = document.querySelector('tbody'),
    bRows = [...tbody.rows];
    tbody.innerHTML = '',
    hData = [...thead.querySelectorAll('th')],
    desc = false;

    hData.map ((head) =>{
        if ( head != evt) {
            head.classList.remove('asc', 'desc');

        }
    });

    desc = evt.classList.contains ('asc') ? true : false;
    evt.classList[desc ? 'remove' : 'add']('asc');
    evt.classList[desc ? 'add' : 'remove']('desc');

    bRows.sort((a, b) =>{
        let x = a.getElementsByTagName('td')[n].innerHTML,
            y = b.getElementsByTagName('td')[n].innerHTML
        return desc ? (x < y ? 1 : -1) : (x < y ? -1 : 1);
    });
    bRows.map ((bRow) => {
        tbody.appendChild(bRow);
    })  

}

//  Deleting Row

function delRow($this) {
     var table = document.querySelector('table'),
        tbody = document.querySelector('tbody'),
        index = [...tbody.children].indexOf($this.parentElement.parentElement);
        $this.parentElement.parentElement.classList.add('remove');
    
    tbody.deleteRow(index);
    
}
