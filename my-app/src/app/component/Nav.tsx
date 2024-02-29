import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

export default function nav() {
  return (
    <div>
      <Link href=" ">
        <h4>this is nav</h4>
      </Link>

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            href="../page/blog"
          >
            blog
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="../page/register">
            register
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="../page/web">
            web
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="../page/aboutus">
            555
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="../page/aboutus">
            login
          </Link>
        </li>
      </ul>
    </div>
  );
}
