import React from "react";

async function sendMessage(formData) {
  "use server";
  const name = formData.get("name");
  const message = formData.get("message");
  // Replace with real persistence or email integration
  console.log("Contact message:", { name, message });
}

export default function ContactPage() {
  return (
    <div>
      <h2>Contact</h2>
      <form action={sendMessage}>
        <input name="name" placeholder="Your name" required />
        <textarea name="message" placeholder="Your message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
