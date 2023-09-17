
import "./MiiOrg.css"

const MiOrg = (props) => {
    
    //const [nombre,actualizarNombre] = useState()

//const [mostrar, actualizarMostrar] = useState(true)
//const manejarClick = () =>{
  //  console.log("Mostrar", !mostrar)
    //actualizarMostrar(!mostrar)
//}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg