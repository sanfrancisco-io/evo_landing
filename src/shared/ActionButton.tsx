import React, { Children } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    children: React.ReactNode;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink
            className='cursor-pointer rounded-md bg-secondary-500 px-10 py-2 transition duration-300
			hover:bg-primary-500 hover:text-white'
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    );
};

export default ActionButton;
