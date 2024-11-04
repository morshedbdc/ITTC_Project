import { useTranslation } from "react-i18next";
import { useState } from "react";

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        document.body.dir = i18n.dir();
        setLanguage(lang);
    };

    return (
        <div className="flex">
        {language === "ar" ? (
            <button onClick={() => changeLanguage("en")}>
            En
            </button>
        ) : (
            <button onClick={() => changeLanguage("ar")}>
            Ar
            </button>
        )}
        </div>
    );
}

export default LanguageSwitcher;
