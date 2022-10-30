import React from 'react'
import { useCarearListAPI } from '../../api/crearesApi'
import {  } from '../../api/typs'
import { Card } from '../../componenets/Card'
import { Header } from '../../componenets/Text/header'
import {useCreateApplicationAPI} from '../../api/creatApplicationApi'
import { Formik } from 'formik'
import {} from '../../validations'
import {CVInfo} from './cvInfo'
import {EducationInfo} from './education'
import {PersonalInfo} from './personalInfo'
import {SkilsInfo} from "./skilsInfo"
import {ApplicationFormSchema} from '../../validations'
import { Button } from '../../componenets/Button'

export type ApplicationFormType ={firstName:string,lastName:string,nationality:string,email:string,dateOfBirth:Date,mobile:string,gender:'Male'|'Female',qualifications:AcadimecQualificationType[],linkedIn:string,cv:string | number | readonly string[] | undefined}

type  AcadimecQualificationType = {
    institution:string,
    counrty:string,
    mager:string,
    degree:'Associate'| 'Bachelor'|'Master'|'Doctoral'|'Professional',
    gpa?:number
}
export const CreateForm= () => {
  const [data,errors,loading,submitRusame] =useCreateApplicationAPI()
  
  const onSubmit =async(values:ApplicationFormType, { setSubmitting }:{setSubmitting:(state:boolean)=>void})=>{
    try{
      console.log("it comes here ");
      
        setSubmitting(true)
       await submitRusame(values)
    }
    catch(e){

    }
}
  return (
    <div style={{padding:'3ch',flex:1,display:'flex',flexWrap:'wrap',}}>
 <Formik
 
   onSubmit={onSubmit}
       initialValues={{ firstName:'',lastName:'',nationality:'',email:'',dateOfBirth:new Date(),mobile:'',gender:'Male',qualifications:[],linkedIn:'',cv:undefined}}
     
       validationSchema={ApplicationFormSchema}
     >
       {({handleSubmit}) => (
         <form style={{flex:1,display:'flex',flexDirection:'column',paddingBottom:'20vh'}}  onSubmit={handleSubmit}>
            <PersonalInfo/>
            <EducationInfo/>
            <CVInfo/>
            <div style={{marginTop:'2vh',display:'flex',justifyContent:'center'}}>
            <Button  color="white" type={'Submit'} action={handleSubmit} name="submit" label="Submit" style={{width:'15ch',height:'3vh',alignItems:'center',marginRight:'2ch'}}/>
            <Button  color="white" type={'Next'} action={handleSubmit} name="submit" label="Save" style={{width:'15ch',height:'3vh',alignItems:'center'}}/>
            </div>
         </form>)}
         </Formik>

    </div>
  )
}
