// src/js/utils/cookieconsent-options.js

export async function initCookieConsent() {
    try {
        const CookieConsent = await import('vanilla-cookieconsent');
        
        await new Promise(resolve => setTimeout(resolve, 50));
        
        CookieConsent.run({
            guiOptions: {
                consentModal: {
                    layout: "box",
                    position: "bottom left",
                    equalWeightButtons: true,
                    flipButtons: false
                },
                preferencesModal: {
                    layout: "box",
                    position: "right",
                    equalWeightButtons: true,
                    flipButtons: false
                }
            },
            categories: {
                necessary: {
                    readOnly: true
                },
                analytics: {}
            },
            language: {
                default: "en",
                autoDetect: "browser",
                translations: {
                    en: {
                        consentModal: {
                            title: "Hello traveller, it's cookie time!",
                            description: "Lorem ipsum dolor sit amet...",
                            acceptAllBtn: "Accept all",
                            acceptNecessaryBtn: "Reject all",
                            showPreferencesBtn: "Manage preferences",
                            footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
                        },
                        preferencesModal: {
                            title: "Consent Preferences Center",
                            acceptAllBtn: "Accept all",
                            acceptNecessaryBtn: "Reject all",
                            savePreferencesBtn: "Save preferences",
                            closeIconLabel: "Close modal",
                            serviceCounterLabel: "Service|Services",
                            sections: [
                                {
                                    title: "Cookie Usage",
                                    description: "We use cookies to ensure the basic functionalities..."
                                },
                                {
                                    title: "Strictly Necessary Cookies",
                                    description: "These cookies are essential...",
                                    linkedCategory: "necessary"
                                },
                                {
                                    title: "Analytics Cookies",
                                    description: "These cookies collect information...",
                                    linkedCategory: "analytics"
                                }
                            ]
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error("Error initializing cookie consent:", error);
    }
}