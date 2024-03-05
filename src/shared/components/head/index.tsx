import { SITE_NAME } from '@/config';
import { Helmet } from 'react-helmet-async';

type HeadProps = {
    title?: string;
    description?: string;
};

export function Head ({ title = '', description = '' }: HeadProps) {
    return (
        <Helmet>
            <title>{title ? `${title} | ${SITE_NAME}` : `${SITE_NAME}`}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}