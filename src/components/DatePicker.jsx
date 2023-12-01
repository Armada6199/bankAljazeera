import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default function CustomDatePicker({title}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{padding:'0'}}  components={['DatePicker']}>
        <DatePicker  sx={{width:'100%',height: "60px"}} label={title}  />
      </DemoContainer>
    </LocalizationProvider>
  );
}
