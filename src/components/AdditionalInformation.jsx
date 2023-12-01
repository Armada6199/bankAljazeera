import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
const informationColStyle={display:'flex',flexDirection:'column',justifyContent:'flex-start',gap:'1.5em'}
const additionalDetails=[
    {title:' Service Hours',description:'Service Hours'},
    {title:'Channel / Delivery',description:'Channel / Delivery'},
    {title:' Service Reviews',description:'Service Reviews'},
    {title:'Service Days',description:'Mohamad Abdin'},
    {title:'Service Delivery Methods ',description:'Service Delivery Methods '},
    {title:'Service Qualification',description:'Service Qualification'},
    {title:'Service Procedures',description:'Service Procedures'},
]
function AdditionalInformation() {
  return (
    <Grid container spacing={4}>
        {additionalDetails.map(data=>(
            <Grid key={data.title} item xs={12} sm={6} md='4'>
                 <Typography variant="p" color="GrayText" component="p">
                  {data.title}
                </Typography>
                <Typography variant="h6" color="black" component="p">
                  {data.description}
                </Typography>
            </Grid>
        ))}
    </Grid>
  )
}
export default AdditionalInformation