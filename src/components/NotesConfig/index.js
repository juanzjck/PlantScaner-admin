import React, { Fragment } from 'react'
import { ModalLayout } from '../Modal'
import {WrapConfigNotes,WrapConfigContainer} from './styles'
import { Select,Input,ButtonClose,Button } from '../../styles/inputs'
export const NotesConfig = ({isOpen}) =>{

    return(
        <Fragment>
            <ModalLayout modalIsOpen={isOpen}> 
              
                <WrapConfigNotes>
                    
                    
                    <h3>Frecuencia</h3>
                    <WrapConfigContainer>
                            <label>Luego de</label>
                            <Input></Input>
                            <Select>
                                <option>Día</option>
                                <option>Mes</option>
                                <option>Año</option>
                            </Select>
                            <label>Repetir</label>
                            <Select>
                                <option>Una sola ves</option>
                                <option>Repetir dos veces</option>
                                <option>Repetir siempre</option>
                            </Select>
                            <Select>
                                <option>Aplicar a las sin revisar</option>
                                <option>Aplicar desde ahora a las nuevas notas</option>
                                <option>Aplicar a todos</option>        
                            </Select>
                        <Button>
                            Guardar configuraciones
                        </Button>
                    </WrapConfigContainer>
                    <WrapConfigContainer>

                    </WrapConfigContainer>
                </WrapConfigNotes>
            </ModalLayout>
        </Fragment>
    )

} 