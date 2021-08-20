function openModal(){
    document.getElementsByClassName('fade')[0].style.display='flex'
    document.getElementsByClassName('fade')[0].style.opacity='100'
}

function closeModal(){
    document.getElementsByClassName('fade')[0].style.display='none'
}

function clearErrors(){
    for(const el of document.getElementsByClassName('error')){
        el.textContent=''
        el.style.display='none'
    }
}

function printError(id,message){
    let el = document.getElementById(id)
    el.textContent = message
    el.style.display = 'block'
}

function makeTable(){
    let table = document.getElementById('generatedTab')
    table.textContent=''
    let rows = document.getElementById('x').value
    let columns = document.getElementById('y').value

    for (var i = 0; i <= rows;i++){
        let tr = document.createElement('tr')
        for(var j = 0; j<=columns;j++){
            let td = document.createElement('td')
            let result = document.createTextNode(i*j)
            let actualRow = document.createTextNode('x='+i)
            let actualCol = document.createTextNode('y='+j)
            let clear = document.createTextNode("   ");
            if (i === 0 && j ===0){
                td.appendChild(clear)
                tr.appendChild(td)
            }
            if (i > 0 && j === 0){
                td.appendChild(actualRow);
                tr.appendChild(td);
            }
            if(i === 0 && j > 0){
                td.appendChild(actualCol);
                tr.appendChild(td);
            }
            if(i > 0 && j > 0){
                td.appendChild(result);
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }

}

function validate(value){
    if(value <= 0 || value > 9){
        return true
    }
    return false
}


document.getElementById('values').addEventListener('submit',function event(event){
    event.preventDefault()
    clearErrors()
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value
    if(validate(x)){
        printError('xErr',"Zadaná hodnota nie je správna")
        if(validate(y)){
            printError('yErr',"Zadaná hodnota nie je správna")
            return
        }
        return
    }
    if(validate(y)){
        printError('yErr',"Zadaná hodnota nie je správna")
        return
    }
    openModal()
    makeTable()
})