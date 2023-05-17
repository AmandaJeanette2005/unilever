document.title = "unilever";
const data = [
    {
        KdBarang: 'ASDF01',
        NmBarang: 'Bango',
        Berat: '23kg'

    },{
        KdBarang: 'ASDF02',
        NmBarang: 'Buavita',
        Berat: '100ml'

    },{
        KdBarang: 'ASDF03',
        NmBarang: 'lux',
        Berat: '200ml'

    },{
        KdBarang: 'ASDF04',
        NmBarang: 'Molto',
        Berat: '500ml'

    },{
        KdBarang: 'ASDF05',
        NmBarang: 'pepsodent',
        Berat: '25kg'

    }
]

const dataBarang = document.getElementById('dataBarang')
let tr = ''

let indexToUpdate = null
let isUpdating = false;

function read(){
    let tr = ''
        data.forEach((x,index) =>{
            tr += `<tr>
                <td>${x.KdBarang}</td>
                <td>${x.NmBarang}</td>
                <td>${x.Berat}</td>
                <td>
                <Button onclick ="destroy(${index})" data-index="${index}">Delete</Button>
                <Button onclick ="update(${index})" data-index="${index}">Update</Button>
                </td>
                </tr>`
            })

            console.log(data);
    dataBarang.innerHTML = tr
}

const elData = document.getElementById('dataBarang')

//delete
function destroy(index){ 
  data.splice(index, 1)
  tr = ''
  read()
}

read()

//add
const btn_save = document.getElementById("btn_save")


btn_save.onclick = () => {
    const inputKdBarang = document.getElementById('KdBarang')
    const NmBarang= document.getElementById('NmBarang')
    const inputBerat = document.getElementById('Berat')

if(!isUpdating){
    data.push({
        KdBarang: inputKdBarang.value,
        NmBarang: NmBarang.value,
        Berat: inputBerat.value
    })
    console.log("add new data")
}else{
    data.splice(indexToUpdate, 1, {
        KdBarang: inputKdBarang.value,
        NmBarang: NmBarang.value,
        Berat: inputBerat.value
    })

}
    read()
}

// update
function update(x){
    indexToUpdate = x;

    isUpdating = true;

        const inputKdBarang = document.getElementById('KdBarang')
        const NmBarang = document.getElementById('NmBarang')
        const inputBerat = document.getElementById('Berat')

    console.log(data[x])
        inputKdBarang.value = data[x].KdBarang;
        NmBarang.value = data[x].NmBarang;
        inputBerat.value = data[x].Berat;

    const objBaru = {
        KdBarang: inputKdBarang.value,
        NmBarang: NmBarang.value,
        Berat: inputBerat.value
    }
    
}