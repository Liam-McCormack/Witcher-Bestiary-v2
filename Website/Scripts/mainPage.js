
/*
//Toggle view of Monster columns
function showhide() {
    //function that changes #content to display: block
    const x = document.getElementsByClassName("content");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = x[i].style.display == 'none' ? 'block' : 'none';
    } 
}; 

document.getElementsByClassName("beastTitle").addEventListener("click", showhide); */


//Toggle view of Monster columns - JQUERY
$('.beastTitle header').click(function(){
    $('.beastContent').toggle('slow');
});

$('.cursedTitle header').click(function(){
    $('.cursedContent').toggle('slow');
}); 

$('.dracoTitle header').click(function(){
    $('.dracoContent').toggle('slow');
}); 

$('.eleTitle header').click(function(){
    $('.eleContent').toggle('slow');
}); 

$('.hybTitle header').click(function(){
    $('.hybContent').toggle('slow');
}); 

$('.insectTitle header').click(function(){
    $('.insectContent').toggle('slow');
}); 

$('.necroTitle header').click(function(){
    $('.necroContent').toggle('slow');
}); 

$('.ogroTitle header').click(function(){
    $('.ogroContent').toggle('slow');
}); 

$('.relicTitle header').click(function(){
    $('.relicContent').toggle('slow');
}); 

$('.specTitle header').click(function(){
    $('.specContent').toggle('slow');
}); 

$('.vampTitle header').click(function(){
    $('.vampContent').toggle('slow');
}); 