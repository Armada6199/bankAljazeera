import React from 'react'

function test() {
    const form=useForm({
        defaultValues:{
          serviceName:'',
          serviceCode:''
        }
      }) ;
      const {register,handleSubmit,formState}=form;
      const {errors}=formState;
    const mainInfoInputs = [
        { element: <TextField {...register('Service-Name')} sx={{ width: "100%" }} placeholder="Service Name" />,mediumSize:6 },
        { element: <TextField {...register('Service-Name')} sx={{ width: "100%" }} placeholder="Service Code" />,mediumSize:6 },
        { element: <RichTextField />,mediumSize:12 },
        {
          element: (
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Service Type</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Business Banking"
                name="serviceType"
                row
              >
                <FormControlLabel
                  value="Business Banking"
                  sx={{ px: 3 }}
                  control={<Radio />}
                  label="Business Banking"
                />
                <FormControlLabel
                  value="Business Support"
                  sx={{ px: 3 }}
                  control={<Radio />}
                  label="Business Support"
                />
              </RadioGroup>
            </FormControl>
          ),
          mediumSize:6
        },
        {
          element: (
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Financial / Non-Financial Service
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Financial"
                name="Financial"
                row
              >
                <FormControlLabel
                  value="Financial"
                  control={<Radio />}
                  label="Financial"
                />
                <FormControlLabel
                  value="Non-Financial"
                  control={<Radio />}
                  label="Non-Financial"
                />
              </RadioGroup>
            </FormControl>
          ),
          mediumSize:6
        },
        { element: <TextField sx={inputStyle} placeholder="Business Owner " />,mediumSize:6 },
        {
          element: (
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Common Services
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Business Banking"
                name="serviceType"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          ),
          mediumSize:6
        },
        {
          element: (
            <TextField sx={inputStyle} type="text" placeholder="Business Priority " />
          ),
          mediumSize:6
        },
        {
          element: (
            <TextField type="text" sx={inputStyle} placeholder="Business Contacts " />
          ),
          mediumSize:6
        },
        {
          element: (
            <TextField
              type="text"
              sx={inputStyle}
              placeholder="IT Service Owner(s)"
            />
          ),
          mediumSize:6
        },
        {
          element: (
            <TextField type="text" sx={inputStyle} placeholder="IT Contact " />
          ),
          mediumSize:6
        },
      ];
      function onSubmit(data){
        console.log(data);
      }
  return (
    {mainInfoInputs.map((field,i)=>(
        <Grid key={i} item md={field.mediumSize}  onSubmit={handleSubmit(onSubmit)} >
            {field.element}
        </Grid>
    ))}
    <Button type='submit'>Submit</Button>
  )
}

export default test