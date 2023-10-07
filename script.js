function aboutMe() {
    var home = document.getElementById('#Home');
    var about_me = document.getElementById('#AbouMe');
    var edu = document.getElementById('#Education');
    var prj = document.getElementById('#Project');
    var cer = document.getElementById('#Certificate');

    home.classList.remove("active");
    edu.classList.remove("active");
    prj.classList.remove("active");
    cer.classList.remove("active");
    
    about_me.classList.add("active");
};