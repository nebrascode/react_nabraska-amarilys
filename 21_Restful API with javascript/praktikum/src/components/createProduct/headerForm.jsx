import { useState } from "react";
import bsImage from "../../assets/bootstrap-logo.svg";

const HeaderForm = () => {
    // State for change Language
    const [ language, setLanguage ] = useState("en");

    // Handle Language
    const handleLanguage = () => {
        const newLanguage = language === 'en' ? 'id' : 'en';
        setLanguage(newLanguage);
    };

    const article = {
        title: {
            id: "Buat Akun",
            en: "Create Account",
        },
        description: {
            id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
            en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
        },
    };

    return (
        <section className='flex flex-col gap-2 justify-center items-center'>
            {/* Image & Title */}
            <div className="flex flex-col gap-2 justify-center items-center">
                <img src={bsImage} alt="bs-image" />
                <h1 className="font-bold text-4xl leading-10 text-center">
                    {language === 'en' ? article.title.en : article.title.id}
                </h1>
            </div>

            {/* Desc */}
            <div className="text-center mt-4 md:mt-8">
                <p className="mx-auto text-sm lg:text-base lg:leading-8">
                    {language === 'en' ? article.description.en : article.description.id}
                </p>
            </div>

            {/* Change Language */}
            <div className="mt-4 md:mt-8">
                <button
                    onClick={handleLanguage}
                    type="button"
                    className="text-white bg-[#0D6EFD] hover:bg-blue-800 focus:ring-4 focus:ring-[#0D6EFD] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                    Change to {language === 'en' ? 'Indonesia' : 'English'}
                </button>
            </div>
        </section>
    )

}

export default HeaderForm;