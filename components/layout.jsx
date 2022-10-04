import React from 'react';
import Footer from './footer';
import MenuContainer from '@/components/menu/menuContainer';
import { NextSeo } from 'next-seo';

const Layout = ({ children, SEOTitle }) => {
    const DEFAULT_TITLE =
        'Kévin Cassar — Fullstack engineer with a perfectionist sense.';
    const DESCRIPTION =
        'Building curated projects and beautiful interfaces with the benefits of cutting-edge technology.';
    return (
        <>
            <NextSeo
                title={SEOTitle}
                titleTemplate="%s — Kévin Cassar"
                defaultTitle={DEFAULT_TITLE}
                description={DESCRIPTION}
                openGraph={{
                    url: 'https://cassarkevin.vercel.app/',
                    title: DEFAULT_TITLE,
                    description: DESCRIPTION,
                    site_name: 'Kévin Cassar',
                    type: 'profile',
                    profile: {
                        firstName: 'Kévin',
                        lastName: 'CASSAR',
                        username: 'Moga',
                        gender: 'male',
                    },
                }}
            />
            <main className="max-w-2xl mx-auto px-4 py-12 sm:pt-40 sm:pb-28">
                <MenuContainer />
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
