// template_nx789e2
// 

// zdkg5rwnz7XPJunIN

const scaleFactor = (1 / 20)

function moveBackground(event) { 
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;  

    for ( let i = 0 ; i<shapes.length ; i++) { 
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1; 

        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }

}


function contact() {
    event.preventDefault(); 

        const loading = document.querySelector(" .modal__overlay--loading");
        const success = document.querySelector(" .modal__overlay--success");
        
        loading.classList += " modal__overlay--visible";

    emailjs

        .sendForm ( 
            "service_siz3lxt",
            "template_n1jx0s3", 
            event.target, 
            "zdkg5rwnz7XPJunIN"
        )
        .then(()=> { 

           loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";

        })
        
        .catch(() => {

            loading.classList.remove("modal__overlay--visible");
            
            alert("email service is temporarily unavailable. Please Contact me directly at luisfe2085@gmail.com");

        })


}

// toggle modal 

let isModalOpen = false;

function toggleModal() { 


    if (isModalOpen === true) { 
        isModalOpen = false; 
        return document.body.classList.remove("modal__open")
    }

    isModalOpen = true; 
    document.body.classList.add("modal__open")

   

}

let isContrastDark = false; 


function toggleContrast(){

    isContrastDark = !isContrastDark

    if (isContrastDark){ 
        document.body.classList.add("dark__theme")
    }

    else {
        document.body.classList.remove("dark__theme")
    }
    

}

