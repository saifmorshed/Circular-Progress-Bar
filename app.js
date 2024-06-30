 





// Skill Value Progress by Saif Morshed
function skillValueProgress(id = null, value = 63) {
    let skillValue = value; 
    let counter = 0;
    let className = "skill" + Math.floor(Math.random() * 1000);
    let anmiateName = className+"-Animation";
    var cssCode =  ` 
        .`+className+`{
            animation: `+anmiateName+` 3s linear forwards;
        }
    `;
    let strokeValue = 450 - 450 * skillValue / 100;   
    cssCode += `
        @keyframes `+anmiateName+` {
             100%{
                stroke-dashoffset: `+strokeValue+`;
            }
        }
    `;
    $('head').append(`<style>`+cssCode+`</style>`);
    $(id).closest('.skill').find('circle').addClass(className);

    setInterval(function() {
        if(counter == skillValue){
            clearInterval();
        } else {
            counter++;
            $(id).html(`${counter}%`);
        }
    }, 30);

}  


// Old Code
// let number = document.getElementById('number');
// let counter = 0;

// setInterval(() => {
//     if(counter == 73){
//         clearInterval;
//     } else {
//         counter += 1;   
//         number.innerHTML = `${counter}%`;
//     }
// }, 30);