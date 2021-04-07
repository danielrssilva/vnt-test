import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Team from "../../pages/Team/index";

describe("Register new team", () => {
  it("Complete registration", async () => {
    render(<Team />);

    const nameField = screen.getByTestId("input-name");
    fireEvent.change(nameField, { target: { value: "Inter Milan" } });

    const websiteField = screen.getByTestId("input-website");
    fireEvent.change(websiteField, {
      target: { value: "http://www.intermillan.com" },
    });

    const descriptionArea = screen.getByTestId("area-description");
    fireEvent.change(descriptionArea, {
      target: { value: "Inter Milan Squad" },
    });

    const radioReal = screen.getByTestId("radio-real");
    expect(radioReal.checked).toEqual(false);
    fireEvent.click(radioReal);
    expect(radioReal.checked).toEqual(true);
    expect(radioReal.value).toEqual("real");

    expect(nameField.value).toEqual("Inter Milan");
    expect(websiteField.value).toEqual("http://www.intermillan.com");
    expect(descriptionArea.value).toEqual("Inter Milan Squad");

    const submitButton = screen.getByTestId("button-submit");
    fireEvent.click(submitButton);
    const successBanner = screen.getByTestId("modal-success");
    expect(successBanner).toBeDefined();
  });
  it("Unsuccessful registration", async () => {
    render(<Team />);

    const nameDiv = screen.getByTestId("name-div");
    const websiteDiv = screen.getByTestId("website-div");
    const typeDiv = screen.getByTestId("type-div");

    const submitButton = screen.getByTestId("button-submit");
    fireEvent.click(submitButton);

    expect(nameDiv).toHaveClass("error");
    expect(websiteDiv).toHaveClass("error");
    expect(typeDiv).toHaveClass("error");
  });
});

describe("Should test masks", () => {
  it("Test website mask", async () => {
    render(<Team />);

    const websiteField = screen.getByTestId("input-website");
    fireEvent.change(websiteField, {
      target: { value: " http://www.intermillan.com " },
    });
    expect(websiteField.value).toEqual("http://www.intermillan.com");
  });
});
