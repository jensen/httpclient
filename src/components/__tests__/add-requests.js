import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AddMethod } from "components/request/method";

describe("Adding Requests", () => {
  it("should call addRequest with GET when the plus button is clicked", () => {
    const addRequestMock = jest.fn();

    const { getByTitle } = render(<AddMethod addRequest={addRequestMock} />);

    fireEvent.click(getByTitle("Add"));

    expect(addRequestMock).toBeCalledTimes(1);
    expect(addRequestMock).toBeCalledWith("GET");
  });

  it("should call addRequest with the matching method", () => {
    const addRequestMock = jest.fn();

    const { getByText } = render(<AddMethod addRequest={addRequestMock} />);

    fireEvent.click(getByText("GET"));

    expect(addRequestMock).toBeCalledTimes(1);
    expect(addRequestMock).toBeCalledWith("GET");

    fireEvent.click(getByText("POST"));

    expect(addRequestMock).toBeCalledTimes(2);
    expect(addRequestMock).toBeCalledWith("POST");
  });
});
