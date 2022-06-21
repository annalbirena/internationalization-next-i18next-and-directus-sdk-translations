import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';


export function MinskyLandingHeader({links}: any) {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <>
      <nav>
        {links.map((link: { label: string, link: string }) => {
          return (
            <Link href={`/${link.link}`} key={link.label}>
              <a style={{ display: 'block' }} href={link.link}>
                {link.label}
              </a>
            </Link>
          )
        })
        }
      </nav>
      <button>{t('contact-btn')}</button>
      <Link
        href='/'
        locale={router.locale === 'en' ? 'es' : 'en'}
      >
        <button>
          {t('change-locale')}
        </button>
      </Link>
    </>
  )
}