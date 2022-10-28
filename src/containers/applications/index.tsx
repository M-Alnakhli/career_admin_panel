import React from 'react'
import {useApplicationListAPI} from '../../api/applicationsApi'
import { ApplicationListAPIReqType, ApplicationStatusType } from '../../api/typs'
import { Card } from '../../componenets/Card'
import { Header } from '../../componenets/Text/header'
import {ApplicationlistRow} from './applicationlistRow'
import { QueryControllers } from './queryControllers'
export const Applications= () => {
  const [query,setQuery] =React.useState<ApplicationListAPIReqType>({offset:0,pageNumber:0,recordsPerPage:30,filters:{applicant:null,aplicationStatus:null,carear:null}})
  const [data,errors,loading] =useApplicationListAPI(query)
 

  const onChangeFilter = (aplicationStatus:string|null):void=>{
    console.log('also it come here ',aplicationStatus);
    
  setQuery(pre=>({...pre,filters:{...pre.filters,aplicationStatus:aplicationStatus as ApplicationStatusType}}))
  }


  const onChangePage  =(offset:number,pageNumber:number,recordsPerPage:number)=>{

    setQuery(pre=>({...pre,offset:offset,pageNumber:pageNumber,recordsPerPage:recordsPerPage}))
  }

 
 
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
    <Card style={{display:'flex',flex:1,flexDirection:'column',backgroundColor:'white',flexWrap: 'wrap',paddingLeft:'10px',paddingRight:'10px'}} >
      <Header style={{alignSelf:'flex-start',marginTop:'30px',marginBottom:'30px'}} size={30}>Applicants</Header>
      <QueryControllers query={query} onChangeFilter={onChangeFilter} onChangePage={onChangePage}/>
      <div  style={{display:'flex',flex:1,flexWrap: 'wrap'}}>
    {data!==null&&data.applications.map((element,index)=><ApplicationlistRow key={index} {...element}/>)}
    </div>
    </Card>
    </div>
  )
}
