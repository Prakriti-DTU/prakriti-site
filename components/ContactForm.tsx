import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="grid grid-cols-2 grid-rows-4 w-4/5 justify-center m-auto py-4 gap-[2px]">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="text-[#FEFEFE] bg-[#1A1A1A] w-full py-6 px-4"
      />
      <input
        type="text"
        name="firstName"
        placeholder="Last Name"
        className="text-[#FEFEFE] bg-[#1A1A1A] w-full py-6 px-4"
      />
      <input
        type="text"
        name="firstName"
        placeholder="Email"
        className="text-[#FEFEFE] bg-[#1A1A1A] w-full py-6 px-4"
      />
      <input
        type="text"
        name="firstName"
        placeholder="Contact Number"
        className="text-[#FEFEFE] bg-[#1A1A1A] w-full py-6 px-4"
      />
      <textarea
        className="bg-[#1A1A1A] w-full row-span-2 col-span-2 px-4 py-6 text-[#FEFEFE]"
        placeholder="type your message here"
      />
    </form>
  );
};

export default ContactForm;
