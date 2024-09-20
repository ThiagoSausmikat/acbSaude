import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from "./styles.module.css";

const FaleConosco = () => {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');

    const formatarTelefone = (value) => {
        const apenasNumeros = value.replace(/\D/g, '');
        const partes = [];
        if (apenasNumeros.length > 2) {
            partes.push(`(${apenasNumeros.slice(0, 2)})`);
            if (apenasNumeros.length > 6) {
                partes.push(apenasNumeros.slice(2, 7));
                partes.push('-' + apenasNumeros.slice(7, 11));
            } else {
                partes.push(apenasNumeros.slice(2, 6));
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('nomeCompleto', nomeCompleto);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('mensagem', event.target.mensagem.value); // Obtendo o valor do textarea diretamente
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
                setNomeCompleto('');
                setEmail('');
                setTelefone('');
                event.target.mensagem.value = ''; // Limpa o textarea diretamente
                setResult('');
            } else {
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
                        <h2 className={styles.subTitulo}>Preencha o formulário e nos envie uma mensagem:</h2>
                    </div>

                    <div className={styles.FormDados}>
                        <div>
                            <label htmlFor="nomeCompleto" className={styles.labelText}>Nome Completo:</label>
                            <input
                                type="text"
                                id="nomeCompleto"
                                name="nomeCompleto"
                                value={nomeCompleto}
                                onChange={(e) => setNomeCompleto(e.target.value)}
                                placeholder='Digite o seu nome'
                                className={styles.inputStyle}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className={styles.labelText}>Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Digite o seu email'
                                className={styles.inputStyle}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="telefone" className={styles.labelText}>Telefone:</label>
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

                    <div  className={styles.FormDados2}>
                    <div className={styles.formGroup}>
                            <label htmlFor="mensagem" className={styles.labelText}>Mensagem</label>
                            <textarea
                                className={styles.inputStyle2}
                                id="mensagem"
                                name="mensagem"
                                rows="5"
                                placeholder='Digite a sua mensagem'
                                
                                required
                            />
                        </div>
                    </div>

                    <button className={styles.button} type="submit" disabled={loading}>
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

export default FaleConosco;
