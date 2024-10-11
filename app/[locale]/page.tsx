import Image from "next/image";
import "./about.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ButtonLangComponent } from "@/app/[locale]/button-lang.component";
import { ButtonThemeComponent } from "@/app/[locale]/button-theme.component";
export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="bg-custom ">
      <h1 className="text-color">{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <ButtonLangComponent />
      <ButtonThemeComponent />
    </main>
  );
}
