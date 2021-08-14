//React & Header
import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles'; 
// Components
import Grid from '@material-ui/core/Grid';   
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'; 
import FormControl from '@material-ui/core/FormControl';  
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CheckboxList from '../components/CheckboxList'
import Button from '@material-ui/core/Button';   
import dataPartner from '../data/partner'   
const useStyles = makeStyles(theme => ({ 
    root: {
      // '& .MuiTextField-root ': {
      //   margin: theme.spacing(1), 
      // }, 
      '& .MuiFormControl-root': { 
        width: 300,
        marginTop:10
      },   
      margin: theme.spacing(1), 
      
    },
    group: {
        padding:20,
        marginTop:20, 
        flex:1,
        flexDirection:'row',
        borderRadius:20
    },
    gridCustom:{
        justifyContent:'center',
        alignSelf:'center', 
        margin:20,
    },
    formControl:{
        marginTop:10
    }
    
}));
export default function PageViewer() {
  const classes = useStyles(); 
  const [form, setForm] = React.useState({});  
  const [product, setProduct] = React.useState([]); 
  const [selectedProduct, setSelectedProduct] = React.useState(null);   

  React.useEffect(() => { 
    initData(); 
  }, []);
   
  const initData = () => {  
  };   
  const handleChange = (e, form) => {
    let objForm = form;
    let name = e.target.name;
    let value = e.target.value; 
    objForm[name] = value; 
    setForm(objForm);
    if(name === "partnerlist"){
      let product = dataPartner.find(element => element.id === value);
      setProduct(product.product);
    }
  }; 
  const handleSubmit = (e) =>{
    e.preventDefault();  
    let data = form;
    if(form.partnerlist && selectedProduct){
      alert('Data Submitted : '+JSON.stringify(data));
    }else{
      alert('Please choose the product !')
    }
  } 
  return (
    <div className={classes.root}> 
      <main className={classes.content}> 
        <Grid container >  
          <Grid style={{marginTop:20}} item lg={4}/>
          <Grid style={{marginTop:20}} item lg={4}>
            <Paper className={classes.group} > 
              <form className={classes.container} onSubmit={handleSubmit} >
              <Grid item lg={12}>
                <FormControl>
                    <TextField
                        required 
                        label="Nama Partner"
                        id="namapartner"
                        name="namapartner"
                        onChange={event => handleChange(event, form)}
                        type="text" 
                    />
                </FormControl>
              </Grid>
              <Grid item lg={12}>
                <FormControl>
                    <TextField 
                        required 
                        label="Email"
                        id="email"
                        name="email"
                        onChange={event => handleChange(event, form)}
                        type="email"
                    />
                </FormControl>
              </Grid>
              <Grid item lg={12}>
                <FormControl>
                    <TextField
                        required 
                        label="Nama Lengkap"
                        id="namalengkap"
                        name="namalengkap"
                        onChange={event => handleChange(event, form)}
                        type="text"
                    />
                </FormControl>
              </Grid>
              <Grid item lg={12}>
                <FormControl>
                    <TextField
                        required 
                        label="No Telepon"
                        id="notelp"
                        name="notelp"
                        onChange={event => handleChange(event, form)}
                        type="number"
                    />
                </FormControl>
              </Grid>
              <Grid item lg={12}>
                <FormControl>
                  <InputLabel>Asuransi Partner</InputLabel>
                  <Select 
                    required 
                    labelId="partnerlist"
                    name="partnerlist"
                    id="partnerlist"
                    value={form.partnerlist}
                    onChange={event => handleChange(event, form)}
                  > 
                    {dataPartner && dataPartner.map((data)=>{
                      return <MenuItem value={data.id}>{data.partnername}</MenuItem>
                    })} 
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={12} style={{marginTop:20}}> 
                <InputLabel>Product</InputLabel>
                {product && <CheckboxList 
                  setSelected={setSelectedProduct}
                  dataList={product}
                /> 
                }
              </Grid>

              <Grid item lg={12}>
                <Button type="reset" variant="contained">Batal</Button>
                &nbsp;&nbsp;
                <Button type="submit" variant="contained" color="primary">
                  Kirim
                </Button>
              </Grid>
              </form> 
            </Paper>
          </Grid> 
        </Grid> 
      </main> 
    </div>
  );
}