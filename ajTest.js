function ajax(){
    const getList=async ()=>{
        try{
             const res=await axios.get('https://jsonplaceholder.typicode.com/todos');
            // fetch('https://jsonplaceholder.typicode.com/todos',{
                
            // })
            // .then(res => {
    
            // })
            const lists=res.data;
            console.log(lists);
            let listcontent='';
            lists.forEach((el,index)=>{
                listcontent+=`<li class="list-group-item ${el.completed?'disabledList':''} ${index%2?'list-group-item-info':'list-group-item-success'}"> <input type="checkbox" class="checkbox" ${el.completed?' disabled checked':''}/> <label for=""> ${el.title}</label></li>`
            });
            $('#todoList').html(listcontent);
            if(checkedCount){
                checkedCount=0;
            }
    
        }
        catch(e){
            console.log('failed to fetch lists data',e);
        }
    }
    // call getlist() when GET LIST is clicked.
    $('#getList').on('click',(e)=>{
        e.preventDefault();
        getList();
    });
    
    //variable to keep track of cheking list items
    let checkedCount=0;
    
    const alertPromise= ()=>{
         return new Promise((resolve,reject)=>{
    
             
            if(checkedCount===5){
                resolve(checkedCount)
            }
            else{
                reject('count not equal to 5');
            }
        });
    }
    
    const promiseCall=()=>{
        alertPromise().then((data)=>{
            // alert(`well done ${data} activities reached`);
            alert("Congratulations!! 5 Tasks have been Successfully Completed");
        })
        .catch((err)=>{
            console.log('promise rejected');
        })
    }
    
    
    getList();
    
    $('#todoList').on('change','.checkbox',function(e){
        if($(this).prop('checked')===true){
            console.log('checked');
            checkedCount++; 
            $(this).parent().addClass('active');
        }
        else{
            checkedCount--;
            console.log('unchecked');
            $(this).parent().removeClass('active');
        }
        
        promiseCall();
    
    
    });
}