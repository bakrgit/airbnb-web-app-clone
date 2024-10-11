"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const ButtonLangComponent = () => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();
  const handleLang = () => {
    if (locale === "en") router.push("/ar");
    if (locale === "ar") router.push("/en");
  };
  return (
    <>
      <button onClick={handleLang}>{t("change-lang")}</button>
    </>
  );
};
