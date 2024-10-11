import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {ThemeProvider} from "next-themes";
import {Almarai} from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
    title: "Aribnb - Clone",
    description: "Next.js + Tailwind CSS + Next-Intl + Next-Auth",
    keywords: "Next.js, Tailwind CSS, Next-Intl, Next-Auth",
}
const almarai = Almarai({subsets: ["arabic"], weight: ['300', '400', '700', '800']});

export default async function LocaleLayout({
                                               children,
                                               params: {locale},
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <body className={almarai.className}>
        <ThemeProvider enableSystem={false}>
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
