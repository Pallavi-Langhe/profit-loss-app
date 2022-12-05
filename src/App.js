import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState();

  function checkHandler(event) {
    event.preventDefault();

    let diff, percent, msg;

    let body = document.querySelector("body");
    let initialPrice = document.querySelector("#initial-price").value;
    let quantity = document.querySelector("#quantity").value;
    let currentPrice = document.querySelector("#current-price").value;

    initialPrice = Number(initialPrice);
    quantity = Number(quantity);
    currentPrice = Number(currentPrice);

    if (initialPrice > 0 && quantity > 0 && currentPrice > 0) {
      if (initialPrice > currentPrice) {
        // loss
        diff = initialPrice - currentPrice;
        percent = (diff / initialPrice) * 100;

        msg = `There's a ${percent.toFixed(2)}% loss. You have lost ₹${(
          diff * quantity
        ).toFixed(2)} 😞`;

        if (percent > 50) {
          body.style.backgroundColor = "rgb(255, 83, 83)";
        } else {
          body.style.backgroundColor = "rgb(229,231,235)";
        }
      } else if (currentPrice > initialPrice) {
        // profit
        diff = currentPrice - initialPrice;
        percent = (diff / initialPrice) * 100;

        msg = `There's a ${percent.toFixed(2)}% profit. You've gained ₹${(
          diff * quantity
        ).toFixed(2)} 😀`;

        if (percent > 50) {
          body.style.backgroundColor = "rgb(52,211,153)";
        } else {
          body.style.backgroundColor = "rgb(229,231,235)";
        }
      } else {
        // no profit or loss
        msg = "You're still! 😐";
        body.style.backgroundColor = "rgb(14, 18, 26)";
      }
    } else {
      msg = "Please enter values greater than zero.";
    }

    setResult(msg);
  }

  return (
    <div className="App">
      <header>
        <h1>Check Profit or Loss on your Stocks</h1>
      </header>

      <div className="wrapper">
        <div className="main">
          <p className="headingText">
            Enter the cost price of your stock, the number of units you bought,
            and the current price of the stock below.
          </p>

          <form>
            <label>Purchased at: (Rupees) </label>
            <input id="initial-price" type="number" autoFocus required></input>

            <label>Units purchased</label>
            <input id="quantity" type="number" required></input>

            <label>Current value at: (Rupees) </label>
            <input id="current-price" type="number" required></input>

            <button
              type="submit"
              className="btn"
              onClick={(event) => checkHandler(event)}
            >
              Check
            </button>
          </form>
          <div id="result">{result}</div>
        </div>
      </div>

      <footer>
        <a target="_blank" href={"#"}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-github"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>{" "}
        </a>
        <a target="_blank" href={"#"}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-linkedin"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>{" "}
        </a>
        <a target="_blank" href={"#"}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-twitter"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
          </svg>{" "}
        </a>
        <a target="_blank" href={"#"}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-instagram"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>{" "}
        </a>
      </footer>
    </div>
  );
}
