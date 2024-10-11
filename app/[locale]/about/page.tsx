import { useTranslations } from "next-intl";
import {AboutComponent} from "@/app/[locale]/about/about.component";

const AboutPage: React.FC = () => {
  const t = useTranslations("AboutPage");
  return <div>{t("title")}
   <AboutComponent  />
  </div>;
};

export default AboutPage;
