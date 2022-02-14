import { Button, TextField } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import Logo from "../public/images/logo.svg";
import App from "../public/images/netflix-app.jpeg";

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
      <div className="line"></div>
      <div className="app">
        <div className="description">
          <h1>Have an Android Phone? Get our new free plan!</h1>
          <h3>
            Watch a selection of new movies and TV shows without adding any
            payment details!
          </h3>
          <a href="#">Get the app </a>
        </div>
        <div className="app-logo">
          <Image src={App} />
        </div>
      </div>
      <div className="line"></div>
      <div className="bottom">
        
      </div>
    </div>
  );
}
