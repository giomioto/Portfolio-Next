import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Giovanni Mioto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.dock}>
      <footer className={styles.footersobre}>
      <a className={styles.footerabout}>  
      My Portfolio
      </a>
      <a className={styles.footerabout}>  Sobre</a>
      <a className={styles.footerabout}>  Projetos</a>
      </footer>
      </main>

      <main className={styles.main}>
      <Image src="/mioto.jpeg" alt="Mioto" width={200} height={200} className={styles.mioto}/>
        <h1 className={styles.title}>
        <a>Giovanni Mioto</a>
        </h1>

        <p>
            Técnico em <a
                href="https://reitoria.ifpr.edu.br/menu-academico/ensino-medio-e-tecnico/informacao-e-comunicacao/tecnico-em-informatica/">Administração </a>
            pelo Instituto Federal do Paraná
        </p>
        <span className={styles.logo}>
            <i class="ai ai-lattes ai-1x"></i> <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K9850157Y8&tokenCaptchar=03AGdBq24rom37oCbtlMUnPFKiNMdHxx_n90ZgWkmPo5hl8gzgQxFmjGhfJXPX3y5RLwjuaChH46RG0gTC4z9r0gqto5MPq2v3bdf-8L-JfbRZV9LqEIlYEmdeuX7fdEbIW8IOj3M7BVY-9XRqmGkaLFlu4a6_tLotl1savaciEi8VOeTbVWdOEfQkjOUifynrKEqthCD5MAgIGmeSbwLwfRzwTPuxpxE_6-apnfbrVhfF7VY-3URSYBIQVuQ-WyNYHQHJNcX5-2Ve-GmFeIgD_AtNmqx-7_Ig--grvykNLc-B4G55RsMxK2wbvzGVqiyf58_PzA5KAsO3uw_bKO6KXIuTHnyA9oIxue_vs3sdxh51VbbD1B6_bf_sLPaAQRu4ZbXRMoNzMJxhhi2cu5U2MCUK3DswaBO4F9hGp0c1QgWCp4AZuxw8-IbGpyafQ53dHUvPeJ1Gn9imAoZLIVcwo5dL7bwdF5u2WzEQg1DHDkIkrkdHI-A7mVHajOoAcHFmmB_SI06rpONxeLkRyy4y-JYxZMU1J1uopQ">Lattes
            </a> &nbsp; &nbsp;
        </span>
      </main>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"/>
      <main className={styles.interesses}>
      <p>
        Interesses: Desenvolvimento de Aplicativos Web e Mobile, e desenvolvimento de Jogos
      </p>
      </main>
      <main className={styles.dock}>
      <footer className={styles.footer}>
      <a>  
      Contact
      </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox"

        >
          <span className={styles.logo}>
          <Image src="/email.svg" alt="Email Logo" width={90} height={30} />
          </span>
          giovanni.mioto@gmail.com
        </a>
        <a
          href="https://github.com/giomioto"

        >
          <span className={styles.logo}>
            <Image src="/github.svg" alt="GitHub Logo" width={90} height={30} />
          </span>
          giomioto
        </a>
      </footer>
      </main>
    </div>
  )
}
//oi