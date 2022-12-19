import React, { useState } from "react";


//Props => propiedades de solo lectura, para leer lo que viene de la interfaz
const FormToDo = props => {

    //Uso de state 
    const [description, setDescription] = useState("");

    //Recibimos addItem de props
    const {addItem} = props;

    const manejarSubmit = e => {

        //Quitar la actualizacion de la pagina al hacer post
        e.preventDefault();
    
        //Inicializamos un objeto
        addItem({
            done:false,
            id: (new Date()).toString(),
            description
        });
        
        setDescription("");
    }

    
    return (
        <form onSubmit={manejarSubmit} className="form-todo-list">
            <div className="todo-list">
                <div className="file-input">
                    <input 
                    type="text" 
                    className="text" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)} />
                    
                    <button 
                    className="naranja button"
                    disabled={description ? "":"disabled"}>
                        Agregar tarea
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormToDo;