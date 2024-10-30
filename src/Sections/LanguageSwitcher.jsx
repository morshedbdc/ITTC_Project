import { GoArrowSwitch } from "react-icons/go";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="flex">
        <button onClick={() => changeLanguage("en")}>En</button>
        <GoArrowSwitch className="m-1"/>
        <button onClick={() => changeLanguage("ar")}>Ar</button>
        </div>
    );
}

export default LanguageSwitcher;
