import { useDropzone } from 'react-dropzone';
import { FiUpload, FiInfo } from 'react-icons/fi';
import styles from './Toolbar.module.css';

const Toolbar = ({ onFileLoad }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] },
    onDrop: (files) => {
      if (files.length) {
        const file = files[0];
        const url = URL.createObjectURL(file);
        onFileLoad({ url, file });
      }
    },
  });

  return (
    <div className={styles.toolbar}>
      <div
        {...getRootProps()}
        className={`${styles.dropzone} ${isDragActive ? styles.dragActive : ''}`}
      >
        <input {...getInputProps()} />
        <FiUpload className={styles.icon} />
        <span>{isDragActive ? 'Отпустите файл' : 'Загрузить PNG / JPG'}</span>
      </div>
      <div className={styles.info}>
        <FiInfo className={styles.iconSmall} />
        <span>Поддерживаются PNG, JPG</span>
      </div>
    </div>
  );
};

export default Toolbar;