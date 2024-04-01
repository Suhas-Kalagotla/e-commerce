import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userService } from 'services';

export const RouteGuard: React.FC = ({ children }) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState<boolean>(false);

    useEffect(() => {
        authCheck(router.asPath);

        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);
        router.events.on('routeChangeComplete', authCheck)

        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, []);

    function authCheck(url: string) {
        const publicPaths = ['/signin','/signup'];
        const path = url.split('?')[0];
        if (!userService.userValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/signin',
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }

    return authorized ? <>{children}</> : null;
}

