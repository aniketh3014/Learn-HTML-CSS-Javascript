document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').addEventListener('submit', function(event){
        let name=document.querySelector('#name').value;
        alert('Thanks for visiting! have a great day, '+name);
        event.preventDefault();
    });
});