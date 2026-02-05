import { Resend } from "resend";
import { defineAction } from "astro:actions";
import { RESEND_API_KEY, FROM_EMAIL, TO_EMAIL } from "astro:env/server";
import { z } from "astro:schema";

const resend = new Resend(RESEND_API_KEY);

export const server = {
  sendMail: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email"),
      message: z.string().optional(),
    }),
    handler: async (input) => {
      try {
        const { name, email, message = "" } = input;

        await resend.emails.send({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          subject: `Nuevo mensaje de contacto de ${name}`,
          html: `
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h3>Mensaje:</h3>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        });

        return { success: true, message: "E-mail sent successfully ✅" };
      } catch (error) {
        return {
          success: false,
          message: "There was an error sending the e-mail ❌",
        };
      }
    },
  }),
};