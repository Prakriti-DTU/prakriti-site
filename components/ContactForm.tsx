import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 grid-rows-6 w-full px-4 md:w-4/5 md:px-0 justify-center m-auto py-4 gap-[2px]">
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
        className="bg-[#1A1A1A] w-full row-span-3 md:col-span-2 px-4 py-6 text-[#FEFEFE]"
        placeholder="Type your message here"
      />
    </form>
  );
};

export default ContactForm;
