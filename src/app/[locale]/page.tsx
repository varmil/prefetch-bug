import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export default function IndexPage() {
  const t = useTranslations("IndexPage");
  return (
    <>
      <h1>
        <Link href="/world" prefetch={true}>
          {t("title")}
        </Link>
      </h1>
    </>
  );
}
