import Nav from "../../component/Nav";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Nav />
      <Link href="../../page/blog/create">
        <button className="btn btn-primary"> crate</button>
      </Link>
      delete
      <ul className="justify-content-center">
        <li> blog #1</li>
        <li> blog #2</li>
        <li> blog #3</li>
      </ul>
    </div>
  );
}
