/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Head } from "../head"
import { Header, Footer } from "./components";

type ContentLayoutProps = {
    children: React.ReactNode;
    title?: string;
    description?: string;
};

export function DefaultLayout({ children, title, description }: ContentLayoutProps) {
    return (
        <>
            <Head title={title} description={description} />
            <div className="container" css={containerCss}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}


const containerCss = css`
  min-height: 100vh;
  min-height: 100dvh;
`