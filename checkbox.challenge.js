const checkboxes = document.querySelectorAll('.inbox .item input[type="checkbox"]');
let lastChecked;

function handleCheckbox(e) {
    //check if shif key is pressed
    //check if checkbox is checked
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting checking in Between');
            }
            if(inBetween) {
                checkbox.checked = true;
            }
            
        });

    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheckbox));
