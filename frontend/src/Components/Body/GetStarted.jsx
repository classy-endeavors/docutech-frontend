import Button from "../Buttons/Button";

export default function GetStarted() {
  return (
    <div className="my-16 flex justify-center px-4">
      <div className="text-center">
        <a
          href="https://app.docutech.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-md px-6 md:px-8 py-3 text-lg md:text-xl">
            Get Started
          </Button>
        </a>
      </div>
    </div>
  );
}