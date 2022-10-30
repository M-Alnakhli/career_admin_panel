import React from 'react'
import {FormikProps, useFormikContext, ErrorMessage, Field } from 'formik'
import { Label } from '../../componenets/Text/label'
import { Selction } from '../../componenets/selction'
import {ApplicationFormType} from './createForm'
import {ApplicationFormSchema} from '../../validations'
import { Card } from '../../componenets/Card'
import { Header } from '../../componenets/Text/header'
export const PersonalInfo = () => {
    const {values,errors,touched,handleBlur,handleChange}:FormikProps<ApplicationFormType> =useFormikContext()
    const options =[{label:'Male',value:'Male'},{label:'Female',value:'Female'}]
  return (
    <Card style={{display:'flex',backgroundColor:'white',flexWrap: 'wrap',paddingLeft:'20px',paddingRight:'20px',height:'45vh',justifyContent:'space-around'}} >
       
        <Header style={{marginBottom:'3vh',alignSelf:'start'}} size={30} >
            Personal Information
        </Header>
         <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',height:'20vh'}}>
            
           
<div style={{display:'flex',justifyContent:'space-between',marginTop:0}}>
         <Label  style={{marginRight:'10px'}}>First Name:</Label>
         <div>
        <input
     style={{height:'3vh'}}
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
 <ErrorMessage name='firstName'>{(errors:string)=><Label style={{color:'red'}}>{errors}</Label>}</ErrorMessage>
        </div>
    
       
        </div>

      
        <div style={{display:'flex',justifyContent:'space-between',margin:'2ch',marginTop:0}}>
         <Label  style={{marginRight:'10px'}} >Last Name:</Label>
         <div>
        <input
         style={{height:'3vh'}}
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
         <ErrorMessage name='lastName'>{(errors:string)=><Label style={{color:'red'}}>{errors}</Label>}</ErrorMessage>
        </div>
       
       
        </div>
        <div style={{display:'flex'}}> <Label  style={{marginRight:'10px'}} >Gender:</Label>
        <Field  style={{lineHeight:'0',height:'4vh'}} as="select" name={'gender'}>
            {options.map((element,innerIndex)=><option value ={element.value}> <Label>{element.label}</Label></option>)}
        </Field>
        </div>
      

       
        <div style={{display:'flex',justifyContent:'space-between',margin:'2ch',marginTop:0}}>
         <Label  style={{marginRight:'10px'}}>Email:</Label>
         <div>
        <input
       style={{height:'3vh'}}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
         <ErrorMessage name='email'>{(errors:string)=><Label style={{color:'red'}}>{errors}</Label>}</ErrorMessage>
        </div>    
         
          </div>
       
        <div style={{display:'flex',justifyContent:'space-between',margin:'2ch',marginTop:0}}>
      
         <Label  style={{marginRight:'10px'}}>Mobile:</Label>
         <div>
        <input
        style={{height:'3vh'}}
          type="tel"
          name="mobile"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.mobile}
        />
         <ErrorMessage name='mobile'>{(errors:string)=><Label style={{color:'red',fontSize:5}}>{errors}</Label>}</ErrorMessage>
        </div>

       
        </div>
   
        <div style={{display:'flex',justifyContent:'space-between',margin:'2ch',marginTop:0}}>
         <Label  style={{marginRight:'10px'}}>Date of Birth</Label>
         <div>
        <input
         style={{height:'3vh'}}
          type="date"
          name="dateOfBirth"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <ErrorMessage name='dateOfBirth'>{(errors:string)=><Label  style={{color:'red',fontSize:5}}>{errors}</Label>}</ErrorMessage>
        </div>
        
        </div>

        <div style={{display:'flex',justifyContent:'space-between',margin:'2ch',marginTop:0}}>
         <Label  style={{marginRight:'10px'}}>Nationality</Label>
         <div>
        <input
       style={{height:'3vh'}}
          name="nationality"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.nationality}
        />
        <ErrorMessage name='nationality'>{(errors:string)=><Label style={{color:'red',fontSize:13}}>{errors}</Label>}</ErrorMessage>
        </div>
        
        </div>
        </div>
    </Card>
  )
}


