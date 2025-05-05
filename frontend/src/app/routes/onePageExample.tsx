import React from "react";


import { AuthProvider, useAuth, type AuthProviderProps } from 'react-oidc-context';

const oidcConfig: AuthProviderProps = {
    authority:
        "https://auth.traberph.de/application/o/authorize", // Your OIDC provider URL
    client_id: "RS52eMwMS4xsySHJSVCQ1LCZZR8UAqVcttglr1LI", // Your client ID
    // redirect_uri: `oauthdebugger.com/debug`, // this works
    redirect_uri: `${window.location.origin}/example`, // Callback URL after authentication -- does not work
    post_logout_redirect_uri: `${window.location.origin}/example`, // URL to redirect to after logout
    response_type: "code",
    scope: "openid profile email", // Scopes you need
    metadata: {
        authorization_endpoint: "https://auth.traberph.de/application/o/authorize/",
        token_endpoint: `${window.location.origin}/api/token`, // Use the proxy server
        userinfo_endpoint: "https://auth.traberph.de/application/o/userinfo/",
        end_session_endpoint: "https://auth.traberph.de/application/o/pushups/end-session/",
        issuer: "https://auth.traberph.de/application/o/pushups/",
    },
    // onSigninCallback: onSigninCallback,
};
function ExampleApp() {
    const auth = useAuth();

    if (auth.isLoading) {
        return <div className="text-gray-600">Processing authentication...</div>
    }

    if (auth.error) {
        console.error(auth.error);
        if (auth.error.message === "Method Not Allowed (405): {}") {
            return (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Todo - add token endpoint to backend and handle authentication
                </div>
            );
        }
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Oops... {auth.error.source} caused {auth.error.message}
            </div>
        )
    }

    if (auth.isAuthenticated) {
        return (
            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Hello {auth.user?.profile.sub}{" "}

                </h2>
                <div className="mt-8 space-y-6">
                    <button
                        onClick={() => void auth.removeUser()}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Log out
                    </button>
                </div>
            </div>
        );
    }

    // return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
    return (
        <>
            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in 
                </h2>
            </div>
            <div className="mt-8 space-y-6">
                <button
                    onClick={() => void auth.signinRedirect()}
                    // disabled={isLoading}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign in
                </button>
            </div>
        </>

    );
}

interface PageProps {
    children: React.ReactNode;
}
function Page({ children }: PageProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">

                {children}
            </div>
        </div>
    );
}

function OnePageExample() {
    return (
        <AuthProvider {...oidcConfig}>
            <Page>
                <ExampleApp />
            </Page>
        </AuthProvider>
    )
}
export default OnePageExample;