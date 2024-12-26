import { Boxes } from "./ui/background-boxes";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const MessageForm = () => {
  const [hasName, setHasName] = useState(true);
  const [hasEmail, setHasEmail] = useState(true);
  const [hasSubject, setHasSubject] = useState(true);
  const [hasMessage, setHasMessage] = useState(true);

  const SendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("sender_name") as string;
    const email = formData.get("sender_email") as string;
    const subject = formData.get("sender_subject") as string;
    const message = formData.get("sender_message") as string;

    setHasName(!!name);
    setHasEmail(!!email);
    setHasSubject(!!subject);
    setHasMessage(!!message);

    if (!name || !email || !subject || !message) {
      alert("All fields are required.");
      return;
    }

    emailjs.sendForm(
      "service_jmjcrx8",
      "template_irh3iyd",
      form,
      "2XmCQhmuJTNFNp5mc"
    );

    form.reset();
    alert("Message sent successfully!");
  };

  return (
    <div
      id="contact_sec"
      className="min-h-screen w-full flex justify-center items-center"
    >
      <div className="h-full relative w-full overflow-hidden bg-customColor-dark flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-customColor-dark z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <div className="z-20 flex flex-col border-white/5 border-2 w-5/6">
          <div className=" bg-customColor-primary p-10">
            <h1 className="">Lets start something GREAT</h1>
          </div>
          <form
            onSubmit={SendEmail}
            className="bg-white/5 p-10 backdrop-blur-sm flex flex-col gap-4"
          >
            <div className="flex flex-col md:flex-row">
              <label htmlFor="name_input">Name</label>
              <input
                type="text"
                name="sender_name"
                id="name_input"
                className="form-text-input"
              />
              <span
                className={`text-sm text-red-600 text-right pointer-events-none ${
                  !hasName ? "block" : "hidden"
                }`}
              >
                please input your name.
              </span>
              <br />
              <label htmlFor="email_input">Your Email</label>
              <input
                type="email"
                name="sender_email"
                id="email_input"
                className="form-text-input"
              />
              <span
                className={`text-sm text-red-600 text-right pointer-events-none ${
                  !hasEmail ? "block" : "hidden"
                }`}
              >
                please input your email.
              </span>
            </div>

            <div className="flex flex-col md:flex-row">
              <label htmlFor="subject_input">Subject</label>

              <input
                type="text"
                name="sender_subject"
                id="subject_input"
                className="form-text-input"
              />
              <span
                className={`text-sm text-red-600 text-right pointer-events-none ${
                  !hasSubject ? "block" : "hidden"
                }`}
              >
                please input the message subject.
              </span>
              <br />
              <label htmlFor="message_input">Message:</label>

              <textarea
                name="sender_message"
                id="message_input"
                className="form-text-input min-h-40"
              />
              <span
                className={`text-sm text-red-600 text-right pointer-events-none ${
                  !hasMessage ? "block" : "hidden"
                }`}
              >
                write some message.
              </span>
            </div>
            <button type="submit" className="bg-customColor-primary px-4 py-1">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
