import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const googleTranslateInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,pt,ar,es,de,fr,ja,zh-CN,ko",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = googleTranslateInit;

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="relative z-50">
      <div id="google_translate_element"  />
    </div>
  );
};

export default GoogleTranslate;
