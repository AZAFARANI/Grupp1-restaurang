require("dotenv").config();

const fs = require("fs");
const path = require("path");
const hbs = require("handlebars");
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

async function sendMail(
    emailTo,
    booking,
    templatePath = "/templates/Email.hbs"
) {
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

        const emailTemplateSource = fs.readFileSync(
            __dirname + templatePath,
            "utf-8"
        );
        const emailTemplate = hbs.compile(emailTemplateSource);
        const date = new Date(booking.timestamp);
        const htmlToSend = emailTemplate({
            id: `${booking._id}`,
            guestCount: `${booking.guestCount}`,
            allergies: `${booking.allergies}`,
            date: `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`,
            link: `http://localhost:3000/bookings/${booking._id}?customerId=${booking.customerId}`,
        });

        const mailData = {
            from: '"Tramonto" <tramonto.restaurant.sweden@gmail.com>',
            to: emailTo,
            subject: `Bokning ${booking._id}`,
            html: htmlToSend,
            attachments: [
                {
                    filename: "Logo.png",
                    path: __dirname + "/templates/Logo.png",
                    cid: "logo",
                },
            ],
        };

        const result = await transporter.sendMail(mailData);
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = {
    sendMail,
};
