import { fireEvent, render, screen } from "@testing-library/react";
import { Link, MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import ScrollToTop from "../components/ScrollToTop";

describe("ScrollToTop", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("resets the viewport when navigating to another route", () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => undefined);

    render(
      <MemoryRouter initialEntries={["/source"]}>
        <ScrollToTop />
        <Routes>
          <Route
            path="/source"
            element={<Link to="/destination">Open destination</Link>}
          />
          <Route path="/destination" element={<p>Destination page</p>} />
        </Routes>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("link", { name: "Open destination" }));

    expect(screen.getByText("Destination page")).toBeInTheDocument();
    expect(scrollTo).toHaveBeenLastCalledWith(0, 0);
  });
});
