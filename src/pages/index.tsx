import HomePageContent from "modules/home/HomePageContent";
import { GetServerSideProps } from 'next';
import { Directus } from "@directus/sdk";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
 
const directus = new Directus("https://03jtp3fs.directus.app");

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {

  const landing = await directus.items('Landing').readByQuery({
    fields: ['translations.*'],
    deep: {
      translations: {
        _filter: {
          languages_code: locale === 'en' ? 'en-US' : 'es-ES'
        }
      }/* ,
      headerTopics: {
        translations: {
          _filter: {
            languages_code: locale === 'en' ? 'en-US' : 'es-ES'
          }
        }
      } */
    }
  });

  const headerTopics = await directus.items('Landing_Header_Topic').readByQuery({
    fields: ['translations.link', 'translations.label'],
    deep: {
      translations: {
        _filter: {
          languages_code: locale === 'en' ? 'en-US' : 'es-ES'
        }
      }
    }
  });

  const data = [headerTopics.data];

  return {
    props: {
      data: data,
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
export default HomePageContent
