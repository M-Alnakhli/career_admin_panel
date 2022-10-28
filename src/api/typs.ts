
export type ApplicationStatusType='Created'| 'Completed'| 'Accepted'| 'Rejected'|null
export type  ApplicationListAPIReqType ={
    offset:number,
    pageNumber:number,
    recordsPerPage:number,
    filters:FiltersReqType
}
export type  FiltersReqType ={
    aplicationStatus?:ApplicationStatusType,
carear?:string|null,
applicant?:string|null
}
export type  ApplicationListAPIResType ={applications:ApplicationListItem[],totalRecords:number}

export type ApplicationListItem =ApplicationConfigration&{applicationId?:string} 
export type CareerConfig ={
    positionId?:string|null,
    postion?:string|null,
    location?:string|null,
    type?:string, 


}
export type  CareerListAPIReqType ={ offset:number,
    pageNumber:number,}&CareerConfig
export type  CarearListAPIResType =Array<CareerConfig&{description?:string}>


export type  ApplicationUpdateAPIReqType =ApplicationConfigration&{applicationId?:string}
export type  ApplicationUpdateAPIResType ={
    status:'sucess'|'failed'
}

export type  ApplicationUpdateStatusAPIReqType ={
    status:'Created'| 'Completed'| 'Accepted'| 'Rejected'
}

export type  ApplicationUpdateStatusAPIResType ={
    status:'sucess'|'failed'
}


export type ApplicationDeleteAPIReqType={applicationId?:string}

export type ApplicationDeleteAPIResType={status:'sucess'|'failed'}
export type ApplicationDeleteAPIResqType={applicationId?:string}
export type  ApplicationConfigration ={firstName:string,
    lastName:string,
    age:number,
    posistion:string,
    location:string,
    status:string
    linkedInURL?:string,
    Rusame?:File|string,
    img?:File|string} 
export type  ApplicationCreateAPIReqType= ApplicationConfigration
export type  ApplicationCreateAPIResType ={
applicationId?:string
}

export type  ApplicationEvaluationAPIReqType ={
    firstName:string,
    lastName:string,
    age:number,
    posistion:string,
    location:string,
    status:string|null,
    position:string,
    currentLocation:string,
    linkedInURL:string,
    Rusame:File,


}
export type  ApplicationEvaluationAPIResType ={
score:number,
rusemLink:string,
linkedInLink:string,
firstName:string,
lastName:string


}
export type  SignInAPIReqType ={
    email:string,
    password:string
    
}
export type  SignInAPIResType ={

    status:'sucess'|'failed',
    token?:string,
    role?:'admin'|'user'|null

}


export type  SignUpAPIReqType ={
    userName:string,
    email:string,
    password:string
    
}
export type  SignUpAPIResType ={
    status:'sucess'|'failed',
    token?:string,
    role?:'admin'|'user'|null


}


export type  LogoutAPIReqType ={
 
}
export type  LogoutAPIResType ={
    status:'sucess'|'failed',
    token?:string,
    role?:'admin'|'user'|null

}

export type AuthInfoType={role:'admin'|'user'|null,token:string|null}
export  type AuthContextType ={
    authInfo:AuthInfoType,
    login:(auth:AuthInfoType)=>void|null,
    logout:()=>void
}