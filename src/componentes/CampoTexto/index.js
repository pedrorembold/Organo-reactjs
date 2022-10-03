import './CampoTexto.css'
const CampoTexto = (props) => {
    
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )

    //Poderíamos também, criar uma variável que coubesse interpolações tal como o exemplo abaixo:
    //const placeHolderModificado = `Digite ${props.placeholder}`;
    // e passarmos essa variável dentro do campo que recebe a propriedade e o valor.
    //Ex: <input placeholder={placeHolderModificado}/>
    // Dessa forma, teríamos como resultado no campo da aplicação "Digite seu nome", caso tivessemos passado o valor "placeholder='seu nome'" ao componente
}
export default CampoTexto