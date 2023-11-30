
    var header           = document.getElementById('header');
    var navigationHeader = document.getElementById('navigation_header');
    var content          = document.getElementById('content');
    var showSidebar      = false;
    function toggleSidebar()
    {
        showSidebar = !showSidebar;
        if(showSidebar)
        {
            navigationHeader.style.marginLeft = '-10vw';
            navigationHeader.style.animationName = 'showSidebar';
            content.style.filter = 'blur(2px)';
        }
        else
        {
            navigationHeader.style.marginLeft = '-100vw';
            navigationHeader.style.animationName = '';
            content.style.filter = '';
        }
    }

    function closeSidebar()
    {
        if(showSidebar)
        {
            showSidebar = true;
            toggleSidebar();
        }
    }

    window.addEventListener('resize', function(event) {
        if(window.innerWidth > 768 && showSidebar) 
        {  
            showSidebar = true;
            toggleSidebar();
        }
    });

    function funcao(){
        document.getElementById("paragrafo").innerHTML="#GP2QJQL8"
    }


    function logout() {
        firebase.auth().signOut().then(() => {
            window.location.href = "index.html";
        }).catch(() => {
            alert('Error when exiting');
        })
    }

    function Help2(){
        document.getElementById("help").innerHTML="Enter a valid email and your respective passwordif you do not have your registration click on the last option to create yours."
    }