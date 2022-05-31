interface ButtonProps {
  text?: string;
}


function Button(props:ButtonProps) {
  return <button className="bg-violent="> {props.text ?? 'Default' }</button>
  
}


function App() {
 
return (
     <div>
      <Button text="Enviar" />
       <Button text="Ok" />
       < Button />
     </div>
)
}
//componente > e uma funcao que retorna html, por exemplo App e uma funcao que retorna html. O componente sempre tem que ter a primeira leite maiuscula tanto do arquivo quanto da funcao. 


export default App
