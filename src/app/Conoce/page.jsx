import Image from 'next/image';
import styles from './conoce-a.module.css'
import Button from '@/app/components/Button/button';


export default function Conoce() {
  return (
   <>
      <h1>Conoce a ... decimotercera doctor</h1>
      <div className={styles.imgDoctress}>
        <Image
          src="/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg"
          width={260}
          height={390}
          alt="Futura Doctor Who"
        />
      </div>
      <div className={styles.infoDoctress}>
        <h1 className={styles.titleDoctress}>Conoce a ... decimotercera doctor</h1>
        <p className={styles.descriptionDoctress}>
        Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.
        </p>
        <Button/>
      </div>
      </>
  );
}