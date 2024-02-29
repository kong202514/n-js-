import Nav from "../../../component/Nav";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Nav />
      this is blog create <br />
      <br />
      title <input type="text" name="" id="" /> <br />
      <br />
      content <input type="text" name="" id="" /> <br /> <br />
      <br />
      {/* <input type="button" value="save" className="m-2" />
      <input type="button" value="clear" className="m-2" />
      <input type="button" value="delete" className="m-2" /> */}
      <Link href="../../page/blog/create">
        <button className="m-2 btn btn-primary"> save</button>
      </Link>
      <Link href="../../page/blog/create">
        <button className="m-2 btn btn-primary"> clear</button>
      </Link>
      <Link href="../../../page/blog/delete/255555">
        <button className="m-2 btn btn-primary"> delete</button>
      </Link>
    </div>
  );
}
