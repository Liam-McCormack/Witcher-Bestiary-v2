
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
$('.beastTitle').click(function(){
    $('.beastContent').toggle('slow');
});

$('.cursedTitle').click(function(){
    $('.cursedContent').toggle('slow');
}); 

$('.dracoTitle').click(function(){
    $('.dracoContent').toggle('slow');
}); 

$('.eleTitle').click(function(){
    $('.eleContent').toggle('slow');
}); 

$('.hybTitle').click(function(){
    $('.hybContent').toggle('slow');
}); 

$('.insectTitle').click(function(){
    $('.insectContent').toggle('slow');
}); 

$('.necroTitle').click(function(){
    $('.necroContent').toggle('slow');
}); 

$('.ogroTitle').click(function(){
    $('.ogroContent').toggle('slow');
}); 

$('.relicTitle').click(function(){
    $('.relicContent').toggle('slow');
}); 

$('.specTitle').click(function(){
    $('.specContent').toggle('slow');
}); 

$('.vampTitle').click(function(){
    $('.vampContent').toggle('slow');
}); 