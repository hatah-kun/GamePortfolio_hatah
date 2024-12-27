import { Boxes } from "./ui/background-boxes";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { TbBrandGmail, TbBrandFacebook, TbPhone } from "react-icons/tb";
import { Toaster, toast } from "sonner";
import UnderLineLabel from "./ui/UnderLineLabel";

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
      DisplayNotif("Please fill all fields..", 0);
      return;
    }

    emailjs.sendForm(
      "service_jmjcrx8",
      "template_irh3iyd",
      form,
      "2XmCQhmuJTNFNp5mc"
    );

    form.reset();
    DisplayNotif("Message sent!", 1);
  };

  return (
    <div
      id="contact_sec"
      className="min-h-screen w-full flex justify-center items-center"
    >
      <Toaster
        toastOptions={{
          className:
            " border-2 border-customColor-primary text-white bg-customColor-dark",
        }}
      />
      <div className="h-full relative w-full overflow-hidden bg-customColor-dark flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-customColor-dark z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <div
          className="z-20 grid grid-cols-1 border-white/5 border-2 w-5/6
      md:grid-cols-6 lg:max-w-7xl"
        >
          <div className=" bg-customColor-primary p-10 md:col-span-2 v-clip flex flex-col justify-between border-r border-white/5">
            <div>
              {/* <p className="font-Gemsbuck_regular text-xl underline underline-offset-4">
                contact
              </p> */}
              <UnderLineLabel
                content={"Contact"}
                class="font-Gemsbuck_regular text-xl"
              />
              <br />
              <h1 className="text-white text-3xl md:text-5xl text-right font-StylishBold border-r-2 px-2">
                Let's re-imagine <br /> your game
              </h1>
            </div>
            <div className="flex gap-1 text-3xl">
              <button
                className="flex items-center p-2 hover:bg-black/20"
                onClick={() => copyToClipboard(0)}
              >
                <TbBrandGmail />
              </button>
              <button
                className="flex items-center p-2 hover:bg-black/20"
                onClick={() => copyToClipboard(1)}
              >
                <TbBrandFacebook />
              </button>
              <button
                className="flex items-center p-2 hover:bg-black/20"
                onClick={() => copyToClipboard(2)}
              >
                <TbPhone />
              </button>
            </div>
          </div>
          <form
            onSubmit={SendEmail}
            className="w-full bg-white/5 p-10 backdrop-blur-sm grid grid-flow-row gap-4
        md:grid-cols-6 md:col-span-4"
          >
            <div className="flex flex-col col-span-6 md:col-span-3">
              <label className="form-label " htmlFor="name_input">
                Name
              </label>
              <input
                type="text"
                name="sender_name"
                id="name_input"
                className="form-text-input"
                placeholder="John Doe"
              />
              <span
                className={`text-sm text-red-600 text-right pointer-events-none ${
                  !hasName ? "block" : "hidden"
                }`}
              >
                please input your name.
              </span>
            </div>

            <div className="flex flex-col col-span-6 md:col-span-3">
              <label className="form-label " htmlFor="email_input">
                Your Email
              </label>
              <input
                type="email"
                name="sender_email"
                id="email_input"
                className="form-text-input"
                placeholder="Doe@mail.com"
              />
              <span
                className={`text-sm text-red-600 text-right pointer-events-none ${
                  !hasEmail ? "block" : "hidden"
                }`}
              >
                please input your email.
              </span>
            </div>

            <div className="flex flex-col col-span-6 md:col-span-4">
              <label className="form-label " htmlFor="subject_input">
                Subject
              </label>

              <input
                type="text"
                name="sender_subject"
                id="subject_input"
                className="form-text-input"
                placeholder="My purpose"
              />
              <span
                className={`text-sm text-red-600 text-right pointer-events-none ${
                  !hasSubject ? "block" : "hidden"
                }`}
              >
                please input the message subject.
              </span>
            </div>

            <div className="flex flex-col col-span-6">
              <label className="form-label " htmlFor="message_input">
                Message:
              </label>
              <textarea
                name="sender_message"
                id="message_input"
                className="form-text-input min-h-40"
                placeholder="Say something..."
              />
              <span
                className={`text-sm text-red-600 text-right pointer-events-none ${
                  !hasMessage ? "block" : "hidden"
                }`}
              >
                write some message.
              </span>
            </div>

            <button
              type="submit"
              className="bg-customColor-primary button-Style col-span-6"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const copyToClipboard = (infoType: number) => {
  let text;
  let textNotif: string;
  switch (infoType) {
    case 0:
      text = "nicolasjohnabielp@gmail.com";
      textNotif = "copied email address to clipboard";
      break;

    case 1:
      text = "https://www.facebook.com/nicolashatah";
      textNotif = "copied facebook profile link to clipboard";
      break;

    case 2:
      text = "+639093712753";
      textNotif = "copied mobile number to clipboard";
      break;

    default:
      text = "nicolasjohnabielp@gmail.com";
      break;
  }

  navigator.clipboard.writeText(text).then(
    () => {
      console.log("Text copied to clipboard!");
      DisplayNotif(textNotif);
    },
    (err) => {
      console.log("Failed to copy text: ", err);
    }
  );
};

const DisplayNotif = (text: string, type?: number) => {
  if (type === 0) {
    toast.error("Warning:", {
      description: text,
    });
    return;
  }

  if (type === 1) {
    toast.success("Successful:", {
      description: text,
    });
    return;
  }

  toast("Notification:", {
    description: text,
  });
};

export default MessageForm;
