import { MinskyLandingHeader } from "components/ui/Header";

const HomePageContent = ({data}: any) => {

  const initialData = data[0]

  const headerTopicsTranslations = initialData.map((item: any) => {
    return item.translations
  })

  const links = headerTopicsTranslations.map((item: any) => {
    return item[0]
  })

  console.log(data)

  return (
    <>
      <MinskyLandingHeader links={links} />
    </>
  )
}

export default HomePageContent;