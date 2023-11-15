function TodoList(props){
    return(
        // Los props son la palabra magina para que los todoItems de app.js se rendericen en el TodoList.js
        <ul>
            {props.children}
            
        </ul>
    );
    
}


export { TodoList };
