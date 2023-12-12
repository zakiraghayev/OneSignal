export const oneSignalConfig = {
    appId: process.env.REACT_APP_ONESIGNAL_APP_ID,
    allowLocalhostAsSecureOrigin: true, // Allows testing on localhost
    promptOptions: {
        // Customizes the prompt options
        slidedown: {
            enabled: true,
            actionMessage: "We'd like to show you notifications for the latest news and updates.",
            acceptButtonText: 'ALLOW',
            cancelButtonText: 'NO THANKS',
        },
    },
    welcomeNotification: {
        // Welcome notification message after subscribing
        title: 'Welcome!',
        message: 'Thanks for subscribing to notifications!',
    },
    notifyButton: {
        // Control for the notify button
        enable: true, // Set to false to hide
        size: 'medium', // 'small', 'medium', or 'large'
        theme: 'default', // 'default' or 'inverse'
        position: 'bottom-right', // 'bottom-left' or 'bottom-right'
        prenotify: true, // Show an icon with 1 unread message for first-time site visitors
        showCredit: false, // Hide the OneSignal logo
        text: {
            'tip.state.unsubscribed': 'Subscribe to notifications',
            'tip.state.subscribed': "You're subscribed to notifications",
            'tip.state.blocked': "You've blocked notifications",
            'message.prenotify': 'Click to subscribe to notifications',
            'message.action.subscribed': 'Thanks for subscribing!',
            'message.action.resubscribed': "You're subscribed to notifications",
            'message.action.unsubscribed': "You won't receive notifications again",
        },
        colors: {
            'circle.background': 'rgb(60,64,67)',
            'circle.foreground': 'white',
            'badge.background': 'rgb(60,64,67)',
            'badge.foreground': 'white',
            'badge.bordercolor': 'white',
            'pulse.color': 'white',
            'dialog.button.background.hovering': 'rgb(60,64,67)',
            'dialog.button.background.active': 'rgb(60,64,67)',
            'dialog.button.background': 'rgb(60,64,67)',
            'dialog.button.foreground': 'white',
        },
    },
    // Other options can be added here as needed
};
