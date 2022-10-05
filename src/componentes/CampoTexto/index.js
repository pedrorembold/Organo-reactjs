import './CampoTexto.css'


const CampoTexto = (props) => {
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value);
}    
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )

    //Poderíamos também, criar uma variável que coubesse interpolações tal como o exemplo abaixo:
    //const placeHolderModificado = `Digite ${props.placeholder}`;
    // e passarmos essa variável dentro do campo que recebe a propriedade e o valor.
    //Ex: <input placeholder={placeHolderModificado}/>
    // Dessa forma, teríamos como resultado no campo da aplicação "Digite seu nome", caso tivessemos passado o valor "placeholder='seu nome'" ao componente
}
export default CampoTexto