import React, { useState } from 'react'
import { auth } from '../helpers/Auth'
import { Form } from '@unform/web';
import Input from '../components/Input';
import Container from '@material-ui/core/Container';

const Register = () => {

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    auth(e.email, e.senha)
      .catch(e => setErrorMsg('Revise os campos'))
  }

  return (
    <Container component="main" maxWidth="xs">
      <h1>Registrar</h1>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>E-mail</label>
          <Input className="form-control" placeholder="Email" name="email" />
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
        <button type="submit" className="btn btn-primary">Registrar</button>
      </Form>
    </Container>
  )
}

export default Register;