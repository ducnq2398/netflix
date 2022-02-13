import { Button, TextField } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import Logo from "../public/images/logo.svg";

export default function Index() {
  return (
    <div>
      <div className="bg-login">
        <div className="header">
          <Image src={Logo} width={136} height={36} />
          <div className="signin">
            <a className="login" href="/login">
              Sign In
            </a>
          </div>
        </div>
        <div className="content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <div className="email">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form autoComplete="off">
              <input
                autoComplete="off"
                type="text"
                className="input-focus"
                placeholder="Email address"
              />
              <Button
                variant="contained"
                href="#contained-buttons"
                style={{
                  height: 70,
                  color: "#fff",
                  backgroundColor: "#e50914",
                }}
              >
                Get Started
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
