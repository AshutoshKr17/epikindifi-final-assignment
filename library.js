// Write your code here!

//Data sturcture Used
//User name stored in an array 
var users = [
    "Ashutosh",
    "Ron",
    "Tina",
    "Ravi",
    "John",
    "David"                        
];

class books{
    constructor(id,title,author,lender,borrower){
        this.id = id;
        this.title = title;
        this.author = author;
        this.lender = lender;
        this.borrower = borrower;
    }
}

let book1 = new books("1","Book1","Author1","UserC","UserB")
let book2 = new books("2","Book2","Author2","UserC","")
let book3 = new books("3","Book3","Author3","UserD","UserC")
let book4 = new books("4","Book4","Author4","UserA","")
let book5 = new books("5","Book5","Author5","UserA","")
let book6 = new books("6","Book6","Author6","UserB","UserA")


let library = [book1,book2,book3,book4,book5,book6];
let book_count = library.length;
let current_user =''

const isUserLoggedIn =()=>{
    if(current_user == ""){
        return false;
    }
    else{
        return true;
    }
}

const borrowBook = (e) =>{

    for(var i=0;i<library.length;i++){

        library[i].borrower=user_name;
        library[i].action="Return";
    }
}

//function to fetch all the data from local storage and to display in the table
function fetchBooksDetails () {

    const booksList = document.getElementById('info-table-body');
    
    booksList.innerHTML = '';
    
    for (var i = 0; i < library.length; i++) {
        var id =library[i].id;
        var title = library[i].title;
        var author =library[i].author;
        var lender = library[i].lender;
        var borrower = library[i].borrower;
        var action="";

        if(isUserLoggedIn()){
          action = "<button >Borrow</button>";
        }
        else{
            action = "-";
        }
        booksList.innerHTML +=  '<tr>'+
                                    '<td>'+ id +'</td>'+
                                    '<td>'+ title  +'</td>'+
                                    '<td>'+ author  +'</td>'+
                                    '<td>'+ lender +'</td>'+
                                    '<td>'+ borrower +'</td>'+
                                    '<td>'+ action+'</td>'+
                                '</tr>';
    }
    fetchInputRow();

}
const fetchInputRow=() =>{    
    const inputRow = document.getElementById('info-table-body-new-book');
    if(isUserLoggedIn()){

    inputRow.innerHTML +=   '<tr>'+
                                '<td id="input-id">'+7+'</td>'+
                                '<td>'+'<input id="input-title">'+'</td>'+
                                '<td>'+'<input id="input-author">'+'</td>'+
                                '<td id="lender">'+'</td>'+
                                '<td id="borrower">'+'</td>'+
                                '<td id="button-action-new-book">'+'<button>Add Book</button>'+'</td>'+
                            '</tr>';
                        }
}
const insert_new_book =(e) =>{
  
  const new_book_title = document.getElementById('new-book-title').value;
  const new_book_author = document.getElementById('new-book-author').value;
  const new_book_lender = current_user;
  const new_book_borrower = "";
  const new_book_id = book_count;
  
  let new_book = new books(new_book_id,new_book_title,new_book_author,new_book_lender,new_book_borrower);
  library.push(new_book);
  
  fetchBooksDetails();

  e.preventDeafault();
}

//Function For loggin username display
function changeLoggedInUser(){
  let logged_in_username = document.getElementById("logged-in-user-name-current");
  let user_name = document.getElementById("logged-user").value;
  current_user = user_name;
  
  if(users.includes(user_name)){
      logged_in_username.innerHTML = "Logged in user : " + user_name;
      fetchBooksDetails();
  }
  else{
      alert("The entered user Name: "+ user_name +" is not Found!");
  }
}