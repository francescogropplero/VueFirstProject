import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useJobsStore } from "@/stores/jobs";
import JobListings from "@/components/JobResults/JobListings.vue";
import { useRoute } from "vue-router";

vi.mock("vue-router");

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
    useRoute.mockReturnValue({ query: {} });
    renderJobListings();
    const jobsStore = useJobsStore();
    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("displays max 10 jobs", async () => {
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    useRoute.mockReturnValue({ query: { page: "1" } });

    renderJobListings();
    const jobsStore = useJobsStore();
    jobsStore.jobs = Array(15).fill({});
    
    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });
});
