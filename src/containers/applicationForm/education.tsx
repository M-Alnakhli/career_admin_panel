import React from 'react'
import {FormikProps, useFormikContext, ErrorMessage,FieldArray ,Field } from 'formik'
import { Label } from '../../componenets/Text/label'
import { Selction } from '../../componenets/selction'
import {ApplicationFormType} from './createForm'
import {ApplicationFormSchema} from '../../validations'
import { Card } from '../../componenets/Card'
import { Header } from '../../componenets/Text/header'
import { Button } from '../../componenets/Button'
import { ReactComponent as Trash} from '../../assets/icons/Trash.svg'
export const EducationInfo = () => {
    const {values,errors,touched,handleBlur,handleChange}:FormikProps<ApplicationFormType> =useFormikContext()
    const options =[{label:'Associate',value:'Associate'},
    {label:'Bachelor',value:'Bachelor'},
    {label:'Master',value:'Master'},
    {label:'Doctoral',value:'Doctoral'},
    {label:'Professional',value:'Professional'}]
    console.log("here are the va;ues  ",values)
  return (
    <Card style={{display:'flex',backgroundColor:'white',flexWrap: 'wrap',paddingLeft:'20px',paddingRight:'20px',justifyContent:'space-around',marginTop:'2vh'}} >
       
        <Header style={{marginBottom:'3vh',alignSelf:'start'}} size={30} >
            Academic Information
        </Header>
        <FieldArray name="qualifications">
            {({ insert, remove, push }) => (

                <div style={{paddingBottom:'2vh'}}>

               
                {values.qualifications.length > 0 &&
                    values.qualifications.map((qualification, index) => (      
         <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',marginTop:'20px'}}>
            
   
<div style={{display:'flex',justifyContent:'space-between',marginTop:0}}>
         <Label  style={{marginRight:'10px'}}>Institution:</Label>
         <div>
        <input
     style={{height:'3vh'}}
          name={`qualifications.${index}.institution`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.qualifications[index].institution}
        />
 <ErrorMessage name={`qualifications.${index}.institution`}>{(errors:string)=><Label style={{color:'red'}}>{errors}</Label>}</ErrorMessage>
        </div>
    
       
        </div>

      
        <div style={{display:'flex',justifyContent:'space-between',margin:'2ch',marginTop:0}}>
         <Label  style={{marginRight:'10px'}} >Mager:</Label>
         <div>
        <input
         style={{height:'3vh'}}
          name={`qualifications.${index}.mager`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.qualifications[index].mager}
        />
         <ErrorMessage name={`qualifications.${index}.mager`}>{(errors:string)=><Label style={{color:'red'}}>{errors}</Label>}</ErrorMessage>
        </div>
       
       
        </div>
        <div>
        <div style={{display:'flex'}}> <Label  style={{marginRight:'10px'}} >Gender:</Label>
        <Field style={{lineHeight:'0',height:'4vh'}} as="select" name={`qualifications.${index}.degree`}>
            {options.map((element,innerIndex)=><option value ={element.value}> <Label>{element.label}</Label></option>)}
        </Field>
</div>
        <ErrorMessage name={`qualifications.${index}.degree`}>{(errors:string)=><Label style={{color:'red'}}>{errors}</Label>}</ErrorMessage>
</div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:0}}>
         <Label  style={{marginRight:'10px'}}>Country:</Label>
         <div>
        <input
     style={{height:'3vh'}}
          name={`qualifications.${index}.counrty`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.qualifications[index].counrty}
        />
 <ErrorMessage name={`qualifications.${index}.counrty`}>{(errors:string)=><Label style={{color:'red'}}>{errors}</Label>}</ErrorMessage>
        </div>
    
        <Trash style={{marginLeft:'5px',alignSelf:'center'}} fill='red' onClick={()=>remove(index)} width={'15px'} height={'15px'}/>
        </div>
      
        </div>))}
        <Button  color="white" type={'Next'} action={()=>{push({institution:'',degree:'Bachelor',counrty:'',mager:'',})}} name="apply" label="Add" style={{width:'7ch'}}/>
             
        </div>)}
        </FieldArray>
    </Card>
  )
}


