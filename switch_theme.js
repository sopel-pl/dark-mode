var  plik_css, dark_mode_status=document.cookie;
if(dark_mode_status=="Dark_mode=true"){
    plik_css="dark.css";
    dark_mode_status=true;
}else{
    plik_css="white.css";
    dark_mode_status=false;
} 
document.write('<link rel="stylesheet" href="'+plik_css+'" type="text/css">');
function change_theme() {
    document.cookie = 'Dark_mode='+dark_mode_status+'; Max-Age=0';
    window.location.reload(true);
    document.cookie = "Dark_mode="+!dark_mode_status+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}