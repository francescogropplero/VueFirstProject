import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useJobsStore } from "@/stores/jobs";
import JobListings from "@/components/JobResults/JobListings.vue";
import { useRoute } from "vue-router";
import type { Mock } from "vitest";

vi.mock("vue-router");
const useRouteMock = useRoute as Mock;

describe("JobListings", () => {
  const renderJobListings = () => {
    const pinia = createTestingPinia();

    render(JobListings, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("fetches jobs", () => {
    useRouteMock.mockReturnValue({ query: {} });
    renderJobListings();
    const jobsStore = useJobsStore();
    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("fetches degrees", () => {
    useRouteMock.mockReturnValue({ query: {} });
  });

  it("displays max 10 jobs", async () => {
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    useRouteMock.mockReturnValue({ query: { page: "1" } });

    renderJobListings();
    const jobsStore = useJobsStore();
    jobsStore.jobs = Array(15).fill({});

    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });
});
