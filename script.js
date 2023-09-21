const   container=document.querySelector('.container');
const   seats=document.querySelectorAll('.row .seat:not(.occuipied');
const   count=document.querySelector('#count')
const  total=document.querySelector('#total')
const   movieselect=document.querySelector('#movie')

let ticketPrice=+movieselect.value;

// update total and count
const updatedselectedcount=()=>{
   const selectedSeat=document.querySelectorAll('.row .seat.selected')
   const seatCount=selectedSeat.length;

   count.innerText=seatCount;
  total.innerText=seatCount*ticketPrice;
}

// update movie price

  movieselect.addEventListener('change',(e)=>{
   ticketPrice=+ e.target.value;
   
   updatedselectedcount();
  })
  container.addEventListener('click',(e)=>{
    
    if(e.target.classList.contains('seat') && ! e.target.classList.contains('occuipied')){
        e.target.classList.toggle('selected')
     

        updatedselectedcount()
    }
  })