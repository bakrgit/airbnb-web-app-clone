"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export const ButtonThemeComponent = () => {
  const t = useTranslations("HomePage");
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return <button onClick={handleTheme}>{t("change-theme")}</button>;
};
