import React from 'react'
import ServiceFeatursForm from './ServiceFeatursForm'
import ServiceDependencyForm from './ServiceDependencyForm';
import ServiceSupportForm from './ServiceSupportForm';
import ServiceTrail from './ServiceTrail';

function ServicesFormHoc({currentService}) {
 switch(currentService){
    case 'Service Features':return <ServiceFeatursForm/>;
    case 'Service Dependency':return<ServiceDependencyForm/>
    case 'Service Support':return <ServiceSupportForm/>
    case 'Service Trail': return <ServiceTrail/>
 }
}
export default ServicesFormHoc;