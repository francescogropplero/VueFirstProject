import { render, screen } from "@testing-library/vue";
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent component to provide a title", () => {
    render(HeaderContainer, {
      slots: {
        title: "<h1>Random title</h1>",
      },
    });

    expect(screen.getByText("Random title")).toBeInTheDocument();
  });

  it("allows parent component to provide a subtitle", () => {
    render(HeaderContainer, {
      slots: {
        subtitle: "<h3>Cool Subtitle </h3>",
      },
    });

    expect(screen.getByText("Cool Subtitle")).toBeInTheDocument();
  });
});
