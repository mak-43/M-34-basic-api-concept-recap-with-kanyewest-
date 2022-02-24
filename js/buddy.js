const loadBuddies=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayBuddies(data))
}
loadBuddies()
const displayBuddies=data=>{
    
    const buddies=data.results
    const buddiesDiv=document.getElementById('buddies')
    for(const i of buddies){
        const p=document.createElement('p')
        p.innerText=`Name:  ${i.name.title}${i.name.first} ${i.last} email:${i.email}`
        buddiesDiv.appendChild(p)

        console.log(p)
    }
    
}