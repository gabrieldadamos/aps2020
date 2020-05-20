import React, { useState } from 'react'
import { login } from '../helpers/Auth'
import { Form } from '@unform/web';
import Input from '../components/Input';
import Container from '@material-ui/core/Container';

const Login = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (data) => {
    login(data.email, data.senha)
      .catch(() => {
        setErrorMsg('Usuário ou senha inválidos');
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>E-mail</label>
          <Input className="form-control" placeholder="Email" name="email" variant="outlined" />
        </div>
        <div className="form-group">
          <label>Senha</label>
          <Input type="password" className="form-control" placeholder="Senha" name="senha" />
        </div>
        {
          errorMsg &&
          <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Erro:</span>
            {errorMsg}
          </div>
        }
        <button type="submit" className="btn btn-primary">Login</button>
      </Form>
    </Container>
  )
}

export default Login;