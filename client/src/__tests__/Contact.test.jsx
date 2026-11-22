import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Contact from "../Components/Contact/Contact";

jest.mock("axios");

const fillForm = async (user, { name = "Ada", email = "ada@example.com", message = "Hello!" } = {}) => {
  if (name) await user.type(screen.getByLabelText(/your name/i), name);
  if (email) await user.type(screen.getByLabelText(/your email/i), email);
  if (message) await user.type(screen.getByLabelText(/your message/i), message);
};

describe("Contact form", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("asks for all starred fields before sending", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user, { message: "" });
    await user.click(screen.getByRole("button", { name: "Send" }));

    expect(screen.getByText(/complete all starred fields/i)).toBeInTheDocument();
    expect(axios.post).not.toHaveBeenCalled();
  });

  it("rejects an invalid email address", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user, { email: "not-an-email" });
    await user.click(screen.getByRole("button", { name: "Send" }));

    expect(screen.getByText(/valid e-mail address/i)).toBeInTheDocument();
    expect(axios.post).not.toHaveBeenCalled();
  });

  it("posts the message and thanks the sender", async () => {
    axios.post.mockResolvedValue({ data: { message: "MAIL_SUCCESS" } });
    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user);
    await user.type(screen.getByLabelText(/your business/i), "Acme");
    await user.click(screen.getByRole("button", { name: "Send" }));

    expect(axios.post).toHaveBeenCalledWith("/api/mail", {
      name: "Ada",
      email: "ada@example.com",
      business: "Acme",
      text: "Hello!",
    });
    expect(await screen.findByText(/thank you for your message/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /send another/i }));
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
  });

  it("shows an error state when sending fails", async () => {
    axios.post.mockRejectedValue(new Error("network"));
    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Send" }));

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /try again/i })).toBeInTheDocument();
  });
});
