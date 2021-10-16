import React, { useEffect } from 'react'
import {WrappDashboard,WrapContainer,WrappNumberOfNotes,NumberOfNotes} from './styles'
import Chart from "react-apexcharts"
import {GrDocumentConfig} from 'react-icons/gr'
import {NotesConfig} from '../NotesConfig'
import { useValue } from '../../hook/useValue'
export const Dashboard = () =>{
     const options= {
        chart: {
          id: "basic-bar"
        },
        labels: ["Por revisar","Revisados"]
      }
    const   series= [20,10]
    const isModalOpen=useValue(false)

    const handleClick=()=>{
      isModalOpen.onChange(true)

    }
    return(
        <WrappDashboard>
          <NotesConfig isOpen={isModalOpen}/>
            <WrappNumberOfNotes>
              <WrapContainer>
                <NumberOfNotes>
                    100 
                </NumberOfNotes>
                <p>
                Notes
                </p>
              </WrapContainer>
              <WrapContainer>
                <button onClick={()=>handleClick()}>
                  <GrDocumentConfig size={25}></GrDocumentConfig>
                </button>
              </WrapContainer>
            </WrappNumberOfNotes>
            
            <Chart
              options={options}
              series={series}
              type="donut"
              width="100%"
              height="100%"
            />
        </WrappDashboard>
    )
}