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
        this.classList.toggle('font-bold');
    });
    document.getElementById('align-center').addEventListener('click', function(){
        textField.style.textAlign = 'center';
        this.classList.toggle('font-bold');
    });
    document.getElementById('align-right').addEventListener('click', function(){
        textField.style.textAlign = 'right';
        this.classList.toggle('font-bold');
    });
    document.getElementById('align-justify').addEventListener('click', function(){
        textField.style.textAlign = 'justify';
        this.classList.toggle('font-bold');
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
        console.log(colorValue);
        textField.style.color = colorValue;
    })