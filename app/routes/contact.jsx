// Handles POST, PUT, PATCH, DELETE request

import {
  validateEmail,
  validateMessage,
  validatePhone,
  validateText,
} from "../.server/validation";

import { data, Form } from "react-router";

export async function action({ request }) {
  let formData = await request.formData();
  let name = formData.get("name");
  let phone = formData.get("phone");
  let email = formData.get("email");
  let message = formData.get("message");

  console.log({ name, phone, email, message });

  //   Validation
  let fieldErrors = {
    name: validateText(name),
    phone: validatePhone(phone),
    email: validateEmail(email),
    message: validateMessage(message),
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    return data(
      { fieldErrors },
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  return null;
}

export default function Contact({ actionData }) {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="mt-10 text-3xl font-bold ">Contact</h1>
      <Form method="post" className="space-y-5 mt-5">
        <FormSpacer>
          <Label htmlFor="name" text="Name" />
          <Input
            type="text"
            id="name"
            name="name"
            hasError={actionData?.fieldErrors.name}
          />
          {actionData?.fieldErrors.name ? (
            <p className="text-red-500">{actionData?.fieldErrors.name}</p>
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label
            htmlFor="phone"
            text="Phone"
            hasError={actionData?.fieldErrors.phone}
          />
          <Input type="numbers" id="phone" name="phone" />
          {actionData?.fieldErrors.phone ? (
            <p className="text-red-500">{actionData?.fieldErrors.phone}</p>
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label
            htmlFor="email"
            text="Email"
            hasError={actionData?.fieldErrors.email}
          />
          <Input type="email" id="email" name="email" />
          {actionData?.fieldErrors.email ? (
            <p className="text-red-500">{actionData?.fieldErrors.email}</p>
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label htmlFor="message" text="Message" />
          <Input
            type="text"
            id="message"
            name="message"
            hasError={actionData?.fieldErrors.message}
          />
          {actionData?.fieldErrors.message ? (
            <p className="text-red-500">{actionData?.fieldErrors.message}</p>
          ) : null}
        </FormSpacer>

        <button
          type="submit"
          className="bg-amber-500 text-black px-4 rounded-md py-3 cursor-pointer font-bold"
        >
          Send Message
        </button>
      </Form>
    </main>
  );
}

function Label({ htmlFor, text }) {
  return <label htmlFor={htmlFor}>{text}</label>;
}

function Input({ type, id, name, hasError }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`border ${
        hasError ? "border-red-500" : "border-gray-300"
      }  p-4 rounded-md`}
    />
  );
}

function FormSpacer({ children }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
