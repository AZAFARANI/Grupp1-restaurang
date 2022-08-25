require("dotenv").config();
const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
});

async function sendMail(emailTo, subject, text, html = "<span></span>") {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAUTH2",
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailData = {
            from: "Tramonto",
            to: emailTo,
            subject: subject,
            text: text,
            html: html,
        };

        const result = await transporter.sendMail(mailData);
        return result;
    } catch (error) {
        return error;
    }
}

function createMailHtml(booking) {
    const date = new Date(booking.timestamp);
    return `
        <div>
            <h2>Välkommen till Tramonto!</h2>
            <hr/>
            <p>Här kommer din bokning:</p>
            <ul>
                <li>Boknings ID: ${booking._id}</li>
                <li>Antal personer: ${booking.guestCount}st.</li>
                <li>Du har bokat bord den ${date.toLocaleDateString()} klockan ${date.toLocaleTimeString()}.</li>
            </ul
            <a href="https://www.google.com">Ändra bokning</a>
        </div>   
    `;
}

module.exports = {
    sendMail,
    createMailHtml,
};
