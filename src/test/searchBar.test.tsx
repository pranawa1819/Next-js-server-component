import { Navbar } from "@/components/Ecommerce/Navbar/Navbar";
import { logRoles, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));
describe("SearchBar", () => {
  it("render the input and search button", () => {
   const {container} = render(<Navbar />);
   logRoles(container);

    expect(screen.getByRole("textbox", { name: /product name/i })).toBeInTheDocument;
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("updates the input value when user types", async () => {
    

  });
});
