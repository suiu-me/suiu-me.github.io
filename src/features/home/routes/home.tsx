/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DefaultLayout } from '@/shared/components/layout/default-layout';
import { Logo, ContactDetails } from "@/features/home/components"

export function Home() {
    return (
        <>
            <DefaultLayout>
                <div className="content-center" css={contentCenterCss}>
                    <h1><Logo /></h1>
                    <p css={css`margin-top: 0;margin-block-start: 0;`}>Code Rain, System Green.</p>
                    <div css={css`margin-top:2rem;`}>
                        <ContactDetails />
                    </div>
                </div>
            </DefaultLayout>
        </>);
}

const contentCenterCss = css`
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1ch;
    height: calc(100vh - 100px);
`
