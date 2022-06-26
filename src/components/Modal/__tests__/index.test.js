/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

afterEach(cleanup);

const currentPhoto = {
	name: "Park bench",
	category: "landscape",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	index: 1,
};

const mockToggleModal = jest.fn();

describe("Modal component", () => {
	// baseline test
	it("renders", () => {
		render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
	});

	// snapshot test
	it("matches snapshot DOM node structure", () => {
		const { asFragment } = render(
			<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe("Click Event", () => {
	it("calls onClose handler", () => {
		// Arrange: Render Modal
		const { getByText } = render(
			<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
		);
		// Act: Simulate Click Event
		fireEvent.click(getByText("Close this modal"));
		// Assert" Expected Matcher
		expect(mockToggleModal).toHaveBeenCalledTimes(1);
	});
});
