import Button from "../Buttons/Button";

export default function GetStarted() {
  return (
    <div className="my-16 flex justify-center">
      <div className="text-center">
        <a
          href="https://app.docutech.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-md px-8 py-3 text-xl">
            Get Started
          </Button>
        </a>
      </div>
    </div>
  );
}