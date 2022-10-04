import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, TextField, Container, Stack, Modal, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Footer from '../componentes/Footer';
import Cargando from '../componentes/Cargando';
import Header from '../componentes/Header';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';



const Registro = () => {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const [cargar, setCargar] = useState(true);
    const [datosRegistro, setDatosRegistro] = useState({
        logonId: null,
        logonPassword: null,
        logonPasswordVerify: null,
        firstName: null,
        lastName: null,
        email1: null,
        phone1: null,
        demographicField7: null,
        showlogonPassword: false,
        showlogonPasswordVerify: false,
    });

    useEffect(() => {
        console.log(datosRegistro)
        const cargar = () => {
            setTimeout(() => {
                setCargar(false);
            }, 1000);
        }

        cargar();
    }, []);
    
    const enviar = () => {
        console.log(datosRegistro)

        //return history.push(`/${marca}/Registro/Validar`)
    }


    const handleChangeForm = (prop) => (e) => {
        console.log(datosRegistro)
        console.log(prop);
        console.log(e.target.value);
        if (prop === 'logonId') {
            console.log("ee")
            setDatosRegistro({
                ...datosRegistro,
                email1: e.target.value,
                [prop]: e.target.value
            });
        } else {
            setDatosRegistro({
                ...datosRegistro,
                [prop]: e.target.value
            });
        }
        console.log(datosRegistro)
    }

    const handleClickShowlogonPassword = () => {
        console.log(datosRegistro);
        setDatosRegistro({
            ...datosRegistro,
            showlogonPassword: !datosRegistro.showlogonPassword,
        });
        console.log(datosRegistro);
    };

    const handleMouseDownlogonPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowlogonPasswordVerify = () => {
        console.log(datosRegistro);
        setDatosRegistro({
            ...datosRegistro,
            showlogonPasswordVerify: !datosRegistro.showlogonPasswordVerify,
        });
        console.log(datosRegistro);
    };

    const handleMouseDownlogonPasswordVerify = (event) => {
        event.preventDefault();
    };
    return (
        <Container className={`${marca}`}>
            {
                cargar ?
                    <Cargando /> :
                    <div>
                        <Header />
                        <Stack sx={{ marginTop: '10px' }} spacing={2}>
                            <Breadcrumbs sx={{ fontSize: '15px' }} className='tamanioLetraNav tipoLetraTexto' separator="›" aria-label="breadcrumb">
                                <Link underline="hover" key="1" color="inherit" href={`/${marca}`} >
                                    Inicio
                                </Link>
                                <Link
                                    underline="hover"
                                    key="2"
                                    color="#aeaeae"
                                >
                                    Registro
                                </Link>
                            </Breadcrumbs>
                        </Stack>
                        <Container className='formulario' sx={{ marginTop: '10px', padding: '15px', border: '1px solid #bcbcbc', borderRadius: '20px', textAlign: 'center' }}>
                            <Typography className='color tipoLetraTitulo' variant='h5' component='h2'>
                                Registrarse
                            </Typography>
                            <Box
                                component='form'
                                sx={{
                                    '& > :not(style)': { m: 1.5, width: '30ch' },
                                }}
                                noValidate
                                autoComplete='off'
                            >
                                <TextField
                                    noValidate
                                    required
                                    id='Nombre'
                                    label='Nombre'
                                    name='firstName'
                                    onChange={handleChangeForm('firstName')}
                                />
                                <TextField
                                    noValidate
                                    required
                                    id='Apellido'
                                    name='lastName'
                                    label='Apellido'
                                    onChange={handleChangeForm('lastName')}
                                />
                                <TextField
                                    noValidate
                                    required
                                    id='Cedula'
                                    name='demographicField7'
                                    label='Cédula'
                                    onChange={handleChangeForm('demographicField7')}
                                />
                                <TextField
                                    noValidate
                                    required
                                    id='Apellido'
                                    name='phone1'
                                    label='Apellido'
                                    type='number'
                                    onChange={handleChangeForm('phone1')}
                                />
                                <TextField
                                    noValidate
                                    required
                                    id='Correo'
                                    name='logonId'
                                    label='Correo'
                                    onChange={handleChangeForm('logonId')}
                                />
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="logonPassword">Clave *</InputLabel>
                                    <OutlinedInput
                                        id="logonPassword"
                                        type={datosRegistro.showlogonPassword ? 'text' : 'password'}
                                        name='logonPassword'
                                        value={datosRegistro.logonPassword}
                                        onChange={handleChangeForm('logonPassword')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="logonPassword"
                                                    onClick={handleClickShowlogonPassword}
                                                    onMouseDown={handleMouseDownlogonPassword}
                                                    edge="end"
                                                >
                                                    {datosRegistro.showlogonPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Clave *"
                                    />
                                </FormControl>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="logonPasswordVerify">Clave *</InputLabel>
                                    <OutlinedInput
                                        id="logonPasswordVerify"
                                        type={datosRegistro.showlogonPasswordVerify ? 'text' : 'password'}
                                        name='logonPasswordVerify'
                                        value={datosRegistro.logonPasswordVerify}
                                        onChange={handleChangeForm('logonPasswordVerify')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="logonPasswordVerify"
                                                    onClick={handleClickShowlogonPasswordVerify}
                                                    onMouseDown={handleMouseDownlogonPasswordVerify}
                                                    edge="end"
                                                >
                                                    {datosRegistro.showlogonPasswordVerify ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Clave *"
                                    />
                                </FormControl>
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Button size="medium" className='tamanioBoton bgColor tipoLetraTitulo' sx={{ marginBlockEnd: '3px', width: 275 }} variant='contained' onClick={enviar} >
                                        Enviar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                        <Footer />
                    </div>
            }
        </Container>

    );
}

export default Registro
