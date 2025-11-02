import Navbar from "pdfequips-navbar/NavBar"

export const HeaderWrapper = ({ lang }: { lang: string }) => {
    return (
        <header>
            <Navbar path="" lang={lang ? lang : ""} />
        </header>
    )
}