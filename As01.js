let furniture = ['Table','chair','Couch']


function test(Arry){
    for(let index of Arry){
        console.log("\n")
        for(let text of index) console.log(text+"\n")
    }
}

test(furniture);