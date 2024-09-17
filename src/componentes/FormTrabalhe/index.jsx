import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from "./styles.module.css";

const TrabalheConosco = () => {
    
  const [nomeCompelto, setNomeCompelto] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');

  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  

  const handleCepChange = async (event) => {
    const cepInput = event.target.value.replace(/\D/g, '');
    setCep(cepInput);

    if (cepInput.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepInput}/json/`);
        const data = await response.json();

        if (!data.erro) {
          setLogradouro(data.logradouro || '');
          setBairro(data.bairro || '');
          setCidade(data.localidade || '');
          setUf(data.uf || '');
        } else {
          Swal.fire({
            title: 'Erro',
            text: 'CEP não encontrado.',
            icon: 'error',
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              content: 'my-swal-content'
            },
            width: 'auto',
            padding: '1em'
          });
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append('access_key', '89e7fbe1-af8c-449c-9aa9-9fdfb7a0480e'); // Substitua com sua chave de API real

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: 'Muito bem!',
          text: 'Email enviado com sucesso',
          icon: 'success',
          customClass: {
            container: 'my-swal-container',
            title: 'my-swal-title',
            content: 'my-swal-content'
          },
          width: 'auto',
          padding: '1em'
        });

        // Limpar os campos do formulário
        setNomeCompelto('');
        setEmail('');
        setCelular('');

        setCep('');
        setLogradouro('');
        setBairro('');
        setNumero('');
        setComplemento('');
        setCidade('');
        setUf('');
        setResult('');
      } else {
        console.log('Erro', data);
        setResult(`Erro ao enviar formulário: ${data.message}`);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setResult('Erro ao enviar mensagem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.conteiner}>
        
      <div className={styles.conteinerContet}>
      
      <form className={styles.Form} onSubmit={handleSubmit}>
      

      <div className={styles.tituloDados}>
        <h1 >Seus Dados:</h1>
    </div>


    <div className={styles.FormDados}>

        <div className={styles.formGroup}>
          <label className={styles.labelText} htmlFor="nomeCompelto">Nome Completo:</label>
          <input
            type="text"
            id="nomeCompelto"
            name="nomeCompelto"
            value={nomeCompelto}
            onChange={(e) => setNomeCompelto(e.target.value)}
            placeholder='Digite o seu nome'
            className={styles.inputStyle}  /* Aplicar a classe ao input */
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.labelText}  htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
    </div>

    

</div>
        


<div className={styles.FormEnderecos1}>
        
        <div className={styles.formGroup}>
          <label  presslo className={styles.labelText} htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={cep}
            onChange={handleCepChange}
            maxLength="8"
            required
          />
        </div>

        <div>
          <label htmlFor="logradouro">Logradouro:</label>
          <input
            type="text"
            id="logradouro"
            name="logradouro"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            required
          />
        </div>

        </div>

        <div>
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            name="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="complemento">Complemento:</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="uf">UF:</label>
          <input
            type="text"
            id="uf"
            name="uf"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            maxLength="2"
            required
          />
        </div>
        
       

        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>

        <span>{result}</span>

        
      </form>
      </div>
    </section>
  );
};

export default TrabalheConosco;
