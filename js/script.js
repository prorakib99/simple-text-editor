    const textField = document.getElementById('text-field');
    
    document.getElementById('bold').addEventListener('click', function(){
        textField.classList.toggle('font-bold');
        this.classList.toggle('font-bold');
    });
    document.getElementById('italic').addEventListener('click', function(){
        textField.classList.toggle('italic');
        this.classList.toggle('font-bold');
    });
    document.getElementById('underline').addEventListener('click', function(){
        textField.classList.toggle('underline');
        this.classList.toggle('font-bold');
    });
    document.getElementById('align-left').addEventListener('click', function(){
        textField.style.textAlign = 'left';
    });
    document.getElementById('align-center').addEventListener('click', function(){
        textField.style.textAlign = 'center';
    });
    document.getElementById('align-right').addEventListener('click', function(){
        textField.style.textAlign = 'right';
    });
    document.getElementById('align-justify').addEventListener('click', function(){
        textField.style.textAlign = 'justify';
    });
    document.getElementById('font-size').addEventListener('click', function(){
        let fontValue = this.value;
        textField.style.fontSize = `${fontValue}px`;
    })
    document.getElementById('font-size').addEventListener('keyup', function(){
        const fontValue = this.value;
        textField.style.fontSize = `${fontValue}px`;
    })
    document.getElementById('color-value').addEventListener('blur', function(){
        const colorValue = this.value;
        textField.style.color = colorValue;
    })
    
    // This one for Handle align Propertise 
    let activeIndex = null;
    const alignItems = document.getElementById('align-control');

    function handleListClick(event) {
    const clickedItem = event.target;

    // Check if a list item was clicked
    if (clickedItem.classList.contains('item-click')) {
        const currentIndex = Array.from(clickedItem.parentNode.children).indexOf(clickedItem);

        // Remove active class from the currently active item
        if (activeIndex !== null) {
        clickedItem.parentNode.children[activeIndex].classList.remove('font-bold');
        }

        // Toggle active class for the clicked item
        clickedItem.classList.toggle('font-bold');

        // Update the active index
        activeIndex = clickedItem.classList.contains('font-bold') ? currentIndex : null;
    }
    }

  alignItems.addEventListener('click', handleListClick);