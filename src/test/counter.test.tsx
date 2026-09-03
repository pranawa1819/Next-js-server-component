import Counter from "@/components/Button/CounterButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it} from "vitest";


describe("Counter", () => {
  it("increments count", async () => {
    render(<Counter />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(screen.getByText("1")).toBeInTheDocument();
    
  });
});
