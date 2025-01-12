import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>

      <form className={`form-information ${isLogin ? '' : 'form-grid'}`}>
        {!isLogin && (
            <>
            <div className="input-group">
                <label htmlFor="name">Nome</label>
                <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Digite seu nome"
                />
            </div>

            <div className="input-group">
                <label htmlFor="phone">Telefone</label>
                <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Digite seu telefone"
                />
            </div>
            </>
        )}

        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Digite seu email"
            />
        </div>

        <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Digite sua senha"
            />
        </div>

        {!isLogin && (
            <>
            <div className="input-group">
                <label htmlFor="address">Endereço</label>
                <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="Digite seu endereço"
                />
            </div>

            <div className="input-group">
                <label htmlFor="cep">CEP</label>
                <input
                type="text"
                id="cep"
                name="cep"
                required
                placeholder="Digite seu CEP"
                />
            </div>

            <div className="input-group">
                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                placeholder="Confirme sua senha"
                />
            </div>

            <div className="input-group">
                <label htmlFor="photo">Foto</label>
                <input
                type="file"
                id="photo"
                name="photo"
                required
                accept="image/*"
                />
            </div>
            </>
        )}

    </form>
        <button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</button>


      <div className="toggle">
        <p>
          {isLogin ? 'Não tem uma conta? ' : 'Já tem uma conta? '}
          <span onClick={toggleForm} className="toggle-btn">
            {isLogin ? 'Cadastre-se' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
