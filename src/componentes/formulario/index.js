import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    return(
         <section className='formulario'>
             <form>
                <h2>Preencha os dados para criar o card do Colaborador</h2>
                 <CampoTexto label="Nome" placeholder="Digite seu nome" />
                 <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
                 <CampoTexto label="Imagem" placeholder="Digite endereço da imagem" />
                 <ListaSuspensa label="Time" itens={times}/>
             </form>
         </section>
        )
    
}
export default Formulario