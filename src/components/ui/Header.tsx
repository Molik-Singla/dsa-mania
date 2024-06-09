// Components
import HeaderButtons from "./HeaderButtons";

const Header = () => {
    return (
        <>
            <header className="flex h-20 w-full items-center justify-between bg-secondary-bg px-4 md:px-8">
                <p className="text-xl md:text-2xl">Dsa Krle</p>
                <HeaderButtons />
            </header>
        </>
    );
};
export default Header;
