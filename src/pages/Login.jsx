import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useState } from 'react';


const Login = () => {

    const [mostrarSenha, setMostrarSenha] = useState(true);
    


    return ( 
        <>
            <div className='bg-primary-500 h-screen flex align-items-center justify-content-center px-3'>
                <form className='col-12 md:col-3 surface-0 p-3 border-round-md '>
                    <h3 className='text-center mb-3 text-4xl'>Seja bem vindo</h3>
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                    <InputText 
                        id='email'
                        type='email'
                        placeholder='email@email.com' 
                        className='mb-3 w-full'
                    />

                    <label htmlFor="senha">Senha</label>
                    <div className='mb-3'>
                    <IconField>
                        <InputIcon 
                        onClick={() => setMostrarSenha(!mostrarSenha)}
                        className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                        />
                        <InputText
                            id='senha'
                            type={mostrarSenha ? 'text' : 'password'}
                            placeholder='********'
                            className=' w-full'
                        />
                    </IconField>
                    </div>
                    <Button label="Entrar" 
                        type='submit'
                        className='w-full'
                    />
                 
                </form>
            </div>
        </>
     );
}
 
export default Login;