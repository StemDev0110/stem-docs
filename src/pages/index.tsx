import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import StemEnCueva from '../../static/img/stem-en-ceuva-1280x720.png'
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Stem Projects
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            See Documents and Investigations 📑
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <div className="p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-4">Hi, I'm StemVirus! 👋</h1>
        <p className="mb-4">
          I'm passionate about technology, research, philosophy, and psychology. Originally from Venezuela, I speak Spanish fluently. 🌎🇻🇪
        </p>
        <p>
          I love programming with various technologies. Feel free to explore my research and documents here! 🚀💻
        </p>
        <h2>Create amazing things</h2>
        <p className="mb-4">
          In this page you will find several things created by me, explaining them, I as a scientist I take care to investigate certain areas and publish my research here, in the investigation section.        </p>
        <img src={StemEnCueva} />
        <h2>About me</h2>
        <p>I'm passionate about programming, research and philosophy.

          I like to experiment and manage projects, I program in several languages and I'm currently studying french, english and german.</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href='mailto:virusstem.contact@gmail.com'>
            Contact Me
          </a>
        </div>
        <h2>Drop me a line 👋</h2>
        <p className='p-2 bg-gray-200 rounded'>Email - virusstem.contact@gmail.com | Discord - @stemvirus</p>
      </div>
    </Layout>
  );
}
