const button = document.querySelectorAll('.bx');
contactForm = document.forms['contact-form'];

document.addEventListener('DOMContentLoaded', () => {
    button.forEach((item)=>{
        item.addEventListener('click', ()=>{

            const accordionItem = item.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');

            // Remove other accodion content if they are active
            const allAccordionContent = document.querySelectorAll('.accordion-content');
            allAccordionContent.forEach((content)=>{
                if(content !== accordionContent && content.classList.contains('active')){
                    content.classList.remove('active');
                    content.style.display = 'none';
                }
            })

            // Remove other button content if they are active
            button.forEach((otherButton)=>{
                if(otherButton !== item && otherButton.classList.contains('active')){
                    otherButton.classList.remove('active');
                    // otherButton.classList.remove('bx-bookmark-minus');
                    otherButton.classList.add('bx-bookmark-plus');
                }
            });

            item.classList.toggle('active');

            if(item.classList.contains('active')){
                item.classList.remove('bx-bookmark-plus');
                item.classList.add('bx-bookmark-minus');
                
                accordionContent.classList.add('active');
                accordionContent.style.display = 'block';
            }
            else{
                item.classList.add('bx-bookmark-plus');
                item.classList.remove('bx-bookmark-minus');

                accordionContent.classList.remove('active');
                accordionContent.style.display = 'none'
            }
        });
    });

    contactForm.addEventListener('submit', function(event){
        event.preventDefault();
        fullname = contactForm.elements['fullname'].value;
        email = contactForm.elements['email'].value;
        message = contactForm.elements['message'].value;
    
        if(fullname === '' || email === '' || message === ''){
            window.alert('kindly fill the form')
        }
    })    

});




function changeColor() {
    let red = Math.floor(Math.random() * 100) ;
    let blue = Math.floor(Math.random() * 100) ;
    let green = Math.floor(Math.random() * 100) ;
    let color = "rgb("+ red + ", "+ green +" , "+ green +")" ;
    document.getElementById("colorFlipper").style.backgroundColor = color;
}