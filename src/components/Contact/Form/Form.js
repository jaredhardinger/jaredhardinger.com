import { ValidationError } from "@formspree/react";
import "./form.scss";

function Form({ state, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" placeholder="Name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Form;
