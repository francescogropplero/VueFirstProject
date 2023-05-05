import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import type { Job } from "@/api/types";
import JobListing from "@/components/JobResults/JobListing.vue";
import { createJob } from "../../../utils/createJob";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "AirBnB",
    ...jobProps,
  });
  const renderJobListing = (job: Job) => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          ...job,
        },
      },
    });
  };

  it("renders job title", () => {
    const jobProps = createJob({ title: "React Developer" });
    renderJobListing(jobProps);
    expect(screen.getByText("React Developer")).toBeInTheDocument();
  });

  it("renders job organization", () => {
    const jobProps = createJob({ organization: "Apple" });
    renderJobListing(jobProps);
    expect(screen.getByText("Apple")).toBeInTheDocument();
  });

  it("renders job locations", () => {
    const jobProps = createJob({
      locations: ["Orlando", "Jacksonville"],
    });
    renderJobListing(jobProps);
    expect(screen.getByText("Orlando")).toBeInTheDocument();
    expect(screen.getByText("Jacksonville")).toBeInTheDocument();
  });

  it("renders job qualifications", () => {
    const jobProps = createJob({
      minimumQualifications: ["Code", "Develop"],
    });
    renderJobListing(jobProps);
    expect(screen.getByText("Code")).toBeInTheDocument();
    expect(screen.getByText("Develop")).toBeInTheDocument();
  });
});
