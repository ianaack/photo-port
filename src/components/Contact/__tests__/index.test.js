/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
	it("renders", () => {
		render(<ContactForm />);
	});

	it("matches snapshot", () => {
		const { asFragment } = render(<ContactForm />);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe("Contact Me is visible", () => {
	it("inserts text into the h1", () => {
		const { getByTestId } = render(<ContactForm />);

		expect(getByTestId("contact-title")).toHaveTextContent("Contact Me");
	});
});

describe("button is a submit", () => {
	it("uses submit", () => {
		const { getByTestId } = render(<ContactForm />);

		expect(getByTestId("button")).toHaveTextContent("Submit");
	});
});
