import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SnackRHandler() {
    const location = useLocation();

    useEffect(() => {
        // Create a URLSearchParams object to read the query parameters from the URL
        const queryParams = new URLSearchParams(location.search);

        // Get the redirectURL parameter from the query string
        const redirectURL = queryParams.get('redirectURL');

        // Function to handle the redirection
        const handleRedirection = () => {
            if (redirectURL) {
                // Create an invisible iframe to test if the app is installed
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = redirectURL;

                // If the app is installed, the iframe will successfully load the URL.
                // If not, we will catch an error and redirect to the Play Store.
                iframe.onload = () => {
                    document.body.removeChild(iframe); // Clean up the iframe after load
                };

                // Attempt to append the iframe to the document to trigger the app open
                document.body.appendChild(iframe);

                // Use a timeout to detect failure to open the app (this indicates the app is not installed)
                setTimeout(() => {
                    if (document.body.contains(iframe)) {
                        document.body.removeChild(iframe); // Remove iframe if it still exists
                        // Redirect to the Play Store if the app is not installed
                        window.location.href = 'https://play.google.com/store/apps/details?id=app.web.banzan_snackr.twa&hl=en';
                    }
                }, 3000); // 1 second timeout to determine if the app opened successfully
            }
        };

        handleRedirection();
    }, [location]);

    const _style = {
        policy_container: {
            position: 'fixed',
            width: '100%',
            marginTop: '50px',
            height: '100%',
            overflowY: 'scroll',
            overflowX: 'hidden'
        },
        hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '95%',
        },
    };

    return (
        <div className="Maincontainer">
            <div style={_style.policy_container}>
                <div style={_style.hero_container}>
                    <div className="space-50"></div>
                    <div className="space-50"></div>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col col-12 h3 text-grey text-center font-weight-bold">
                                    Redirecting...
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
