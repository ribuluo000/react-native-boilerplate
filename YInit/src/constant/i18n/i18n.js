/**
 * Created by nick on 2018/5/4.
 */
import I18n from "react-native-i18n";
import chi_sim from "./locales/chi_sim";
import en from "./locales/en";

I18n.fallbacks = true;

I18n.translations = {
    en,
    chi_sim,
};

I18n.locale = "chi_sim";
// I18n.locale = "en";  //todo 切换为英文

export default I18n;
