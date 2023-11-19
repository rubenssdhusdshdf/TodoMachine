import "../src/TodoSearch.css";
function TodoSearch() {
  return (
    <input
      placeholder="Cut onion"
      className="TodoSearch"
      onChange={(event) => {
        console.log("Escribiste en el TodoSearch");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value); //Cada pequeno cambio, podemos saber el texto que escriben los usuarios
      }}
    />
  );
}


export { TodoSearch };


