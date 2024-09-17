import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig'; // Certifique-se de que a configuração do Firebase está correta
import styles from "./styles.module.css";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadFiles = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => {
          console.error('Erro no upload:', error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            resolve(url);
          });
        }
      );
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (file) {
      try {
        const fileUrl = await uploadFiles(file);
        Swal.fire({
          title: 'Arquivo Enviado!',
          text: `Arquivo enviado com sucesso!`,
          icon: 'success',
          confirmButtonText: 'OK',
          customClass: {
            container: 'my-swal-container',
            title: 'my-swal-title',
            content: 'my-swal-content'
          },
          width: 'auto',
          padding: '1em'
        });
      } catch (error) {
        Swal.fire({
          title: 'Erro',
          text: 'Erro ao enviar arquivo.',
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            container: 'my-swal-container',
            title: 'my-swal-title',
            content: 'my-swal-content'
          },
          width: 'auto',
          padding: '1em'
        });
      }
    } else {
      Swal.fire({
        title: 'Nenhum Arquivo',
        text: 'Nenhum arquivo selecionado.',
        icon: 'warning',
        confirmButtonText: 'OK',
        customClass: {
          container: 'my-swal-container',
          title: 'my-swal-title',
          content: 'my-swal-content'
        },
        width: 'auto',
        padding: '1em'
      });
    }

    setLoading(false);
  };

  return (
    <section className={styles.conteiner}>
      <div className={styles.conteinerContet}>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.labelText} htmlFor="file">Anexar Arquivo:</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {progress > 0 && <p>Carregamento: {progress}%</p>}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Upload;
