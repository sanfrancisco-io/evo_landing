import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import ActionButton from '@/shared/ActionButton';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
};

const linkConfigs: Array<{ page: string }> = [
    { page: 'Home' },
    { page: 'Benefits' },
    { page: 'Our classes' },
    { page: 'Contact us' },
];

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    const flexBetween = 'flex items-center justify-between';
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
    const navbarBg = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

    return (
        <nav>
            <div
                className={`${flexBetween} ${navbarBg} fixed top-0 z-30 w-full py-6 `}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16 `}>
                        {/* left side */}
                        <img alt='logo' src={Logo} />

                        {/* right side */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div
                                    className={`${flexBetween} gap-8 text-sm `}
                                >
                                    {linkConfigs.map((link) => (
                                        <Link
                                            key={link.page}
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                            page={link.page}
                                        />
                                    ))}
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}
                                    >
                                        Become a Member
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className='rounded-full bg-emerald-600 p-2 shadow-xl'
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className='h-6 w-6 text-white' />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* mobile menu modal */}

            {!isAboveMediumScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-full bg-primary-100 drop-shadow-xl'>
                    {/* close icon */}
                    <div className='flex justify-end p-12 '>
                        <button
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                            className='rounded-full bg-secondary-500 p-2 shadow-2xl'
                        >
                            <XMarkIcon className='h-6 w-6 text-red-900' />
                        </button>
                    </div>

                    {/* menu items */}
                    <div className='ml-[33%] flex flex-col gap-10 text-2xl font-bold'>
                        {linkConfigs.map((link) => (
                            <Link
                                key={link.page}
                                selectedPage={selectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                                setSelectedPage={setSelectedPage}
                                page={link.page}
                            />
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
