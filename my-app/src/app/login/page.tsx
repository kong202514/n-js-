import { submitForm } from "./action";

export default function Create() {
  return (
    <div>
      {" "}
      <form action={submitForm}>
        {" "}
        Email <input type="email" name="email" /> <br />
        age <input type="text" name="age" /> <br />
        <button>Submit</button>{" "}
      </form>{" "}
    </div>
  );
}
