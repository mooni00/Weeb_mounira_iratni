import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-wrapper">
      <form className="login-minimal" onSubmit={(e) => e.preventDefault()}>
        <h1>Se connecter</h1>
        
        <div className="underline-input-group">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="underline-input-group">
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button type="submit" className="btn-purple-full">
          Se connecter
        </button>

        <div className="login-links">
          <a href="#" className="forgot-pass">Mot de passe oublié ?</a>
          <p>Vous n'avez pas de compte ? <br /> 
             Vous pouvez en <a href="#" className="create-link">créer un</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;