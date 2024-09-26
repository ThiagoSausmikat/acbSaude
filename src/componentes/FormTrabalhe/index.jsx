import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from "./styles.module.css";

const TrabalheConosco = () => {
  const [nomeCompelto, setNomeCompelto] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const formatarTelefone = (value) => {
    // Remove todos os caracteres não numéricos
    const apenasNumeros = value.replace(/\D/g, '');

    // Formata o telefone
    const partes = [];
    if (apenasNumeros.length > 2) {
      partes.push(`(${apenasNumeros.slice(0, 2)})`); // Código de área
      if (apenasNumeros.length > 6) {
        partes.push(apenasNumeros.slice(2, 7)); // Primeiros 5 dígitos
        partes.push('-' + apenasNumeros.slice(7, 11)); // Últimos 4 dígitos
      } else {
        partes.push(apenasNumeros.slice(2, 6)); // Apenas 4 dígitos
      }
    } else {
      partes.push(apenasNumeros);
    }
    return partes.join(' ');
  };

  const handleTelefoneChange = (event) => {
    const formattedPhone = formatarTelefone(event.target.value);
    setTelefone(formattedPhone);
  };

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
    formData.append('access_key', '2dd8d521-e7b7-46ed-a5ac-b5a7adbeb7f8'); // Substitua com sua chave de API real

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
        setTelefone('');
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
            <h2 className={styles.subTitulo}>SEUS DADOS:</h2>
          </div>

          <div className={styles.FormDados}>
            <div className={styles.FormDados1}>
            <div>
              <label htmlFor="nomeCompelto">Nome Completo:</label>
              <input
                type="text"
                id="nomeCompelto"
                name="nomeCompelto"
                value={nomeCompelto}
                onChange={(e) => setNomeCompelto(e.target.value)}
                placeholder='Digite o seu nome'
                className={styles.inputStyle}
                required
              />
            </div>

            <div >
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Digite o seu email'
                className={styles.inputStyleEmail}
                required
              />
            </div>
            </div>

            <div >
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={telefone}
                onChange={handleTelefoneChange}
                placeholder='Digite o seu melhor telefone'
                className={styles.inputStyle}
                required
              />
            </div>
            
          </div>
          

          <div className={styles.tituloDados}>
            <h2 className={styles.subTitulo}>ENDEREÇO:</h2>
            
          </div>

          <div className={styles.FormEndereco}>
            <div className={styles.FormEndereco1}>
              <div>
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={cep}
                onChange={handleCepChange}
                placeholder='Digite o seu CEP'
                className={styles.inputStyle}
                maxLength="8"
                required
              />
            </div>

            <div>
              <label htmlFor="logradouro">Logradouro:</label>
              <input
                className={styles.inputStyleLogradouro}
                type="text"
                id="logradouro"
                name="logradouro"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
                placeholder='Digite o seu logradouro'
                required
              />
            </div>

            </div>
            </div>
          

          <div className={styles.FormEndereco}>
            <div className={styles.FormEndereco1}>
            <div>
              <label htmlFor="bairro">Bairro:</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder='Digite o seu bairro'
                className={styles.inputStyle}
                required
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
                placeholder='Digite a sua cidade'
                className={styles.inputStyleCidade}
                required
              />
            </div>

 


            </div>
            


          </div>

          <div className={styles.FormEndereco}>
          <div className={styles.FormEndereco1}>
          <div>
              <label htmlFor="uf">UF:</label>
              <input
                type="text"
                id="uf"
                name="uf"
                value={uf}
                onChange={(e) => setUf(e.target.value)}
                placeholder='Digite o seu estado'
                className={styles.inputStyle}
                maxLength="2"
                required
              />
            </div>
          <div>
              <label htmlFor="numero">Número:</label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder='Digite o seu numero'
                className={styles.inputStyleNumero}
                required
              />
            </div>
            </div>
          <div>
              <label htmlFor="complemento">Complemento:</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                placeholder='Digite o seu complemento'
                className={styles.inputStyle}
              />
            </div>
            

          </div>

          <button className={styles.button}type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
            
            <div className={styles.retangulo}>
            <div className={styles.roundedRectangle} />
            </div>
          

          <span>{result}</span>
          
        </form>

        
      </div>
    </section>
  );
};

export default TrabalheConosco;
