import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useJobsStore } from "@/stores/jobs";
import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const renderJobListings = ($route) => {
    const pinia = createTestingPinia();

    render(JobListings, {
      global: {
        plugins: [pinia],
        mocks: {
          $route,
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("fetches jobs", () => {
    const $route = createRoute();
    renderJobListings($route);
    const jobsStore = useJobsStore();
    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("displays max 10 jobs", async () => {
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);

    renderJobListings($route);
    const jobsStore = useJobsStore();
    jobsStore.jobs = Array(15).fill({});
    
    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });
});
