import React from 'react'
import {useApplicationListAPI} from '../../api/applicationsApi'
import { useCarearListAPI } from '../../api/crearesApi'
import { CarearListAPIResType, CareerConfig, CareerListAPIReqType } from '../../api/typs'
import { Card } from '../../componenets/Card'
import { Header } from '../../componenets/Text/header'
import {CarearlistRow} from './carearListRow'

export const Carears= () => {
  const [query,setQuery]=React.useState<CareerListAPIReqType>({offset:0,pageNumber:0,location:null,positionId:null})
  const [data,errors,loading] =useCarearListAPI(query)
  if(loading){

  
  return(
    <p>
      loading...
    </p>
  )
  }
if(errors?.error!==null){

 
  return( <p>
Error
  </p>)
  
}
  return (
    <div style={{padding:'3ch',flex:1}}>
    <Card style={{display:'flex',flex:1,backgroundColor:'white',flexWrap: 'wrap',paddingLeft:'10px',paddingRight:'10px'}} >
      <Header style={{alignSelf:'flex-start',marginTop:'30px',marginBottom:'30px'}} size={30}>Applicants</Header>
      <div  style={{display:'flex',flex:1,flexWrap: 'wrap'}}>
    {data!==null&&data.applications.map((element: CareerConfig,index: React.Key | null | undefined)=><CarearlistRow key={index} {...element}/>)}
    </div>
    </Card>
    </div>
  )
}
