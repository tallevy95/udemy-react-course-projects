import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Bag of Money" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
