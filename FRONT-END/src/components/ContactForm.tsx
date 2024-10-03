import { useState } from "react";

interface FormData {
  mail: string;
  name: string;
  surname: string;
  message: string;
}

export function ContactForm() {
  const [data, setData] = useState<FormData>({
    mail: "",
    name: "",
    surname: "",
    message: "",
  });

  function handleData(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setData({ ...data, [name]: value });
  }
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <form className="home-form" onSubmit={handleFormSubmit}>
        <div className="input-form">
          <input
            type="text"
            placeholder="Enter your email"
            name="mail"
            value={data.mail}
            onChange={handleData}
          />
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={data.name}
            onChange={handleData}
          />
          <input
            type="text"
            placeholder="Enter your surname"
            name="surname"
            value={data.surname}
            onChange={handleData}
          />
        </div>
        <div className="txt-btn">
          <textarea
            name="message"
            placeholder="Your message"
            value={data.message}
            onChange={handleData}
          />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}
