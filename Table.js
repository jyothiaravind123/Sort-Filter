// let count = document.querySelector("#flt-table > tbody > tr:nth-child(1) > td:nth-child(2)").innerHTML

// window.onload = () =>{
//     console.log(count);
// }

// getUniqueValue()

// let allfilters = document.querySelectorAll(".table-filter")
// let col_index  = filter_i.parentElement.getAttribute("col-index")
// let rows = document.querySelectorAll("#flt-table > tbody >tr")
// let cell_value = document.querySelector("td:nth-child("+col_index+")").innerHTML;

// console.log(cell_value)

// function getUniqueValue() {

//    var unique_col_values_dict = {}

//    allfilters = document.querySelectorAll(".table-filter")
//     allfilters.forEach((filter_i) =>{
//         col_index  = filter_i.parentElement.getAttribute("col-index")

//         const rows = document.querySelectorAll("#flt-table > tbody >tr")

//         rows.forEach((row) =>{
//              cell_value = row.querySelector("td:nth-child("+col_index+")").innerHTML

//             if (col_index in unique_col_values_dict) {
//                 if (unique_col_values_dict[col_index].includes(cell_value)) {
//                 } else{
//                     unique_col_values_dict[col_index].push(cell_value)
//                 }
//             } else{
//                 unique_col_values_dict[col_index] = new Array(cell_value)
//             }
//         });

//     });

//     for(i in unique_col_values_dict){
//         alert("column index : " + i + "has value : \n" + unique_col_values_dict[i])
//     }

//     updateSelectOptions(unique_col_values_dict)
// };


// Adding <option tag> to columns based on unique values

// function updateSelectOptions(unique_col_values_dict) {
    
//     allfilters = document.querySelectorAll(".table-filter")
//     allfilters.forEach((filter_i) =>{
//         col_index  = filter_i.parentElement.getAttribute("col-index")

//         unique_col_values_dict[col_index].forEach((i) =>{
//             filter_i.innerHTML = filter_i.innerHTML + `\n<option value="${i}">${i}</option>`

//         })
//     })
// }

// Creating filter rows() function

// function filter_rows(){
//     allfilters = document.querySelectorAll(".table-filter")
//     var filter_value_dict = {}

//     allfilters.forEach((filter_i) =>{
//         col_index = filter_i.parentElement.getAttribute("col-index")

//         value = filter_i.value
//         if (value != "all"){
//             filter_value_dict[col_index] = value;
//         }
//     });

//     var col_cell_value_dect = {};

//     let rows = document.querySelectorAll("#flt-table > tbody >tr");
//     rows.forEach((row) =>{
//         var display_row = true;

//         allfilters.forEach((filter_i) =>{
//             col_index = filter_i.parentElement.getAttribute("col-index")
//             col_cell_value_dect[col_index] = row.querySelector("td:nth-child("+col_index+")").innerHTML
//         });

//         for (var col_i in filter_value_dict){
//             filter_value = filter_value_dict[col_i]
//             row_cell_value = col_cell_value_dect[col_i]

//             if (row_cell_value.index(filter_value) == -1 && filter_value != "all"){
//                 display_row = false;
//                 break;
//             }
//         }

//         if (display_row == true) {
//             row.style.display = "table-row"

//         } else{
//              row.style.display = "none"
//         }
//     })
// }



// let peoples = [{Rank :"1", Name :"Mohan", Year :"1992", Marks :"595", percentage :"100%"},
//     {Rank :"2", Name :"Kishor", Year :"1998", Marks :"550", percentage :"96%"},
//     {Rank :"3", Name :"Rajesh", Year :"1997", Marks :"525", percentage :"95%"},
//     {Rank :"4", Name :"Shyam", Year :"2000", Marks :"500", percentage :"93%"},
//     {Rank :"5", Name :"Durga Rao", Year :"1997", Marks :"499", percentage :"93%"},
//     {Rank :"6", Name :"Yashwanth", Year :"1999", Marks :"480", percentage :"90%"},
//     {Rank :"7", Name :"Zaheer", Year :"1995", Marks :"450", percentage :"86%"},
//     {Rank :"8", Name :"Lokesh", Year :"2002", Marks :"420", percentage :"84%"},
//     {Rank :"9", Name :"Harsha", Year :"2001", Marks :"400", percentage :"82%"},
//     {Rank :"10", Name :"Ravi", Year :"1998", Marks :"380", percentage :"79%"},
//     {Rank :"11", Name :"Naresh", Year :"1990", Marks :"595", percentage :"100%"},
//     {Rank :"12", Name :"Sathwik", Year :"1998", Marks :"589", percentage :"99%"},
//     {Rank :"13", Name :"Jhon", Year :"2001", Marks :"320", percentage :"65%"},
//     {Rank :"14", Name :"Gangadhar", Year :"2001", Marks :"490", percentage :"92%"},
//     {Rank :"15", Name :"Chinna", Year :"2005", Marks :"495", percentage :"93%"},
//     {Rank :"16", Name :"Bharath", Year :"2004", Marks :"490", percentage :"91%"},
//     {Rank :"17", Name :"Aravind", Year :"2000", Marks :"450", percentage :"86%"},
//     {Rank :"18", Name :"Amarnath", Year :"2002", Marks :"370", percentage :"80%"},
//     {Rank :"19", Name :"Hareesh", Year :"2002", Marks :"401", percentage :"82%"},
//     {Rank :"20", Name :"Rakesh", Year :"2003", Marks :"320", percentage :"70%"}
// ]

// peoples.sort((a, b) => b.Name.localeCompare(a.Name));

// console.log(peoples)

// function sortTable(n) {
//     var array = [];
//     var item = document.querySelectorAll("td")
//     for (var i= 0; i<item.length; i++){
//         array.push(item[i].innerHTML);
//     }
    
//     array.sort();
//     for (var i=0; i<array.length; i++){
//         item[i].innerHTML=array[i];
//     }
// }


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


// Search function


// const searchFun = () =>{
//     let filters = document.querySelector('#searchbar').value.toUpperCase();

//     let myTable  = document.querySelector('#tbl1');

//     let tr = myTable.getElementsByTagName('tr');

//     for (let i=0; i<tr.length; i++){
//         let td = tr[i].getElementsByTagName('td')[0];

//         if(td){
//             let textvalue = td.textContent || td.innerHTML;

//             if(textvalue.toUpperCase().indexOf(filters) > -1){
//                 tr[1].stytle.display = "";
            
//             } else{
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }

// var searchbar = document.querySelector('searchbar');
// var tbody = document.querySelector('tbody1');
// var originaltabledata = tbody.innerHTML;

// function search(){
//     tbody.innerHTML = originaltabledata;
//     let count = tbody.children;

// }

